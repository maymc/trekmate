const express = require('express');
const authRouter = express.Router();
const Users = require('../db/models/users.js')
const passport = require('passport');
const LocalStrategy = require('passport-local');
const bcrypt = require('bcrypt');


passport.serializeUser((user, done) => {
  console.log('serializeUser', user)
  done(null, {
    email: user.email
  })
})

passport.deserializeUser((user, done) => {
  console.log('deserializing User', user)
  Users
    .where({ email: user.email })
    .fetch()
    .then(user => {
      user = user.toJSON();
      console.log('user in deserialize user', user)
      done(null, user)
    })
    .catch(err => {
      console.log('err', err)
    })
})

passport.use(new LocalStrategy({ usernameField: 'email' }, (email, password, done) => {
  console.log('\nlocal is being called')
  Users
    .where({ email })
    .fetch()
    .then(user => {
      console.log('\nuser in local strategy', user)
      user = user.toJSON();
      // if (user.password === password) {
      //   done(null, user )
      // } else {
      //   done(null, false)
      // }
      console.log('\nauthRoutes.js passport.use login user.ToJSON', user)

      bcrypt.compare(password, user.password)
        .then(response => {
          console.log('\nauthRoutes.js passport.use login after bcrypt!!!\n', response)

          if (response) {
            console.log('\nauthRoutes.js passport.use login after success!!!!\n')
            done(null, response);
          } else {
            console.log('\nauthRoutes.js passport.use login after failure!!!\n')
            done(null, false);
          }
        })
        .catch(err => {
          console.log("1st error:", err);
          done(err);
        })
    })
    .catch(err => {
      console.log("2nd error:", err);
      done(err);
    })
}))


const SALT_ROUND = 12

//authenticated register route
authRouter.post('/login/register', (req, res) => {
  console.log("req.body here:", req.body);
  const { email, password, first_name, last_name } = req.body;

  bcrypt.genSalt(12)
    .then(salt => {
      console.log('salt', salt)
      return bcrypt.hash(password, salt)
    })
    .then(hash => {
      console.log('hash', hash)
      return Users
        .forge({
          email: email,
          password: hash,
          first_name: first_name,
          last_name: last_name
        })
        .save()
    })
    .then(user => {
      user = user.toJSON()
      res.json(user) // Never send the entire user object back to client! It has their password!
      // res.sendStatus(200)
      // res.redirect('/api/auth/secret')
    })
    .catch(err => {
      console.log('err', err)
      res.json(err)
      // res.sendStatus(500)
    })
})

//PUT - edit user password by user id
authRouter.put('/users/account/edit_password/:id', (req, res) => {
  const { id } = req.params;
  const { password } = req.body;
  bcrypt.genSalt(12)
    .then(salt => {
      console.log('salt', salt)
      return bcrypt.hash(password, salt)
    })
    .then(hash => {
      console.log('hash', hash)
      const updatedUserPassword = {
        password: hash
      }
      console.log('hash', hash)
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
})

// PUT - forgot password route
authRouter.put('/login/forgotPassword/request', (req, res) => {
  console.log(req.body);
  const tempPassword = generatePassword();

  bcrypt.genSalt(12)
    .then(salt => {
      console.log('salt', salt)
      return bcrypt.hash(tempPassword, salt)
    })
    .then(hash => {
      const updatedUserPassword = {
        password: hash
      }
      console.log('updated Password', tempPassword)
      Users
        .where({ email: req.body.email })
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
})



//https://stackoverflow.com/questions/1497481/javascript-password-generator
function generatePassword() {
  var length = 8,
    charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
    retVal = "";
  for (var i = 0, n = charset.length; i < length; ++i) {
    retVal += charset.charAt(Math.floor(Math.random() * n));
  }
  return retVal;
}

authRouter.post('/login', function (req, res, next) {
  passport.authenticate('local', function (err, user, info) {
    if (err) { return next(err); }
    if (!user) { return res.json(401); }
    req.logIn(user, function (err) {
      if (err) { return next(err); }
      return res.json(200);
    });
  })(req, res, next);
});


authRouter.get('/logout', (req, res) => {
  console.log('auth logout!!!')
  req.logout()
  console.log('auth logout, after logout!!')
  res.redirect('/')
  console.log('auth logout, after redirect!!')
})


module.exports = authRouter