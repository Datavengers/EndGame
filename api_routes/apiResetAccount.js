const express = require("express");
const router = express.Router();
const { SignUps } = require("../models");

router.post("/", async (req, res) => {
  const { email } = req.body;
  
  try {
    await SignUps.update({ 
      currentPoints: 0, 
      overallPoints: 0,
      DLLUnlocked: false,
      sqUnlocked:false,
      treesUnlocked: false,
      triesUnlocked: false}, {where:{email:email} 
    })
    .then(console.log("Account reset!"));
  } catch (error) {
    console.error("Account reset error", error);
    res.status(500).json({ error: "Couldn't reset your account. Dunno why." });
  }
});

module.exports = router;
