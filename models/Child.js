const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const childSchema = new Schema({
  username: String,
  password: String,
  type: String,
  birthDate: Date,
  profileImgUrl: String,
  parent: [
    {
      type: Schema.Types.ObjectId,
      ref: "ParentUser"
    }
  ],
  gameStatus: [
    {
      type: Schema.Types.ObjectId,
      ref: "Game"
    }
  ],
  sessionTimes: [Number]
});

const Child = mongoose.model("Child", childSchema);
module.exports = Child;
