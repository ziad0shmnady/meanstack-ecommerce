let express = require('express')
let router = express.Router()
let User = require('../model/user')
let bcrypt = require('bcryptjs')
let passport = require('passport')
let { ensureAuthenticated } = require('../config/auth')
const { json } = require('body-parser')


exports.getLogin = (req, res) => {
  res.render("Login", { user: req.user, title: "Login" });
}
exports.postlogin = (req, res, next) => {
  passport.authenticate()(req, res, next)
}
exports.getRegister = (req, res) => {
  res.render("Register", { user: req.user, title: "Register" });
}

exports.postRegister = (req, res) => {
  let { firstname, lastname, email, password, password2 } = req.body;
  let errors = []

  //check that all fields are filled
  if (!firstname || !lastname || !email || !password) {
    errors.push({ msg: "Please fill out all the fields" })
  }

  //check that both passwords matches
  if (password !== password2) {
    errors.push({ msg: "Passwords don't match" })
  }

  //check that password is at least 6 characters long
  if (password.length < 6) {
    errors.push({ msg: 'Passowrd should be at least 6 characters' })
  }

  //check if their is any errors 
  if (errors.length > 0) {
    res.json({ errors })
  } else {
    User.findOne({ email: email })
      .then(user => {
        errors.push({ msg: "Email is already registered" })
        if (user) {
          res.json({ errors })
        } else {
          // if user doesn't exist create new one
          let newUser = new User({ firstname, lastname, email, password })
          //crypt password
          bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(newUser.password, salt, (err, hash) => {
              if (err) throw err
              //password is hashed 
              newUser.password = hash
              //SaveUser
              newUser.save()
                .then(user => {
                  res.json({ user })
                })
                .catch(err => console.log(err))
            })
          })
        }
      })
  }
}

exports.getUserById = async (req, res, next) => {
  let user;
  try {
    user = await User.findOne({ _id: req.params.id });
  } catch (err) {
    console.log("error");
  }
  if (!user) {
    return res.status(404).json({ message: "No user found" });
  }
  return res.status(201).json({
    data: user,
  });
};