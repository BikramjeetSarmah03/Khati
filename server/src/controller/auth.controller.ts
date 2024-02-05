import { NextFunction, Request, Response } from "express";
import argon from "argon2";

import ErrorHandler from "../utils/errorHandler";
import catchAsyncErrors from "../middlewares/catchAsyncErrors";
import { db } from "../config/db";

export const registerUser = catchAsyncErrors(
  async (req: Request, res: Response, next: NextFunction) => {
    const { email, fullName, password, confirmPassword } = req.body;

    const emailExist = await db.user.findUnique({ where: { email } });

    if (emailExist) return next(new ErrorHandler("User already exist", 404));

    if (password !== confirmPassword)
      return next(new ErrorHandler("Password doesn't match", 500));

    const hashedPassword = await argon.hash(password);

    const user = await db.user.create({
      data: {
        fullName,
        email,
        password: hashedPassword,
      },
    });

    return res.status(201).json({
      success: true,
      user,
    });
  }
);

export const verifyUser = catchAsyncErrors(
  async (req: Request, res: Response, next: NextFunction) => {
    if (!req.user) return next(new ErrorHandler("Unauthorized", 401));

    res.status(200).json({
      success: true,
      user: req.user,
    });
  }
);
