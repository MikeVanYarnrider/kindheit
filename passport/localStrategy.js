const passport      = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User          = require('../models/ParentUser');
const bcrypt        = require('bcrypt');

passport.use(new LocalStrategy({
    usernameField: 'username',
    passwordField: 'password'
  }, 
  (username, password, done) => {
    User.findOne({ username })
    .then(foundUser => {

      if (!foundUser) {
        done(null, false, { message: 'Der Nutzername konnte nicht gefunden werden!' });
        return;
      }

      if (!bcrypt.compareSync(password, foundUser.password)) {
        done(null, false, { message: 'Das Passwort ist leider falsch!' });
        return;
      }

      done(null, foundUser);
    })
    .catch(err => done(err));
  }
));
