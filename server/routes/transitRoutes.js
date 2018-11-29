const express = require('express');
const transitRouter = express.Router();

//Bookshelf data models
const Transit = require('../db/models/Transit.js');

//Get all trips in database
transitRouter.get('/', (req, res) => {
    Transit
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
transitRouter.get('/:id', (req, res) => {
    const { id } = req.params

    Transit
        .where({ id })
        .fetch()
        .then((transitItem) => {
            res.json(transitItem)
        })
        .catch((err) => {
            console.log('err', err)
            res.json(err)
        })
})

//post new trip into 'Trip' table



module.exports = transitRouter