const express = require("express");
const router = express.Router();
const { SignUps } = require("../models");

router.post("/", async (req, res) => {
  const { email } = req.body;
  
  try {
    await SignUps.update({DLLUnlocked: true}, {where:{email:email}})
      .then(console.log("DLL Unlocked!"));
    } catch (error) {
      console.error("Region unlock error", error);
      res.status(500).json({ error: "Couldn't unlock DLL. Dunno why." });
    }
});

module.exports = router;