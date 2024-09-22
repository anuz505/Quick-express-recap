const mongoose = require("mongoose");

const StudentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Enter the name please"],
  },
  age: {
    type: Number,
    required: false,
  },
  program: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: false,
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
  },
  createdDate: {
    type: Date,
    default: Date.now,
  },
});

Students = mongoose.model("Student", StudentSchema);
module.exports = Students;
