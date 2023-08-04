const express = require("express");
const router = express.Router();
const { SignUps } = require("../models");
const bcrypt = require("bcrypt");

router.get("/", async (req, res) => {
    const listofSignUps = await SignUps.findAll();
    res.json(listofSignUps);
});

router.post("/",  async (req, res) => {
    const {username, email, password, confirmPassword} = req.body;
    bcrypt.hash(password, 10).then(bcrypt.hash(confirmPassword, 10))
    .then((hash) => {
       SignUps.create({
        username: username, 
        email: email, 
        password: hash, 
        confirmPassword: hash,
    }); 
    res.json("SUCCESS");
})
});

module.exports = router;