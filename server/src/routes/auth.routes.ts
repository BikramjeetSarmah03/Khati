import express from "express";
import passport from "passport";

import { registerUser, verifyUser } from "../controller/auth.controller";
import { isAuthenticated } from "../middlewares/auth";

const CLIENT_URL = process.env.CLIENT_URL || "";

const router = express();

router.post("/register", registerUser);

router.post(
  "/login/manual",
  passport.authenticate("local", {
    // failureRedirect: `${CLIENT_URL}/auth/register`,
    // successRedirect: `${CLIENT_URL}`,
    session: true,
  }),
  (req, res) => {
    console.log("User authenticated");
    res.status(200).json({
      success: true,
      user: req.user,
    });
  }
);

router.get("/verify", isAuthenticated, verifyUser);

export default router;
