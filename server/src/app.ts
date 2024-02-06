import express from "express";
import cors from "cors";
import expressSession from "express-session";
import "dotenv/config";

import passport from "passport";

import routes from "./routes";
import { initializePassport } from "./passport";
import { errorMiddleware } from "./middlewares/error";

const app = express();

initializePassport(passport);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  expressSession({
    secret: process.env.SESSION_KEY || "secretKey123",
    resave: false,
    saveUninitialized: false,
    cookie: { secure: true },
  })
);
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: "GET, POST, PUT, DELETE",
    credentials: true,
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use("/api/v1", routes);

app.use(errorMiddleware);

export default app;
