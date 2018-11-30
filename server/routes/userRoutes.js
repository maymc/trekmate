const express = require('express');
const userRouter = express.Router();

//Bookshelf data models
const Users = require('../db/models/Users.js');

//GET all User in database
userRouter.get('/', (req, res) => {
  Users
    .fetchAll()
    .then(usersList => {
      res.json(usersList.serialize())
    })
    .catch(err => {
      console.log('err', err)
      res.json('err')
    })
})

//Get User by user_id
userRouter.get('/:id', (req, res) => {
  const { id } = req.params

  Users
    .where({ id })
    .fetch()
    .then((UserItem) => {
      res.json(UserItem)
    })
    .catch((err) => {
      console.log('err', err)
      res.json(err)
    })
})

//POST /login/register
userRouter.post('/login/register', (req, res) => {
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

//PUT user into 'User' table
userRouter.put('/account/edit/:id', (req, res) => {
  const { id } = req.params
  const newUser = {
    id: id,
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    password: req.body.password
  }

  Users
    .where({ id })
    .fetch()
    .then((userItem) => {
      return userItem.save(newUser)
    })
    .then((result) => {
      console.log('updated user', result)
      res.json(result)
    })
})

// Delete user by 'id' from the 'user' table
userRouter.delete('/account/delete/:id', (req, res) => {

  const { id } = req.params

  Users
    .where({ id })
    .destroy()
    .then(
      res.send('This user was deleted')
    )
    .catch(err => {
      console.log('err: ', err)
      res.json(err)
    })


})
module.exports = userRouter