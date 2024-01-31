import express from "express";
import passport from "passport";

import { registerUser } from "../controller/auth.controller";

const CLIENT_URL = process.env.CLIENT_URL || "";

const router = express();

router.post("/register", registerUser);

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
