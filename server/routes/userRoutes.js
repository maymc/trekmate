const express = require('express');
const userRouter = express.Router();

//Bookshelf data models
const Users = require('../db/models/Users.js');

//Get User by user_id
userRouter.get('/:id', (req, res) => {
  const { id } = req.params

  Users
    .where({ id })
    .fetch()
    .then((user) => {
      res.json(user.serialize())
    })
    .catch(err => {
      console.log("\nGET - getting accommodation by user_id error", err);
      res.json("GET - getting accommodation by user_id error", err);
    })
})

//GET all User in database
userRouter.get('/', (req, res) => {
  Users
    .fetchAll()
    .then(usersList => {
      res.json(usersList.serialize())
    })
    .catch(err => {
      console.log("\nGET - getting accommodation list error", err);
      res.json("GET - getting accommodation list error", err);
    })
})

// //POST /login/register
// userRouter.post('/login/register', (req, res) => {
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

//PUT - edit user by user id
userRouter.put('/account/edit/:id', (req, res) => {
  const { id } = req.params;

  const updatedUserPassword = {
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    // password: req.body.password
  }

  Users
    .where({ id })
    .fetch()
    .then((currentUserPassword) => {
      return currentUserPassword.save(updatedUserPassword)
    })
    .then((result) => {
      console.log('Updated user', result)
      res.json(result)
    })
    .catch(err => {
      console.log("\nPUT - edit user error", err);
      res.json("PUT - edit user error", err);
    })
})

//PUT - edit user password by user id
userRouter.put('/account/edit_password/:id', (req, res) => {
  const { id } = req.params;

  const updatedUserPassword = {
    password: req.body.password
  }

  Users
    .where({ id })
    .fetch()
    .then((currentUserPassword) => {
      return currentUserPassword.save(updatedUserPassword)
    })
    .then((result) => {
      console.log('Updated user', result)
      res.json(result)
    })
    .catch(err => {
      console.log("\nPUT - edit user password error", err);
      res.json("PUT - edit user password error", err);
    })
})

// Delete user by 'id' from the 'user' table
userRouter.delete('/account/delete/:id', (req, res) => {
  const { id } = req.params

  Users
    .where({ id })
    .destroy()
    .then(
      res.send('User was deleted')
    )
    .catch(err => {
      console.log("\nDELETE - delete user error", err);
      res.json("DELETE - delete user error", err);
    })
})
module.exports = userRouter