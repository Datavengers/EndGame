const express = require("express");
const router = express.Router();
const { UserInfo } = require("../models");

router.get("/", async (req, res) => {
    const listOfUsers = await UserInfo.findAll();
    res.json(listOfUsers);
});

router.post("/", async (req, res) => {
    const user = req.body;
    await UserInfo.create(user);
    res.json(user);
});

module.exports = router;