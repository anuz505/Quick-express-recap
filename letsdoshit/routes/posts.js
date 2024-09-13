const express = require("express");
const router = express.Router();
const posts = require("./jsonfiles/posts.json");
router.get("/", (req, res) => {
  res.status(200).json(posts);
});

router.route("/:postID").get((req, res) => {
  res.json(req.post);
});

router.param("postID", (req, res, next, postID) => {
  const id = parseInt(postID, 10);
  const varpost = posts.find((post) => post.id === id);
  if (varpost) {
    req.post = varpost;
    next();
  } else {
    res.status(404).send(`The post  ${postID} is not found`);
  }
});
module.exports = router;
