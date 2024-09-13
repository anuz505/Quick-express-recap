const express = require("express");
const app = express();

const port = 5000;

app.get("/", (req, res) => {
  res.send("Hello World");
});

const userRouter = require("./routes/users.js");
const postsRouter = require("./routes/posts.js");
app.use("/users", userRouter);
app.use("/posts", postsRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
