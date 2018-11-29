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

    // console.log("\nNew User check:", newAccommodation);

    Accommodation
        .forge(newAccommodation)
        .save()
        .then(() => {
            return Accommodation.fetchAll()
        })
        .then(Accommodation => {
            res.json(Accommodation.serialize());
        })
        .catch(err => {
            console.log("\nPOST - adding new user error", err);
            res.json("error");
        })
});


module.exports = accommodationRouter