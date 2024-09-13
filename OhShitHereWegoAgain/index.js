const express = require("express");
const app = express();
app.use(express.static("public"));
const port = 5000;

app.get("/abc", (req, res) => {
  const name = req.query.name;
  if (name) {
    console.log(`name query parameter is ${name}`);
    res.send(`Hello ${name}`);
  } else {
    console.log("no name query parameter");
    res.send("Hello World");
  }
});

const userRouter = require("./routes/users.js");
const postsRouter = require("./routes/posts.js");
app.use("/users", userRouter);
app.use("/posts", postsRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
