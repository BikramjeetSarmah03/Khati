import express from "express";

import authRoutes from "./auth.routes";

const router = express();

router.use("/auth", authRoutes);

export default router;
