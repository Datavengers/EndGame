const passport = require("passport");

// Import the JWT strategy setup from jwtStrategy.js
require("./jwtStrategy.js"); 

// Middleware function to authenticate user using JWT strategy
const validateToken = (req, res, next) => {
  passport.authenticate("jwt", { session: false }, (err, user, info) => {
    if (err || !user) {
      return res.status(401).json({ error: "Unauthorized" });
    }
    req.user = user; // Attach the authenticated user to the request object
    return next();
  })(req, res, next);
};

module.exports = { validateToken };
