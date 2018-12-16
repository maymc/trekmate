const express = require('express');
const app = express();
const PORT = process.env.EXPRESS_CONTAINER_PORT;
const bodyParser = require('body-parser');
const cors = require('cors');
const AuthRoutes = require('./routes/authRoutes.js')
const passport = require('passport');

app.use(cors());

//Returns already parsed info/object as "req.body"
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(passport.initialize());
app.use(passport.session());
app.use('/auth', AuthRoutes)

//Bookshelf data models
const Users = require('../server/db/models/Users.js');

//Routes
const userRoutes = require('./routes/userRoutes.js');
const activityRoutes = require('./routes/activityRoutes.js');
const accommodationRoutes = require('./routes/accommodationRoutes.js');
const flightRoutes = require('./routes/flightRoutes.js');
const transitRoutes = require('./routes/transitRoutes.js');
const tripRoutes = require('./routes/tripRoutes.js');
const resetRoutes = require('./routes/resetRoutes.js');

app.use('/activities', activityRoutes);
app.use('/accommodations', accommodationRoutes);
app.use('/flights', flightRoutes);
app.use('/transit', transitRoutes);
app.use('/trips', tripRoutes);
app.use('/users', userRoutes);
app.use('/login/forgotPassword', resetRoutes);

//GET /home
app.get('/', (req, res) => {
  res.json('HOMEPAGE, ola!!!!!')  //work, check with postman
})

//POST /login/register
app.post('/login/register', (req, res) => {
  console.log('\nPOST /login/register...');
  console.log("\nreq.body:", req.body);

  const newUser = {
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    password: req.body.password
  }

  console.log("\nNew User check:", newUser);

  Users
    .forge(newUser)
    .save()
    .then(() => {
      return Users.fetchAll()
    })
    .then(users => {
      res.json(users.serialize());
    })
    .catch(err => {
      console.log("\nPOST - adding new user error", err);
      res.json("POST - adding new user error");
    })
});


app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`)
})