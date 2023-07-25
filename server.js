const express = require("express");
const path = require("path");
const app = express();
const cors = require("cors");
// const mysql = require("mysql");
// const bodyParser = require("body-parser"); 



app.use(express.json());
app.use(cors());

const PORT = 3000;

const db = require("./models");

// ROUTERS
const userRouter = require("./api_routes/apiUser");
app.use("/user", userRouter);

const contactRouter = require("./api_routes/apiContacts");
app.use("/contacts", contactRouter);

const loginRouter = require("./api_routes/apiLogin");
app.use("/login", loginRouter);


db.sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`Server listening on port ${PORT}`);
    });
});
