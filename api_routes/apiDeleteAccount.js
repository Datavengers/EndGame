const express = require("express");
const router = express.Router();
const { SignUps } = require("../models");

router.post("/", async (req, res) => {
  const { email } = req.body;
  const user = await SignUps.findOne({ where: { email: email } });

  
  try {
    await user.destroy()
    .then(console.log("Account deleted!"));
  } catch (error) {
    console.error("Account deletion error", error);
    res.status(500).json({ error: "Couldn't delete your account. Dunno why." });
  }
});

module.exports = router;
