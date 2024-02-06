import argon from "argon2";
import { PassportStatic } from "passport";
import { Strategy as LocalStrategy } from "passport-local";
import { db } from "../config/db";

export const initializePassport = (passport: PassportStatic) => {
  passport.use(
    new LocalStrategy(
      { usernameField: "email", passwordField: "password" },
      async (email, password, done) => {
        try {
          // find in db
          const user = await db.user.findUnique({ where: { email } });

          if (!user) return done(null, false);

          const verifyPassword = await argon.verify(user.password!, password);
          if (!verifyPassword) return done(null, false);

          return done(null, user);
        } catch (error) {
          return done(error, false);
        }
      }
    )
  );

  passport.serializeUser((user: any, done) => {
    done(null, user.id);
  });

  passport.deserializeUser(async (id, done) => {
    try {
      const user = await db.user.findFirst({
        where: { id: id as string },
      });

      if (!user) return done(null, false);

      done(null, user);
    } catch (error) {
      done(error, false);
    }
  });
};
