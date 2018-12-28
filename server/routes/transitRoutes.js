const express = require('express');
const transitRouter = express.Router();

//Bookshelf data models
const Transit = require('../db/models/Transit.js');

//GET all transit in database
transitRouter.get('/', (req, res) => {
    Transit
        .forge()
        .orderBy('id', 'ASC')
        .fetchAll()
        .then(transitList => {
            res.json(transitList.serialize())
        })
        .catch(err => {
            console.log("\nGET - getting transit list error", err);
            res.json("GET - getting transit list error", err);
        })
})

//GET transit by id 
transitRouter.get('/:id', (req, res) => {
    const { id } = req.params;

    Transit
        .where({ id })
        .fetchAll()
        .then((transitItem) => {
            res.json(transitItem.serialize())
        })
        .catch(err => {
            console.log("\nGET - getting transit by id error", err);
            res.json("GET - getting transit by id error", err);
        })
})

//GET transit by user_id 
transitRouter.get('/user/:user_id', (req, res) => {
    const { user_id } = req.params;

    Transit
        .forge()
        .where({ user_id })
        .orderBy('id', 'ASC')
        .fetchAll()
        .then((transitItem) => {
            res.json(transitItem.serialize())
        })
        .catch(err => {
            console.log("\nGET - getting transit by user_id error", err);
            res.json("GET - getting transit by user_id error", err);
        })
})

//GET transit by trip_id
transitRouter.get('/trip/:trip_id', (req, res) => {
    const { trip_id } = req.params;

    Transit
        .forge()
        .where({ trip_id })
        .orderBy('date', 'ASC')
        .fetchAll()
        .then((filteredTransit => {
            res.json(filteredTransit.serialize())
        }))
        .catch(err => {
            console.log("\nGET - get transit by trip_id error", err);
            res.json("GET - get transit by trip_id error");
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
        .then(transit => {
            res.json(transit.serialize());
        })
        .catch(err => {
            console.log("\nPOST - adding new transit error", err);
            res.json("POST - adding new transit error", err);
        })
});

//PUT - edit transit by transit id
transitRouter.put('/edit/:id', (req, res) => {
    const { id } = req.params;

    const updatedTransit = {
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
        .then((currentTransit) => {
            return currentTransit.save(updatedTransit)
        })
        .then((result) => {
            // console.log('Updated transit', result)
            res.json(result)
        })
        .catch(err => {
            console.log("\nPUT - edit transit error", err);
            res.json("PUT - edit transit error", err);
        })
})

// Delete transit by 'id' from the 'transit' table
transitRouter.delete('/delete/:id', (req, res) => {
    const { id } = req.params;

    Transit
        .where({ id })
        .destroy()
        .then(
            res.send('Transit was deleted')
        )
        .catch(err => {
            console.log("\nDELETE - delete transit error", err);
            res.json("DELETE - delete transit error", err);
        })
})

module.exports = transitRouter