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
transitRouter.get('/:user_id', (req, res) => {
    const { user_id } = req.params

    Transit
        .where({ user_id })
        .fetchAll()
        .then((transitItem) => {
            res.json(transitItem.serialize())
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

//PUT tansit into 'Transit' table
transitRouter.put('/edit/:id', (req, res) => {
    const { id } = req.params
    const newTransit = {
        id: id,
        type: req.body.type,
        date: req.body.date,
        time: req.body.time,
        reservation: req.body.reservation,
        price: req.body.price,
        user_id: req.body.user_id,
        trip_id: req.body.trip_id
    }

    Transit
        .where({ id })
        .fetch()
        .then((transitItem) => {
            return transitItem.save(newTransit)
        })
        .then((result) => {
            console.log('updated transit', result)
            res.json(result)
        })
})

module.exports = transitRouter