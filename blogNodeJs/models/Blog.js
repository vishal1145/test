const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const blogSchema = new Schema({
  title: String,
  body: String,
  image: String,
  comments: [{ type: mongoose.Types.ObjectId, ref: "Comment" }],
  latest: {
    comment: {
      id: {
        type: mongoose.Types.ObjectId,
        ref: "Comment",
      },
      val: String,
      val2: String,
    },
    time: Date,
    notes: String
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Blog", blogSchema);
