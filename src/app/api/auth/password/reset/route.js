import User from "@/models/UserModel";
import db from "@/utils/db";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { NextResponse } from "next/server";

export async function POST(request, response) {
  const data = await request.json();
  await db.connectDb();

  const { password, crfpassword, token } = await data;

  const verifyToken = jwt.verify(token, process.env.RESET_TOKEN_SECRET);
  if (!verifyToken)
    return NextResponse({
      message: "Token Expired. Request again",
    });

  if (!(password === crfpassword))
    return NextResponse.json(
      { message: "Password does not match" },
      { status: 404 }
    );

  const user = await User.findById(verifyToken.id);
  if (!user)
    return NextResponse.json(
      {
        message: "Invalid Token",
      },
      { status: 404 }
    );

  const cryptedPassword = await bcrypt.hash(password, 12);
  user.password = cryptedPassword;
  await user.updateOne({
    password: cryptedPassword,
  });

  await db.disconnectDb();
  return NextResponse.json({ email: user.email });
}
