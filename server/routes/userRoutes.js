const express = require('express');
const userRouter = express.Router();

//Bookshelf data models
const User = require('../db/models/Users.js');

//Get all User in database
userRouter.get('/', (req, res) => {
    User
        .fetchAll()
        .then(items => {
            res.json(items.serialize())
        })
        .catch(err => {
            console.log('err', err)
            res.json('err')
        })
})

//Get User by user_id
userRouter.get('/:id', (req, res) => {
    const { id } = req.params

    User
        .where({ id })
        .fetch()
        .then((UserItem) => {
            res.json(UserItem)
        })
        .catch((err) => {
            console.log('err', err)
            res.json(err)
        })
})

//post new User into 'User' table



module.exports = userRouter