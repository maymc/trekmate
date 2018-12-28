const express = require('express');
const resetRouter = express.Router();
const Users = require('../db/models/Users');
const api_key = '2b883b0b35ef11176cb0cc7fa8a54524-b3780ee5-fb002e81';
const domain = 'sandbox8a7271888eb14ff7ae877ff78e76fbf8.mailgun.org';
const mailgun = require('mailgun-js')({ apiKey: api_key, domain: domain });

const tempPassword = Math.random().toString(36).slice(-8);

resetRouter.post('/', (req, res) => {
    const data = {
        from: 'Abby <abbyzhang21@gmail.com>',
        to: 'abbyzhang21@gmail.com',
        subject: 'Trekmate',
        text: 'Here is your temporary password: ' + tempPassword
    };
    // console.log('temp password:', tempPassword);
    Users
        .where({ email: req.body.email })
        .fetch()
        .then(isAuth => {
            if (!isAuth) {
                res.send({ email: req.body.email, status: 'failed' })

                // console.log('User not exist', req.body)
            } else {
                mailgun.messages().send(data, function (error) {
                    if (error) {
                        console.log(error);
                    } else {
                        res.send({ email: req.body.email, status: 'success' })
                        // console.log('email send?', req.body);

                    }

                })
            }
        }
        )
        .catch(err => {
            console.log("verify error", err);
            res.json("verify error", err);
        })

})

resetRouter.put('/request', (req, res) => {
    const updatedUserPassword = {
        password: tempPassword
    }
    Users
        .where({ email: req.body.email })
        .fetch()
        .then((currentUserPassword) => {
            return currentUserPassword.save(updatedUserPassword)
        })
        .then((result) => {
            // console.log('Updated user', result)
            res.json(result)
        })
        .catch(err => {
            console.log("\nPUT - edit user password error", err);
            res.json("PUT - edit user password error", err);
        })
})


module.exports = resetRouter;