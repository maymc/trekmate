const express = require('express');
const app = express();
const PORT = process.env.EXPRESS_CONTAINER_PORT;
const bodyParser = require('body-parser');
const cors = require('cors');

// app.use(express.static("public"));

//Import in models
const Users = require('./db/models/Users');

app.use(cors());

//Returns already parsed info/object as "req.body"
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//~~~~~~~Routes~~~~~~~~~//

//~~ GET ROUTES ~~//

// //GET /home
// app.get('/home', (req, res) => {
//   console.log('\nGET /home...');

// })

// app.get('/account/:id', (req, res) => {
//   console.log('\nGET /account/:id...');

// })

// app.get('/trip/:id', (req, res) => {
//   console.log('\nGET /trip/:id...');

// })

// //GET /login form
// app.get('/login', (req, res) => {
//   console.log('\nGET /login...');

// })

// //GET /register form
// // app.get('/login/register', (req, res) => {
// //   console.log('\nGET /register...');

// // })

// //GET /forgot_password
// app.get('/forgot_password', (req, res) => {
//   console.log('\nGET /forgot_password...');

// })

//~~ POST ROUTES ~~//

// //POST /login
// app.post('/login', (req, res) => {
//   console.log('\nPOST /login...');

// })

//POST /login/register
app.post('/login/register', (req, res) => {
  console.log('\nPOST /login/register...');
  console.log("\nreq.body:", req.body);

  const newUser = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
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
      res.json(users);
    })
    .catch(err => {
      console.log("\nPOST - adding new user error", err);
      res.json("POST - adding new user error");
    })
});

// //POST /create_trip
// app.post('/create_trip', (req, res) => {
//   console.log('\nPOST /create_trip...');
// })
// //POST /add_collaborator/:id
// app.post('/add_collaborator/:id', (req, res) => {
//   console.log('\nPOST /add_collaborator/:id...');
// })

// //POST /create_trip
// app.post('/add_activity/:id', (req, res) => {
//   console.log('\nPOST /add_activity/:id...');
// })


//~~ PUT ROUTES ~~//

// //PUT /edit_password/:id (user id)
// app.put(`/edit_password/:id`, (req, res) => {
//   console.log('\nPUT /edit_password/:id...');
// })

// //PUT /account/:id/edit (user id)
// app.put(`/account/:id/edit`, (req, res) => {
//   console.log('\nPUT /account/:id/edit...');
// })

// //PUT /trip/:id/edit (user id)
// app.put(`/trip/:id/edit`, (req, res) => {
//   console.log('\nPUT /trip/:id/edit...');
// })








app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`)
})