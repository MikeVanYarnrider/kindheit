const express = require("express");
const router = express.Router();

/* GET home page */
router.get("/", (req, res, next) => {
  const json = { name: "Iuliia" };
  res.send(json);
  //res.render('index');
});

module.exports = router;
