const mongoose = require("mongoose");
const User = require("./schema.js");
run();
async function run() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/testDB");
    console.log("Database connection established");

    console.log("Database connection");
    const Anuj = await User.create({
      name: "Anuj Bhandari",
      age: 20,
      email: "anuzb50@gmail.com",
      hobbies: ["Learning japanese", "coding", "Games"],
    });
  } catch (error) {
    console.log("error message", error);
  }
}
