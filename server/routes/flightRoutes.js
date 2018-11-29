const express = require('express');
const flightRouter = express.Router();

//Bookshelf data models
const Flights = require('../db/models/Flights.js');

//GET all flights in database
flightRouter.get('/', (req, res) => {
    Flights
        .fetchAll()
        .then(flightsList => {
            res.json(flightsList.serialize())
        })
        .catch(err => {
            console.log('err', err)
            res.json('err')
        })
})

//GET flights by user_id <-- need to fix this, it is grabbing by flight id NOT user_id
flightRouter.get('/:id', (req, res) => {
    const { id } = req.params

    Flights
        .where({ id })
        .fetch()
        .then((flight) => {
            res.json(flight)
        })
        .catch((err) => {
            console.log('err', err)
            res.json(err)
        })
})

//POST new flight into 'Flights' table



module.exports = flightRouter