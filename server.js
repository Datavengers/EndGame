const express = require("express");
const path = require("path");
const app = express();
const cors = require("cors");
const mysql = require("mysql");
const bodyParser = require("body-parser"); 

import contactRouter from "./routes/Contact";

app.use(express.json());
app.use(cors());

const PORT = 3000;

const db = require("./models");

// ROUTERS
const userRouter = require("./routes/User");
app.use("/user", userRouter);

const contactRouter = require("./routes/Contact");
app.use("/contacts", contactRouter);


db.sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`Server listening on port ${PORT}`);
    });
});
