const express = require("express");
const router = express.Router();
const { SignUps } = require("../models");
const bcrypt = require("bcrypt");

router.post("/", async (req, res) => {
  const { oldEmail, newEmail, password } = req.body;
  
  try {
    const user = await SignUps.findOne({ where: { email: oldEmail } });
  
    bcrypt.compare(password, user.password)
    .then(console.log("password: " + password))
    .then((match) => {
      if (!match) {
        res.json({
          error: "Wrong Email and Password combination. Try again!",
        });
        return;
      }
        SignUps.update({email: newEmail}, {where:{email:oldEmail}})
      })
      .then(console.log("Email changed"));
    } catch (error) {
      console.error("Email Change Error", error);
      res.status(500).json({ error: "Couldn't change your email. Dunno why." });
    }
});

module.exports = router;
