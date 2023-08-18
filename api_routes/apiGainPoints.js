const express = require("express");
const router = express.Router();
const { SignUps } = require("../models");

router.post("/", async (req, res) => {
  const { email, pointValue } = req.body;
  
  try {
    await SignUps.increment({ currentPoints: pointValue}, {where:{email:email} })
    await SignUps.increment({overallPoints: pointValue}, {where: {email: email}})
    .then(console.log("Points added!"));
  } catch (error) {
    console.error("Point change error", error);
    res.status(500).json({ error: "Couldn't change your points. Dunno why." });
  }
});

module.exports = router;
