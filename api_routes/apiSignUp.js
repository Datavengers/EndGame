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

    const user = await SignUps.findOne({ where: { username: username}});
    const uEmail = await SignUps.findOne({ where: { email: email }});

    if (user) {
     res.json({ error: "Username already exists! Invalid signup. Try again."});
     return;
    } else if (uEmail) {
     res.json({ error: "Email already exists! Invalid signup. Try again."});
     return;
    } else {
        bcrypt.hash(password, 10).then(bcrypt.hash(confirmPassword, 10))
        .then((hash) => {
        SignUps.create({
            username: username, 
            email: email, 
            password: hash, 
            confirmPassword: hash,
        }); 
        res.json("Signup Successful");
    });
    }
    // const accessToken = sign({email: ckEmail.email, username: ckEmail.username}, 
    //     "importantsecret"
    //     );
    // res.json(accessToken);  


// router.post("/login", async (req, res) => {
//     const { email, password } = req.body;

//     const ckEmail = await SignUps.findOne({ where: { email : email} });
   
//     if (!ckEmail) {
//         res.json({ error: "Email does not exist" });
//         return;
//     }
//     bcrypt.compare(password, ckEmail.password).then((match) => {
//         if (!match) {
//             res.json({error: "Wrong Email and Password combination"});
//             return;
//         }
//        res.json("You are logged in!");       
//     });
    
// });
});

module.exports = router;