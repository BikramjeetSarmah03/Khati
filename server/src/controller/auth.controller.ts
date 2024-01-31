import { NextFunction, Request, Response } from "express";

export const registerUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {


  const {} = req.body


  const emailExist = await;

};
