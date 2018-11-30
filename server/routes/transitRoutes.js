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

//GET transit by user_id <-- need to fix this, it is grabbing by transit id NOT user_id
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
transitRouter.post('/add', (req, res) => {

    const newtransit = {
        type: req.body.type,
        date: req.body.date,
        time: req.body.time,
        reservation: req.body.reservation,
        price: req.body.price,
        user_id: req.body.user_id,
        trip_id: req.body.trip_id
    }

    Transit
        .forge(newtransit)
        .save()
        .then(() => {
            return Transit.fetchAll()
        })
        .then(Transit => {
            res.json(Transit.serialize());
        })
        .catch(err => {
            console.log("\nPOST - adding new transit error", err);
            res.json("POST - adding new transit error");
        })
});


module.exports = transitRouter