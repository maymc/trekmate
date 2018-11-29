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