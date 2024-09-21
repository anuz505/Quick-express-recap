const mongoose = require("mongoose");
const User = require("./schema.js");
// run();
thirdRun();

async function thirdRun() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/testDB");
    const userQueryResult = await User.find().byName("Anuj");
    const userStaticMethodResult = await User.findByName("Anuj");
    console.log("userQueryResult", userQueryResult);
    console.log("userStaticMethodResult", userStaticMethodResult);
  } catch (error) {
    console.log(error.message);
  }
}

// async function secondRun() {
//   try {
//     await mongoose.connect("mongodb://127.0.0.1:27017/testDB");
//     console.log("Database connection established");
//     const user = await User.where("age").lte(20).populate("bestFriend");
//     console.log(user);
//   } catch (error) {
//     console.log(error.message);
//   }
// }

// async function run() {
//   try {
//     await mongoose.connect("mongodb://127.0.0.1:27017/testDB");
//     console.log("Database connection established");
//     const Anuj = await User.create({
//       name: "Anuj Bhandari",
//       age: 20,
//       email: "anuzb50@gmail.com",
//       hobbies: ["Learning japanese", "coding", "Games"],
//     });
//     Anuj.bestFriend = "66ec27444b713d4d1ec73bf8";
//     await Anuj.save();

//     console.log("User Saved");
//   } catch (error) {
//     console.log("error message", error.message);
//   } finally {
//     await mongoose.connection.close();
//     console.log("Database connection is closed now");
//   }
// }
