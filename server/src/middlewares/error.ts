import { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";

import ErrorHandler from "../utils/errorHandler";

interface Err extends Error {
  statusCode: StatusCodes;
}

export const errorMiddleware = (
  err: Err,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  err.name = err.message || "Interna Server Error";
  err.statusCode = err.statusCode || 500;

  // Wrong JWT error
  if (err.name === "JsonWebTokenError") {
    const message = `Json Web Token is invalid, Try again `;
    err = new ErrorHandler(message, 400);
  }

  // JWT EXPIRE error
  if (err.name === "TokenExpiredError") {
    const message = `Json Web Token is Expired, Try again `;
    err = new ErrorHandler(message, 400);
  }

  res.status(err.statusCode).json({
    success: false,
    message: err.message,
  });
};
