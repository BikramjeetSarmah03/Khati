import User from "@/models/UserModel";
import db from "@/utils/db";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";

export async function POST(request, response) {
  await db.connectDb();

  const data = await request.json();
  const { email, password } = await data;

  const user = await User.findOne({ email });

  if (!user)
    return NextResponse.json(
      { message: "Invalid Credentials" },
      { status: 400 }
    );

  const comparePassword = await bcrypt.compare(password, user.password);
  if (!comparePassword)
    return NextResponse.json(
      { message: "Invalid Credentails" },
      { status: 400 }
    );

  await db.disconnectDb();
  return NextResponse.json({
    message: "Login Successfull",
  });
}
