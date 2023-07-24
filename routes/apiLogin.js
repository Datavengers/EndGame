const express = require("express");
const router = express.Router();
const { Login } = require("../models");

router.get("/", async (req, res) => {
    const listOfLogins = await Login.findAll();
    res.json(listOfLogins);
});

router.post("/",  async (req, res) => {
    const login = req.body;
    await Login.create(login);
    res.json(login);

});

module.exports = router;