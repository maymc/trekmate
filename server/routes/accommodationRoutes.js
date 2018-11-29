const express = require('express');
const accommodationRouter = express.Router();

//Bookshelf data models
const Accommodation = require('../db/models/Accommodations.js');

//Get all Accommodation in database
accommodationRouter.get('/', (req, res) => {
    Accommodation
        .fetchAll()
        .then(items => {
            res.json(items.serialize())
        })
        .catch(err => {
            console.log('err', err)
            res.json('err')
        })
})

//Get Accommodation by user_id
accommodationRouter.get('/:id', (req, res) => {
    const { id } = req.params

    Accommodation
        .where({ id })
        .fetch()
        .then((AccommodationItem) => {
            res.json(AccommodationItem)
        })
        .catch((err) => {
            console.log('err', err)
            res.json(err)
        })
})

//post new Accommodation into 'Accommodation' table



module.exports = accommodationRouter