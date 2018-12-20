const express = require('express');
const resetRouter = express.Router();
const Users = require('../db/models/users.js');
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
    console.log('temp password:', tempPassword);
    Users
        .where({ email: req.body.email })
        .fetch()
        .then(isAuth => {
            if (!isAuth) {
                res.send({ status: 'failed' })

                console.log('User not exist', req.body)
            } else {
                mailgun.messages().send(data, function (error) {
                    if (error) {
                        console.log(error);
                    } else {
                        res.send({ status: 'success' })
                        console.log('email send?', req.body);


                    }


                })
            }
        }
        )
        .catch(err => {
            console.log("vertify error", err);
            res.json("vertify error", err);
        })

})



module.exports = resetRouter;