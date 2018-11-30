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
            console.log("\nGET - getting flight list error", err);
            res.json("GET - getting flight list error", err);
        })
})

//GET flights by user_id
flightRouter.get('/:user_id', (req, res) => {
    const { user_id } = req.params

    Flights
        .where({ user_id })
        .fetchAll()
        .then((flight) => {
            res.json(flight.serialize())
        })
        .catch(err => {
            console.log("\nGET - getting flight by user_id error", err);
            res.json("GET - getting flight by user_id error", err);
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
        .then(flights => {
            res.json(flights.serialize());
        })
        .catch(err => {
            console.log("\nPOST - adding new flight error", err);
            res.json("POST - adding new flight error");
        })
});

//PUT - edit flight by flight id
flightRouter.put('/edit/:id', (req, res) => {
    const { id } = req.params;

    const updatedFlight = {
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
        .where({ id })
        .fetch()
        .then((currentFlight) => {
            return currentFlight.save(updatedFlight);
        })
        .then((result) => {
            console.log('Updated flight', result)
            res.json(result)
        })
        .catch(err => {
            console.log("\nPUT - edit flight error", err);
            res.json("PUT - edit flight error", err);
        })
})

// Delete flight by 'id' from the 'flight' table
flightRouter.delete('/delete/:id', (req, res) => {
    const { id } = req.params

    Flights
        .where({ id })
        .destroy()
        .then(
            res.send('Flight was deleted')
        )
        .catch(err => {
            console.log("\nDELETE - delete flight error", err);
            res.json("DELETE - delete flight error", err);
        })
})

module.exports = flightRouter