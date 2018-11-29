const express = require('express');
const activityRouter = express.Router();

//Bookshelf data models
const Activities = require('../db/models/Activities.js');

//Get all Activity in database
activityRouter.get('/', (req, res) => {
    Activity
        .fetchAll()
        .then(items => {
            res.json(items.serialize())
        })
        .catch(err => {
            console.log('err', err)
            res.json('err')
        })
})

//Get Activity by user_id
activityRouter.get('/:id', (req, res) => {
    const { id } = req.params

    Activity
        .where({ id })
        .fetch()
        .then((ActivityItem) => {
            res.json(ActivityItem)
        })
        .catch((err) => {
            console.log('err', err)
            res.json(err)
        })
})

//POST new Activity into 'Activity' table
activityRouter.post('/add', (req, res) => {
    console.log('\nPOST /add...');
    console.log("\nreq.body:", req.body);

    const newActivity = {
        activity_name: req.body.activity_name,
        location: req.body.location,
        date: req.body.date,
        time: req.body.time,
        price: req.body.price,
        type: req.body.type,
        votes: req.body.votes,
        reservation: req.body.reservation,
        notes: req.body.notes,
        image: req.body.image,
        user_id: req.body.user_id,
        trip_id: req.body.trip_id
    }

    console.log("\nNew Activity check:", newActivity);

    Activities
        .forge(newActivity)
        .save()
        .then(() => {
            return Activities.fetchAll()
        })
        .then(activities => {
            res.json(activities.serialize());
        })
        .catch(err => {
            console.log("\nPOST - adding new activity error", err);
            res.json("POST - adding new activity error");
        })
})


module.exports = activityRouter