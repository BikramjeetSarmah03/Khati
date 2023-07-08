import bcrypt from "bcrypt";
import { NextResponse } from "next/server";
import User from "@/models/UserModel";
import { validateEmail } from "@/utils/validateEmail";
import { createActivationToken } from "@/utils/tokens";
import db from "@/utils/db";
import { sendEmail } from "@/utils/sendMails";
import { activateEmailTemplate } from "@/utils/emails/activateEmailTemplate";

export async function POST(request, response) {
  await db.connectDb();

  const data = await request.json();

  const { name, email, password } = await data;
  if (!name || !email || !password) {
    return NextResponse.json(
      {
        message: "Please fill all fields",
      },
      { status: 400 }
    );
  }

  if (!validateEmail(email)) {
    return NextResponse.json(
      {
        message: "Invalid Email",
      },
      { status: 400 }
    );
  }

  const isUser = await User.findOne({ email });
  if (isUser)
    return NextResponse.json(
      {
        message: "User Already Exists",
      },
      { status: 400 }
    );

  const cryptedPassword = await bcrypt.hash(password, 12);
  const newUser = await User.create({ name, email, password: cryptedPassword });
  const activationToken = createActivationToken({ id: newUser._id.toString() });

  const url = `${process.env.BASE_URL}/activate/${activationToken}`;
  await sendEmail(
    email,
    url,
    "",
    "Activate Your Account",
    activateEmailTemplate(email, url)
  );

  await db.disconnectDb();
  return NextResponse.json({
    message: `Mail Sent to ${email}. Kindly activate it`,
  });
}
