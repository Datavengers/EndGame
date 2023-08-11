const express = require("express");
const router = express.Router();
const { SignUps } = require("../models");
const bcrypt = require("bcrypt");
const { sign } = require("jsonwebtoken");

router.post("/", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await SignUps.findOne({ where: { email: email } });

    if (!user) {
      res.json({
        error:
          "Email does not exist. Try again or sign up if you're a new user!",
      });
      return;
    }

    bcrypt.compare(password, user.password).then((match) => {
      if (!match) {
        res.json({
          error: "Wrong Email and Password combination. Try again!",
        });
        return;
      }

      const accessToken = sign(
        { email: user.email, username: user.username },
        "importantsecret"
      );

      res.json({ accessToken, username: user.username });
    });
  } catch (error) {
    res.status(500).json({ error: "An error occurred during login" });
  }
});

module.exports = router;
