import rateLimit from "express-rate-limit";

export const rateLimiter = rateLimit({
  windowMs: 10 * 1000,
  limit: 20,
  message: "You have exceeded the api limit",
  standardHeaders: true,
  legacyHeaders: false,
});
