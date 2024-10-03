const express = require("express");
const mongoose = require("mongoose");
const router = require("./Routes/router.js");
const app = express();

// middleware
app.use(express.static("public"));
app.use(express.json());
// view engine
app.set("view engine", "ejs");

//router
app.use(router);

async function startServer() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/User");

    console.log("The server is connected to database");

    app.listen(3000, () =>
      console.log(`The Server is now running on localhost: ${3000}`)
    );
  } catch (error) {
    console.log(error.message);
  }
}
startServer();
// routes
app.get("/", (req, res) => res.render("home"));
app.get("/smoothies", (req, res) => res.render("smoothies"));
