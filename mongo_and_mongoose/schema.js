const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  name: String,
  age: Number,
  email: {
    type: String,
    required: true,
    lowercase: true,
  },
  createdDate: { type: Date, default: Date.now },
  bestFriend: mongoose.Schema.ObjectId,
  hobbies: [String],
});

module.exports = mongoose.model("User", userSchema);
