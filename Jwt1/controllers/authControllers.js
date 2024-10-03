const User = require("../models/User.js");

//handling errors
const handleErrors = (err) => {
  console.log(err.message, err.code);
  let errors = { email: "", password: "" };

  // duplicate email error
  if (err.code === 11000) {
    errors.email = "that email is already registered";
    return errors;
  }

  // validation errors
  if (err.message.includes("User validation failed")) {
    // console.log(err);
    Object.values(err.errors).forEach(({ properties }) => {
      // console.log(val);
      // console.log(properties);
      errors[properties.path] = properties.message;
    });
  }

  return errors;
};

const get_signup = (req, res) => {
  res.render("signup");
};
const get_login = (req, res) => {
  res.render("login");
};
const post_signup = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.create({ email, password });
    res.status(200).json(user);
  } catch (error) {
    const Errors = handleErrors(error);
    res.status(400).json({ Errors });
  }
};
const login_post = async (req, res) => {
  const { email, password } = req.body;

  console.log(email, password);
  res.send("user login");
};
module.exports = {
  get_signup,
  get_login,
  post_signup,
  login_post,
};
