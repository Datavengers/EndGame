const express = require("express");
const router = express.Router();
const { SignUp } = require("../models");

router.get("/", async (req, res) => {
    const listofSignUps = await SignUp.findAll();
    res.json(listofSignUps);
});

router.post("/",  async (req, res) => {
    const signup = req.body;
    await SignUp.create(signup);
    res.json(signup);

});

module.exports = router;