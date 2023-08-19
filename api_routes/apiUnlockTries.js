const express = require("express");
const router = express.Router();
const { SignUps } = require("../models");

router.post("/", async (req, res) => {
  const { email } = req.body;
  
  try {
    await SignUps.update({triesUnlocked: true}, {where:{email:email}})
      .then(console.log("Tries Unlocked!"));
    } catch (error) {
      console.error("Region unlock error", error);
      res.status(500).json({ error: "Couldn't unlock Tries. Dunno why." });
    }
});

module.exports = router;