const express = require("express");
const router = express.Router();
const { SignUps } = require("../models");
const bcrypt = require("bcrypt");
const { sign } = require("jsonwebtoken");

router.get("/", async (req, res) => {
  const signUps = await SignUps.findAll();
  res.json(signUps);
})

router.post("/", async (req, res) => {
  const { username, email, password, confirmPassword } = req.body;

  const user = await SignUps.findOne({ where: { username: username } });
  const uEmail = await SignUps.findOne({ where: { email: email } });

  if (user) {
    res.json({ error: "Username already exists! Invalid signup. Try again." });
    return;
  } else if (uEmail) {
    res.json({ error: "Email already exists! Invalid signup. Try again." });
    return;
  } else {
    try {
      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = await SignUps.create({
        username: username,
        email: email,
        password: hashedPassword,
        confirmPassword: hashedPassword,
      });

      // Generate an access token
      const accessToken = sign(
        { email: newUser.email, username: newUser.username },
        "importantsecret"
      );

      res.json({ accessToken, username: newUser.username });
    } catch (error) {
      console.error("Signup Error", error);
      res.status(500).json({ error: "An error occurred during signup" });
    }
  }
});

module.exports = router;
