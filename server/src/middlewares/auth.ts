import { NextFunction, Request, Response } from "express";

export const isAuthenticated = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (req.user) return next();

  res.status(401).json({
    success: true,
    message: "Unauthorized",
  });
};
