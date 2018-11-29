const express = require('express');
const transitRouter = express.Router();

//Bookshelf data models
const Transit = require('../db/models/Transit.js');

//GET all transit in database
transitRouter.get('/', (req, res) => {
    Transit
        .fetchAll()
        .then(transitList => {
            res.json(transitList.serialize())
        })
        .catch(err => {
            console.log('err', err)
            res.json('err')
        })
})

//GET transit by user_id
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

//POST new transit into 'Transit' table



module.exports = transitRouter