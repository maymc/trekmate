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
flightRouter.post('/add', (req, res) => {

    const newflight = {
        airlines: req.body.airlines,
        departure_time: req.body.departure_time,
        arrival_time: req.body.arrival_time,
        reservation_code: req.body.reservation_code,
        checked_in_baggage: req.body.checked_in_baggage,
        price: req.body.price,
        notes: req.body.notes,
        user_id: req.body.user_id,
        trip_id: req.body.trip_id
    }

    Flights
        .forge(newflight)
        .save()
        .then(() => {
            return Flights.fetchAll()
        })
        .then(Flights => {
            res.json(Flights.serialize());
        })
        .catch(err => {
            console.log("\nPOST - adding new flight error", err);
            res.json("POST - adding new flight error");
        })
});


module.exports = flightRouter