const passport = require("passport");
const User = require("../models/ParentUser");
const Child = require("../models/Child");

passport.serializeUser((loggedInUser, cb) => {
  cb(null, loggedInUser._id);
});

passport.deserializeUser((userIdFromSession, cb) => {
  User.findById(userIdFromSession)
    .then(userDocument => {
      if (!userDocument) {
        return Child.findById(userIdFromSession).then(child => {
          cb(null, child);
        });
      } else {
        cb(null, userDocument);
      }
    })
    .catch(err => {
      cb(err);
    });
});
