const express = require("express");
const router = express.Router();
const Child = require("../models/Child");
const Game = require("../models/Game");

router.post("/play/:type/:id", (req, res) => {
  const { _id } = req.body.user;
  const { gameTime, game } = req.body;

  Child.findByIdAndUpdate(
    _id,
    {
      $push: {
        sessionTimes: {
          timeStamp: new Date(),
          time: gameTime,
          game: game
        },
        restrictionTime: gameTime
      }
    },
    { new: true }
  )
    .then(found => {
      const restricted = found.restrictionTime.reduce((acc, val) => {
        return acc + val;
      });
      res.json({ ...req.body, restricted });
    })
    .catch(err => {
      console.log(err);
    });
});

router.post("/restriction/delete", (req, res) => {
  console.log(req.user._id);
  const { _id } = req.user;
  Child.findByIdAndUpdate(
    _id,
    {
      $set: {
        restrictionTime: []
      }
    },
    { new: true }
  )
    .then(found => {
      console.log(found.restrictionTime);
    })
    .catch(err => {
      console.log(err);
    });
});

module.exports = router;
