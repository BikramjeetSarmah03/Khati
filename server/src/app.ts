import express from "express";
import cors from "cors";
import expressSession from "express-session";
import "dotenv/config";

import passport from "passport";

import routes from "./routes";
import { initializePassport } from "./passport";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  expressSession({
    secret: process.env.SESSION_KEY || "secretKey123",
    resave: false,
    saveUninitialized: false,
  })
);
app.use(passport.initialize());
app.use(passport.session());
initializePassport(passport);

app.use(
  cors({
    origin: "http://localhost:3000",
    methods: "GET, POST, PUT, DELETE",
    credentials: true,
  })
);

app.use(
  cors({
    origin: process.env.ORIGINS,
    credentials: true,
  })
);

app.use("/", routes);

export default app;
