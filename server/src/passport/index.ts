import { PassportStatic } from "passport";
import { Strategy as LocalStrategy } from "passport-local";

export const initializePassport = (passport: PassportStatic) => {
  passport.use(
    new LocalStrategy(
      { usernameField: "email", passwordField: "password" },
      async (email, password, done) => {
        try {
          // find in db
          //   const user = true;
          //   if (!user) return done(null, false);
          //   if (user.password !== password) return done(null, false);
          //   return done(null, user);
        } catch (error) {
          return done(error, false);
        }
      }
    )
  );

  passport.serializeUser((user, done) => {
    // done(null, user.id);
  });

  passport.deserializeUser(async (id, done) => {
    try {
      const user = true;
      done(null, user);
    } catch (error) {
      done(error, false);
    }
  });
};
