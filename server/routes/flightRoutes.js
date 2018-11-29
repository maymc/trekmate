const express = require('express');
const flightRouter = express.Router();

//Bookshelf data models
const Flight = require('../db/models/Flights.js');

//Get all Flight in database
flightRouter.get('/', (req, res) => {
    Flight
        .fetchAll()
        .then(items => {
            res.json(items.serialize())
        })
        .catch(err => {
            console.log('err', err)
            res.json('err')
        })
})

//Get Flight by user_id
flightRouter.get('/:id', (req, res) => {
    const { id } = req.params

    Flight
        .where({ id })
        .fetch()
        .then((FlightItem) => {
            res.json(FlightItem)
        })
        .catch((err) => {
            console.log('err', err)
            res.json(err)
        })
})

//post new Flight into 'Flight' table



module.exports = flightRouter