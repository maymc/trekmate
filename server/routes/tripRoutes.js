const express = require('express');
const tripRouter = express.Router();

//Bookshelf data models
const Trips = require('../db/models/Trips.js');

//GET all trips in database
tripRouter.get('/', (req, res) => {
    Trips
        .fetchAll()
        .then(tripsList => {
            res.json(tripsList.serialize())
        })
        .catch(err => {
            console.log('err', err)
            res.json('err')
        })
})

//GET trip by user_id
tripRouter.get('/:user_id', (req, res) => {
    const { user_id } = req.params

    Trips
        .where({ user_id })
        .fetchAll()
        .then((trip) => {
            res.json(trip.serialize())
        })
        .catch((err) => {
            console.log('err', err)
            res.json(err)
        })
})

//POST new trip into 'Trips' table
tripRouter.post('/add', (req, res) => {

    const payload = {
        city: req.body.city,
        state: req.body.state,
        country: req.body.country,
        start_date: req.body.start_date,
        end_date: req.body.end_date,
        collaborators: req.body.collaborators,
        user_id: req.body.user_id   //take it off later---------------->

    }
    Trip
        .forge(payload)
        .save()
        .then(tripItems => {
            res.json(tripItems.serialize())
        })
        .catch(err => {
            console.log('err', err);
            res.json(err)
        })
})

module.exports = tripRouter