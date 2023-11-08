const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const comment = new Schema({
  text: String,
  feedBack: Number,
});

module.exports = mongoose.model("Comment", comment);
