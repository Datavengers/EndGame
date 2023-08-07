const express = require("express");
const router = express.Router();
const { SignUps } = require("../models");
const bcrypt = require("bcrypt");
const { validateToken } = require("../middlewares/AuthMiddleware");

const {sign} = require('jsonwebtoken');

router.get("/", async (req, res) => {
    const listOfLogins = await SignUps.findAll();
    res.json(listOfLogins);
});

router.post("/", async (req, res) => {
    const { email, password } = req.body;

    const ckEmail = await SignUps.findOne({ where: { email : email} });
   
    if (!ckEmail) {
        res.json({ error: "Email does not exist. Try again or sign up if you're a new user!" });
        return;
    }

    bcrypt.compare(password, ckEmail.password).then(async (match) => {
        if (!match) {
            res.json({error: "Wrong Email and Password combination. Try again or signup if you're a new user!"});
            return;
        }
    
    const accessToken = sign({email: ckEmail.email, username: ckEmail.username}, 
        "importantsecret"
        );
    res.json(accessToken);  
        
    });
});



module.exports = router;