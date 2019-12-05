const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const gameSchema = new Schema({
  title: String,
  description: String,
  totalPlayTime: Number,
  minAge: Number,
  type: String
});

const Game = mongoose.model("Game", gameSchema);

module.exports = Game;
