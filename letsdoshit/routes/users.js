const express = require("express");
const router = express.Router();
const data = require("./jsonfiles/data.json"); // Ensure the JSON data is loaded

router
  .route("/:userID")
  .get((req, res) => {
    res.json(req.user); // Send the user data as JSON
  })
  .put((req, res) => {
    // Update the user data (this is just a placeholder, actual update logic needed)
    req.user.name = req.body.name || req.user.name;
    res.json(req.user); // Send the updated user data as JSON
  })
  .delete((req, res) => {
    // Remove the user from the data (this is just a placeholder, actual delete logic needed)
    const index = data.indexOf(req.user);
    if (index > -1) {
      data.splice(index, 1);
    }
    res.json({
      message: `Deleted user with ID ${req.params.userID}`,
      user: req.user,
    }); // Send confirmation and user data
  });

router.param("userID", (req, res, next, userID) => {
  const id = parseInt(userID, 10); // Convert userID to an integer
  const user = data.find((user) => user.id === id); // Find the user by id
  if (user) {
    req.user = user;
    next();
  } else {
    res.status(404).send(`User not found with ID ${userID}`);
  }
});

module.exports = router;
