const express = require("express");
const path = require("path");
const app = express();
const cors = require("cors");
const mysql = require("mysql");
// const bodyParser = require("body-parser"); 
const ViteExpress = require("vite-express");
const passport = require("passport");
const bodyParser = require("body-parser");
const jwtStrategy = require("./middlewares/jwtStrategy"); // Import your JWT strategy configuration
const apiSignUpRoutes = require("./api_routes/apiSignUp"); // Import your signup API routes
const apiLoginRoutes = require("./api_routes/apiLogin"); // Import your login API routes
const apiUserRoutes = require("./api_routes/apiUser"); // Import your user info API routes
const apiChangeUsername = require("./api_routes/apiChangeUsername");
const apiGainPoints = require("./api_routes/apiGainPoints");
const apiSpendPoints = require("./api_routes/apiSpendPoints");
const apiDeleteAccount = require("./api_routes/apiDeleteAccount");
const apiResetAccount = require("./api_routes/apiResetAccount");
const apiChangeEmail = require('./api_routes/apiChangeEmail');


app.use(express.json());
app.use(cors());

const PORT = 3000;

const db = require("./models");



app.use(bodyParser.json());
app.use(passport.initialize());


app.use("/api/signup", apiSignUpRoutes);
app.use("/api/login", apiLoginRoutes);
app.use("/api/user", apiUserRoutes); // Add the user info route
app.use("/api/changeUsername", apiChangeUsername);
app.use("/api/gainPoints", apiGainPoints);
app.use("/api/spendPoints", apiSpendPoints);
app.use("/api/resetAccount", apiResetAccount);
app.use("/api/deleteAccount", apiDeleteAccount);
app.use("/api/changeEmail", apiChangeEmail);




db.sequelize.sync().then(() => {
    ViteExpress.listen(app,PORT, () => {
        console.log(`Server listening on port ${PORT}`);
    });
});
