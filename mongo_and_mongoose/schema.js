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
  bestFriend: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
  },
  hobbies: [String],
});

userSchema.statics.findByName = function (name) {
  return this.find({ name: new RegExp(name, "i") });
};

userSchema.query.byName = function (name) {
  return this.where({ name: RegExp(name, "i") });
};

module.exports = mongoose.model("User", userSchema);
