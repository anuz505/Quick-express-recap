const express = require("express");
const {
  get_signup,
  get_login,
  post_signup,
} = require("../controllers/authControllers.js");
const router = express.Router();

router.get("/signup", get_signup);
router.get("/login", get_login);
router.post("/signup", post_signup);
// router.post("/login",()=>)

module.exports = router;
