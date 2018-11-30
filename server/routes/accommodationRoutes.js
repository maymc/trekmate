const express = require('express');
const accommodationRouter = express.Router();

//Bookshelf data models
const Accommodations = require('../db/models/Accommodations.js');

//GET all accommodations in database
accommodationRouter.get('/', (req, res) => {
    Accommodations
        .fetchAll()
        .then(accommodationsList => {
            res.json(accommodationsList.serialize())
        })
        .catch(err => {
            console.log('err', err)
            res.json('err')
        })
})

//GET accommodation by user_id 
accommodationRouter.get('/:user_id', (req, res) => {
    const { user_id } = req.params;

    Accommodations
        .where({ user_id })
        .fetchAll()
        .then((accommodation) => {
            res.json(accommodation.serialize())
        })
        .catch((err) => {
            console.log('err', err)
            res.json(err)
        })
})

//POST new Accommodation into 'Accommodations' table
accommodationRouter.post('/add', (req, res) => {
    const newAccommodation = {
        lodging_name: req.body.lodging_name,
        address: req.body.address,
        check_in_date: req.body.check_in_date,
        check_out_date: req.body.check_out_date,
        price: req.body.price,
        is_paid: req.body.is_paid,
        reservation_code: req.body.reservation_code,
        notes: req.body.notes,
        user_id: req.body.user_id,
        trip_id: req.body.trip_id
    }

    // console.log("\nNew Accommodation check:", newAccommodation);

    Accommodations
        .forge(newAccommodation)
        .save()
        .then(() => {
            return Accommodations.fetchAll()
        })
        .then(accommodations => {
            res.json(accommodations.serialize());
        })
        .catch(err => {
            console.log("\nPOST - adding new accommodation error", err);
            res.json("POST - adding new accommodation error");
        })
});

module.exports = accommodationRouter