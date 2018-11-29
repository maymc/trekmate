const express = require('express');
const tripRouter = express.Router();

//Bookshelf data models
const Trip = require('../db/models/Trips.js');

//Get all trips in database
tripRouter.get('/', (req, res) => {
    Trip
        .fetchAll()
        .then(items => {
            res.json(items.serialize())
        })
        .catch(err => {
            console.log('err', err)
            res.json('err')
        })
})

//Get trip by user_id
// tripRouter.get('/')



module.exports = tripRouter