const express = require('express');
const activityRouter = express.Router();

//Bookshelf data models
const Activity = require('../db/models/Activities.js');

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

//post new Activity into 'Activity' table



module.exports = activityRouter