let localStrategy = require('passport-local').Strategy;
let bcrypt = require('bcryptjs');
const User = require('../model/user');

module.exports = function (passport) {
    passport.use(
        new localStrategy({ usernameField: 'email' }, (email, password, done) => {
            //match User
            User.findOne({ email: email })
                .then(user => {
                    if (!user) {
                        req.flash('error_msg', "This email is not registered")

                        // return done(null, false, { msg: "This email is not registered" })
                    }
                    //comparing password
                    bcrypt.compare(password, user.password, (err, isMatch) => {
                        if (err) throw err;

                        if (isMatch) {
                            return done(null, user)
                        } else {

                            console.log(errors.msg)
                            return done(null, false, { msg: "Wrong Password" })
                        }
                    })
                })
        })
    )
    passport.serializeUser((user, done) => {
        done(null, user.id)
    });

    passport.deserializeUser((id, done) => {
        User.findById(id, (err, user) => {
            done(err, user)
        })
    });
}