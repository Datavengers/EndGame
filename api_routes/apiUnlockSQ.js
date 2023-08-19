const express = require("express");
const router = express.Router();
const { SignUps } = require("../models");

router.post("/", async (req, res) => {
  const { email } = req.body;
  
  try {
    await SignUps.update({sqUnlocked: true}, {where:{email:email}})
      .then(console.log("Stacks & Queues Unlocked!"));
    } catch (error) {
      console.error("Region unlock error", error);
      res.status(500).json({ error: "Couldn't unlock Stacks & Queues. Dunno why." });
    }
});

module.exports = router;