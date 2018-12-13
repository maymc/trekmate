const express = require('express');
const tripRouter = express.Router();

//Bookshelf data models
const Trips = require('../db/models/Trips.js');
// const Accommodations = require('../db/models/Accommodations')

// tripRouter.get('/everything/:id', (req, res) => {
//     const { id } = req.params;

//     Accommodations
//         .where({ id: 1 })
//         .fetch({ withRelated: ['trip_id'] })
//         .then(results => {
//             res.json(results.serialize());
//         })
//         .catch(err => {
//             res.json("GET - getting all by err")
//         })
// })

//GET all trips in database
tripRouter.get('/', (req, res) => {
    Trips
        .fetchAll()
        .then(tripsList => {
            res.json(tripsList.serialize())
        })
        .catch(err => {
            console.log("\nGET - getting trip list error", err);
            res.json("GET - getting trip list error", err);
        })
})

//GET trips by id
tripRouter.get('/:id', (req, res) => {
    const { id } = req.params

    Trips
        .where({ id })
        .fetchAll()
        .then((trip) => {
            res.json(trip.serialize())
        })
        .catch(err => {
            console.log("\nGET - getting trip by id error", err);
            res.json("GET - getting trip by id error", err);
        })
})
//GET trips by user_id
tripRouter.get('/user/:user_id', (req, res) => {
    const { user_id } = req.params

    Trips
        .where({ user_id })
        .fetchAll()
        .then((trip) => {
            res.json(trip.serialize())
        })
        .catch(err => {
            console.log("\nGET - getting trip by user_id error", err);
            res.json("GET - getting trip by user_id error", err);
        })
})

//GET trip by trip_id
tripRouter.get('/:id', (req, res) => {
    const { id } = req.params;

    Trips
        .where({ id })
        .fetchAll()
        .then((filteredTrip => {
            res.json(filteredTrip.serialize())
        }))
        .catch(err => {
            console.log("\nGET - get trip by trip_id error", err);
            res.json("GET - get trip by trip_id error");
        })
})

//POST new trip into 'Trips' table
tripRouter.post('/add', (req, res) => {
    const payload = {
        city: req.body.city,
        state: req.body.state,
        country: req.body.country,
        start_date: req.body.start_date,
        end_date: req.body.end_date,
        collaborators: req.body.collaborators,
        user_id: req.body.user_id   //take it off later---------------->

    }
    Trips
        .forge(payload)
        .save()
        .then(() => {
            return Trips.fetchAll()
        })
        .then(trips => {
            res.json(trips.serialize());
        })
        .catch(err => {
            console.log("\nPOST - adding new trip error", err);
            res.json("POST - adding new trip error", err);
        })
})

//PUT - edit trip by trip id
tripRouter.put('/edit/:id', (req, res) => {
    const { id } = req.params;

    const updatedTrip = {
        city: req.body.city,
        state: req.body.state,
        country: req.body.country,
        start_date: req.body.start_date,
        end_date: req.body.end_date,
        collaborators: req.body.collaborators,
        user_id: req.body.user_id
    }

    Trips
        .where({ id })
        .fetch()
        .then((currentTrip) => {
            return currentTrip.save(updatedTrip)
        })
        .then((result) => {
            console.log('Updated trip', result)
            res.json(result)
        })
        .catch(err => {
            console.log("\nPUT - edit trip error", err);
            res.json("PUT - edit trip error", err);
        })
})

// Delete trip by 'id' from the 'trip' table
tripRouter.delete('/delete/:id', (req, res) => {
    const { id } = req.params

    Trips
        .where({ id })
        .destroy()
        .then(
            res.send('Trip was deleted')
        )
        .catch(err => {
            console.log("\nDELETE - delete trip error", err);
            res.json("DELETE - delete trip error", err);
        })
})

module.exports = tripRouter