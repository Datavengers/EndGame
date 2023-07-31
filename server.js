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

const loginRouter = require("./api_routes/apiLogin");
app.use("/login", loginRouter);

const signUpRouter = require("./api_routes/apiSignUp");
app.use("/signup", signUpRouter);

db.sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`Server listening on port ${PORT}`);
    });
});

// app.post('/signup', (req, res) => {
//     const sql = "SELECT * FROM Users WHERE username = ? AND password = ?";

//     db.query(sql, [req.body.email, req.body.password], (err, data) => {
//         if(err) return res.json("Signup Failed");
//         if(data.length > 0) {
//             return res.json("Signup Successful");
//         }
//         else {
//             return res.json("No Record");
//         }
//     });
// });
