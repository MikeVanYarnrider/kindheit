const express = require("express");
const router = express.Router();
const Child = require("../models/Child");
const Parent = require("../models/ParentUser");
const Game = require("../models/Game");

router.post("/", (req, res) => {
  const id = req.body.parent;

  Parent.findById(id)
    .populate("children")
    .then(child => {
      console.log(child);
      res.json(child);
    })
    .catch(err => {
      console.log(err);
    });
});

module.exports = router;
