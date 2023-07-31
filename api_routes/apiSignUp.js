const express = require("express");
const router = express.Router();
const { SignUps } = require("../models");

router.get("/", async (req, res) => {
    const listofSignUps = await SignUps.findAll();
    res.json(listofSignUps);
});

router.post("/",  async (req, res) => {
    const signup = req.body;
    await SignUps.create(signup);
    res.json(signup);

});

module.exports = router;