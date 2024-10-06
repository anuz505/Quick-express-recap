const express = require("express");
const {
  get_signup,
  get_login,
  post_signup,
  login_post,
  get_logout,
} = require("../controllers/authControllers.js");
const router = express.Router();

router.get("/signup", get_signup);
router.get("/login", get_login);
router.post("/signup", post_signup);
router.post("/login", login_post);
router.get("/logout", get_logout);

module.exports = router;
