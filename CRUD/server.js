const express = require("express");
const mongoose = require("mongoose");
const app = express();
const StudentRoute = require("./Routes/student.route.js");

const PORT = 3000;

//middleware
app.use(express.json());

//routes
app.get("/", (req, res) => {
  res.send("Hello the server is running and you are going on the right path");
});

app.use("/api/Students", StudentRoute);
//server
//also i should connect to the database first then start the server
async function startServer() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/testDB");

    console.log("The server is connected to database");

    app.listen(PORT, () =>
      console.log(`The Server is now running on localhost: ${PORT}`)
    );
  } catch (error) {
    console.log(error.message);
  }
}
startServer();
