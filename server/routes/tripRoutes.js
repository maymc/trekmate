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
tripRouter.get('/:id', (req, res) => {
    const { id } = req.params
    console.log(' is this trip by id work?');

    Trip
        .where({ id })
        .fetch()
        .then((tripItem) => {
            res.json(tripItem)
        })
        .catch((err) => {
            console.log('err', err)
            res.json(err)
        })
})

//post new trip into 'Trip' table



module.exports = tripRouter