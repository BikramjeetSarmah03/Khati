import { NextFunction, Request, Response } from "express";

export const isAuthenticated = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (req.isAuthenticated()) {
    console.log(req.user);
    return next();
  }

  return res.status(401).json({
    success: true,
    message: "Unauthorized",
  });
};
