import { User as IUser } from "@prisma/client";

declare global {
  namespace Express {
    interface Request {
      user?: IUser;
    }
    interface User extends IUser {}
  }
}
