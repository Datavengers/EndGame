const passport = require("passport");
const { Strategy: JwtStrategy, ExtractJwt } = require("passport-jwt");
const { SignUps } = require("../models");

const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: "importantsecret", // Replace with your actual JWT secret key
};

// Create a JWT strategy
passport.use(
  new JwtStrategy(options, async (payload, done) => {
    try {
      const user = await SignUps.findOne({
        where: { email: payload.email },
      });

      if (user) {
        // Attach the user object to the request object
        return done(null, user);
      } else {
        return done(null, false);
      }
    } catch (error) {
      return done(error, false);
    }
  })
);
