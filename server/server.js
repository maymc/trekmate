const express = require('express');
const app = express();
const PORT = process.env.EXPRESS_CONTAINER_PORT;
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');

//Redis Setup
const session = require('express-session');
const RedisStore = require('connect-redis')(session);

//Bookshelf data models
const Users = require('../server/db/models/Users.js');

//Require route files
const authRoutes = require('./routes/authRoutes.js')
const activityRoutes = require('./routes/activityRoutes.js');
const accommodationRoutes = require('./routes/accommodationRoutes.js');
const flightRoutes = require('./routes/flightRoutes.js');
const transitRoutes = require('./routes/transitRoutes.js');
const tripRoutes = require('./routes/tripRoutes.js');
const userRoutes = require('./routes/userRoutes.js');

app.use(cors());

//Returns already parsed info/object as "req.body"
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Redis setup
app.use(passport.initialize());
app.use(passport.session());

app.use(session({
  store: new RedisStore({ url: 'redis://redis-session-store:6379', logErrors: true }),
  secret: 'hellooo',
  resave: false,
  saveUninitialized: false
}))

//Specific Routes
app.use('/auth', authRoutes)
app.use('/activities', activityRoutes);
app.use('/accommodations', accommodationRoutes);
app.use('/flights', flightRoutes);
app.use('/transit', transitRoutes);
app.use('/trips', tripRoutes);
app.use('/users', userRoutes);

//GET /home
app.get('/', (req, res) => {
  res.json('HOMEPAGE, ola!!!!!')  //work, check with postman
})

//POST /login/register
// app.post('/login/register', (req, res) => {
//   console.log('\nPOST /login/register...');
//   console.log("\nreq.body:", req.body);

//   const newUser = {
//     first_name: req.body.first_name,
//     last_name: req.body.last_name,
//     email: req.body.email,
//     password: req.body.password
//   }

//   console.log("\nNew User check:", newUser);

//   Users
//     .forge(newUser)
//     .save()
//     .then(() => {
//       return Users.fetchAll()
//     })
//     .then(users => {
//       res.json(users.serialize());
//     })
//     .catch(err => {
//       console.log("\nPOST - adding new user error", err);
//       res.json("POST - adding new user error");
//     })
// });

// var api_key = '2b883b0b35ef11176cb0cc7fa8a54524-b3780ee5-fb002e81';
// var domain = 'sandbox8a7271888eb14ff7ae877ff78e76fbf8.mailgun.org';
// var mailgun = require('mailgun-js')({ apiKey: api_key, domain: domain });

// var data = {
//   from: 'Abby <abbyzhang21@gmail.com>',
//   to: 'abbyzhang21@gmail.com',
//   subject: 'trekmate',
//   text: 'nice, it is working!!!!!'
// };

mailgun.messages().send(data, function (error, body) {
  if (error) {
    console.log(error);
  }
  console.log(body);
});
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`)
})