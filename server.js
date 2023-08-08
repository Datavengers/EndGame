const express = require("express");
const path = require("path");
const app = express();
const cors = require("cors");
// const mysql = require("mysql");
// const bodyParser = require("body-parser"); 
const ViteExpress = require("vite-express");


app.use(express.json());
app.use(cors());

const PORT = 3000;

const db = require("./models");

// ROUTERS
const userRouter = require("./api_routes/apiSignUp");
app.use("/api/signup", userRouter);

const loginRouter = require("./api_routes/apiLogin");
app.use("/api/login", loginRouter);

// const signUpRouter = require("./api_routes/apiSignUp");
// app.use("/signup", signUpRouter);

db.sequelize.sync().then(() => {
    ViteExpress.listen(app,PORT, () => {
        console.log(`Server listening on port ${PORT}`);
    });
});
