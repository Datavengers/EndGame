require("dotenv").config();
const express = require("express");
const path = require("path");
const app = express();
const cors = require("cors");
// const mysql = require("mysql");
const ViteExpress = require("vite-express");
const passport = require("passport");
const bodyParser = require("body-parser");
const jwtStrategy = require("./middlewares/jwtStrategy"); // Import your JWT strategy configuration
const apiSignUpRoutes = require("./api_routes/apiSignUp"); // Import your signup API routes
const apiLoginRoutes = require("./api_routes/apiLogin"); // Import your login API routes
const apiUserRoutes = require("./api_routes/apiUser"); // Import your user info API routes
const { Router } = require("express");
const prefixRouter = Router()


app.use(express.json());
app.use(cors());

const PORT = 8125;

const db = require("./models");



app.use(bodyParser.json());
app.use(passport.initialize());


app.use("/api/signup", apiSignUpRoutes);
app.use("/api/login", apiLoginRoutes);
app.use("/api/user", apiUserRoutes); // Add the user info route




db.sequelize.sync().then(() => {
    ViteExpress.listen(app,PORT, () => {
        console.log(`Server listening on port ${PORT}`);
    });
});


// const aLoggerMiddleware = (req, res, next) => {
//     console.log(req.method, req.url, res.statusCode);
//     next();
//   };
//   app.use(aLoggerMiddleware);

// app.get('manifest.json', function (req, res) {
//     // console.log("Wednesday");
//     res.json({});
//   });

// app.use(express.static("/backend/frontend/src/pages"));


// const donkey = path.join(__dirname, 'frontend', 'build');
// console.log(donkey)
// app.use("/", express.static(donkey));


// prefixRouter.get('/*', function (req, res) {
//    res.sendFile(path.join(__dirname, 'frontend', 'build', 'index.html'));
//  });

//  app.use("/",prefixRouter);

// forumRoute(prefixRouter);
// contactRoute(prefixRouter);

// async function main() {
//   if(process.env.MODE == "production"){
//     console.log("production");
//     await mongoose.connect('mongodb://projectUkraine:1j6zn9n8tnm@192.168.171.67/projectUkraine?authSource=admin', {  
//   useNewUrlParser: true,
//   useUnifiedTopology: true
  
// }); 
//   } else {
//     console.log("local");
//     await mongoose.connect("mongodb://127.0.0.1:27017/projectUkraine");
//   }
// console.log("Database Connected"); 


 


//  app.listen(process.env.PORT || port, () => {
//   console.log(`Your Project Ukraine server is running on port ${port}`)
// })};

// main().catch((err) => console.error(err));
