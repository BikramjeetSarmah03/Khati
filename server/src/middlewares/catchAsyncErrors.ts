import { NextFunction, Request, Response } from "express";

const catchAsyncErrors =
  (theFunc: Function) => (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(theFunc(req, res, next)).catch(next);
  };

export default catchAsyncErrors;
