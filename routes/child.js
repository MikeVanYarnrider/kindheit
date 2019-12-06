const express = require("express");
const router = express.Router();
const Child = require("../models/Child");
const Game = require("../models/Game");

router.post("/play/:type/:id", (req, res) => {
  console.log("test");
  console.log(req.body);
  res.json(req.body);
});

module.exports = router;
