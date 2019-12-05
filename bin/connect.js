const mongoose = require("mongoose");
const Game = require("../models/Game");

const games = require("./data.js");

const createCollection = data => {
  Game.insertMany(data).then(docs => {
    console.log(`Success! ${docs.length} docs were added. Close connection.`);
    mongoose.connection.close();
  });
};

mongoose
  .connect(process.env.MONGODB_URI || "mongodb://localhost/kindheit", {
    useNewUrlParser: true
  })
  .then(() => {
    mongoose.connection.db.dropDatabase();
  })
  .then(() => {
    createCollection(games);
  })
  .catch(err => console.log(`Error: ${err.message}`));
