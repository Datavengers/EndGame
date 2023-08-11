const express = require("express");
const router = express.Router();
const { UserInfo } = require("../models");
const passport = require("passport");

router.get("/", passport.authenticate("jwt", { session: false }), async (req, res) => {
  try {
    // Assuming you've set req.user based on passport-jwt strategy
    const user = req.user;
    res.json({ username: user.username, email: user.email }); // Adjust response data accordingly
  } catch (error) {
    res.status(500).json({ error: "An error occurred while fetching user info" });
  }
});

module.exports = router;
