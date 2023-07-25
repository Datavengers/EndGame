const express = require("express");
const path = require("path");
const app = express();
const cors = require("cors");
// const mysql = require("mysql");
// const bodyParser = require("body-parser"); 


// import contactRouter from "./routes/Contact";

app.use(express.json());
app.use(cors());

const PORT = 3000;

const db = require("./models");


// ROUTERS
const userRouter = require("./routes/apiUser");
app.use("/user", userRouter);

const contactRouter = require("./routes/apiContacts");
app.use("/contacts", contactRouter);

const loginRouter = require("./routes/apiLogin");
app.use("/login", loginRouter);

// Serve static files from the 'build' folder
app.use(express.static(path.join(__dirname, 'production')));

// Handle any other routes and serve the 'index.html' file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'production', '../src/main.jsx'));
});

db.sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`Server listening on port ${PORT}`);
    });
});