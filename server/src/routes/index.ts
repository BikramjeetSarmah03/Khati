import express from "express";
import passport from "passport";

const CLIENT_URL = "http://localhost:3000";

const router = express();

router.post(
  "/login/manual",
  passport.authenticate("local", {
    failureRedirect: `${CLIENT_URL}/auth/login`,
    successRedirect: `${CLIENT_URL}`,
  }),
  (req, res) => {
    console.log("User authenticated");
  }
);

export default router;
