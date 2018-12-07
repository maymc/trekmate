const express = require('express');
const activityRouter = express.Router();

//Bookshelf data models
const Activities = require('../db/models/Activities.js');

//GET all activities in database
activityRouter.get('/', (req, res) => {
    Activities
        .fetchAll()
        .then(activitiesList => {
            res.json(activitiesList.serialize())
        })
        .catch(err => {
            console.log("\nGET - getting activity list error", err);
            res.json("GET - getting activity list error", err);
        })
})
//GET an activity by id
activityRouter.get('/:id', (req, res) => {
    const { id } = req.params;

    Activities
        .where({ id })
        .fetchAll()
        .then((activity) => {
            res.json(activity.serialize())
        })
        .catch(err => {
            console.log("\nGET - getting activity by id error", err);
            res.json("GET - getting activity by id error", err);
        })
})
//GET an activity by user_id
activityRouter.get('/user/:user_id', (req, res) => {
    const { user_id } = req.params;

    Activities
        .where({ user_id })
        .fetchAll()
        .then((activity) => {
            res.json(activity.serialize())
        })
        .catch(err => {
            console.log("\nGET - getting activity by user_id error", err);
            res.json("GET - getting activity by user_id error", err);
        })
})

//GET activities by trip_id
activityRouter.get('/trip/:trip_id', (req, res) => {
    const { trip_id } = req.params;

    Activities
        .where({ trip_id })
        .fetchAll()
        .then((filteredActivities => {
            res.json(filteredActivities.serialize())
        }))
        .catch(err => {
            console.log("\nGET - get activities by trip_id error", err);
            res.json("GET - get activities by trip_id error");
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

//PUT - edit activity by activity id
activityRouter.put('/edit/:id', (req, res) => {
    const { id } = req.params;

    const updatedActivity = {
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

    Activities
        .where({ id })
        .fetch()
        .then((currentActivity) => {
            return currentActivity.save(updatedActivity)
        })
        .then((result) => {
            console.log('Updated activity', result)
            res.json(result)
        })
        .catch(err => {
            console.log("\nPUT - edit activity error", err);
            res.json("PUT - edit activity error", err);
        })
})

// Delete activity by 'id' from the 'activity' table
activityRouter.delete('/delete/:id', (req, res) => {
    const { id } = req.params

    Activities
        .where({ id })
        .destroy()
        .then(
            res.send('Activity was deleted')
        )
        .catch(err => {
            console.log("\nDELETE - delete activity error", err);
            res.json("DELETE - delete activity error", err);
        })
})

module.exports = activityRouter