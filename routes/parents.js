const express = require("express");
const router = express.Router();
const Child = require("../models/Child");
const Game = require("../models/Game");

router.get("/parents", (req, res) => {
  console.log(req.body);
});
