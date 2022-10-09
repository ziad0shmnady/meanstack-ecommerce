let express = require("express");
const mongoose = require("mongoose");
let bodyParser = require("body-parser");
const { port, database } = require("./config/config");
let User = require('./model/user')
const productController = require("./controller/productController");
const userController = require('./controller/userController')
const passport = require('passport')
const localStrategy = require('passport-local').Strategy
const cookieParser = require('cookie-parser')
const session = require('express-session')
let flash = require("connect-flash")
const bcrypt = require('bcrypt')

let app = express();

// parse application/json
app.use(bodyParser.json());
//create mongodb
mongoose
  .connect(database, { useNewUrlParser: true })
  .then(() => console.log("Database connected!"))
  .catch((err) => console.log(err));


//sessin middleware
app.use(session({ secret: "this is the secret" }))
//cookie parser
app.use(cookieParser())
//passort middleware
app.use(passport.initialize())
app.use(passport.session())
//flash middleware
app.use(flash())
passport.use(new localStrategy({ usernameField: 'email' }, (email, password, done) => {
  //match User
  User.findOne({ email: email })
    .then(user => {
      if (!user) {
        return done(null, false, { message: "This email is not registered" })
      }
      //comparing password
      bcrypt.compare(password, user.password, (err, isMatch) => {
        if (err) throw err;

        if (isMatch) {
          return done(null, user)
        } else {
          return done(null, false, { message: "Wrong Password" })
        }
      })
    })
}))
//serialize & deserialize
passport.serializeUser((user, done) => {
  done(null, user.id)
});

passport.deserializeUser((id, done) => {
  User.findById(id, (err, user) => {
    done(err, user);
  })
});
app.post('/login', passport.authenticate('local'), (req, res) => {
  if (req.isAuthenticated()) {
    res.json({ user: req.user })
  }
  // res.send(req.isAuthenticated() ? req.user : '0')
  // User.findOne({ email: email }).then((user) => {
  //   res.json(user)
  // }).catch((err) => console.log(err))
})
app.use((req, res, next) => {
  res.locals.error_msg = req.flash('error_msg')
  next()
})
app.get('/login', (req, res) => {
  console.log(error_msg)

  // res.send(req.isAuthenticated() ? req.user : '0')
})
//
//Middleware and Static files
app.use(express.static("public")); // we can access any file in the public folder
app.use(express.urlencoded({ extended: false })); // so we can access the data coming from the input value

app.get("/product", productController.getAllProducts);
app.get("/product/:id", productController.getProductById);
app.post('/postregister', userController.postRegister)
// app.post('/postlogin', userController.postlogin)

app.listen(port, () => {
  console.log(`conected with port ${port}`);
});
