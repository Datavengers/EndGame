const express = require("express");
const router = express.Router();
const { SignUps } = require("../models");

router.post("/", async (req, res) => {
  const { email, newname } = req.body;
  
  try {
    // const user = await SignUps.findOne({ where: { email: email } });
    await SignUps.update({ username: newname }, {where: {email:email} })
    .then(console.log("username from req: " + newname));

  } catch (error) {
    console.error("Usename Change Error", error);
    res.status(500).json({ error: "Couldn't change your name. Dunno why." });
  }
});

module.exports = router;
