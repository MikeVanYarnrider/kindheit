const express = require("express");
const passport = require("passport");
const router = express.Router();
const ParentUser = require("../models/ParentUser");
const Child = require("../models/Child");
const Game = require("../models/Game");

// Bcrypt to encrypt passwords
const bcrypt = require("bcrypt");
const bcryptSalt = 10;

/* router.get("/api/login", (req, res, next) => {
  res.render("auth/login", { "message": req.flash("error") });
});

router.post("/api/login", passport.authenticate("local", {
  successRedirect: "/",
  failureRedirect: "/auth/login",
  failureFlash: true,
  passReqToCallback: true
})); */

//SIGNUP PARENT

router.post("/signup", (req, res) => {
  const { username, password, email } = req.body;

  if (!username) {
    return res
      .status(400)
      .json({ message: "Bitte geben Sie einen Nutzernamen ein!" });
  }
  if (password.length < 8) {
    return res.status(400).json({ message: "Ihr Passwort ist zu kurz!" });
  }
  ParentUser.findOne({ username: username })
    .then(found => {
      if (found) {
        return res
          .status(400)
          .json({ message: "Dieser Nutzername wurde leider schon vergeben!" });
      }
      return bcrypt
        .genSalt()
        .then(salt => {
          return bcrypt.hash(password, salt);
        })
        .then(hash => {
          return ParentUser.create({
            username: username,
            password: hash,
            email: email,
            type: "parent"
          });
        })
        .then(newUser => {
          req.login(newUser, err => {
            if (err) res.status(500).json(err);
            else res.json(newUser);
          });
        });
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

//LOGIN PARENT

router.post("/parentlogin", (req, res, next) => {
  passport.authenticate("local", (err, user) => {
    if (err) {
      return res.status(500).json({
        message: "Während der Authentifizierung ist ein Fehler aufgetreten!"
      });
    }
    if (!user) {
      return res.status(400).json({ message: "Falsche Logindaten" });
    }
    req.login(user, err => {
      if (err) res.status(500).json(err);
      res.json(user);
    });
  })(req, res, next);
});

//SIGNUP CHILD

router.post("/childsignup", (req, res) => {
  const { childname, password, birthDate, profileImgUrl, parent } = req.body;
  // console.log("userid", req);

  if (!childname) {
    return res
      .status(400)
      .json({ message: "Bitte geben Sie den Namen eines Kindes ein!" });
  }
  if (password.length < 4) {
    return res.status(400).json({ message: "Passwort ist noch zu kurz" });
  }
  if (!birthDate) {
    return res
      .status(400)
      .json({ message: "Bitte geben Sie das Geburtsdatum Ihres Kindes an!" });
  }

  Child.findOne({ username: childname })
    .then(found => {
      if (found) {
        return res
          .status(400)
          .json({ message: "Es gibt bereits ein Kind mit diesem Namen!" });
      }
      return bcrypt
        .genSalt()
        .then(salt => {
          return bcrypt.hash(password, salt);
        })
        .then(hash => {
          return Child.create({
            username: childname,
            password: hash,
            birthDate: birthDate,
            profileImgUrl: profileImgUrl,
            parent: parent,
            type: "child"
          });
        })
        .then(newChild => {
          ParentUser.findByIdAndUpdate(
            req.user._id,
            { $push: { children: newChild._id } },
            { new: true }
          )
            .populate("children")
            .then(realFinalStuff => {});
          req.login(newChild, err => {
            if (err) res.status(500).json(err);
            else res.json(newChild);
          });
        });
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

//LOGIN CHILD

router.post("/childlogin", (req, res, next) => {
  const { childname, childId, password } = req.body;

  Child.findById({ _id: childId })
    .then(foundChild => {
      if (!foundChild) {
        res
          .status(400)
          .json({ message: "Der Nutzername konnte nicht gefunden werden!" });
        return;
      }
      if (!bcrypt.compareSync(password, foundChild.password)) {
        res.status(400).json({ message: "Das Passwort ist leider falsch!" });
        return;
      }
      req.login(foundChild, err => {
        if (err) res.status(500).json(err);
        res.json(foundChild);
      });
    })
    .catch(err => next(err));
});

//GET PROFILES
router.get("/getProfiles", (req, res, next) => {
  Child.find({})
    .then(foundChildren => {
      res.json(foundChildren);
    })
    .catch(err => next(err));
});

//LOGOUT
router.delete("/logout", (req, res) => {
  req.logout();
  res.json(req.body);

  /*  res.json({ message: "Successfull logout!" }); */
});

//LOGIN CHECK
router.get("/loggedin", (req, res) => {
  // console.log("loggedInUser", req.user);

  res.json(req.user);
});

module.exports = router;
