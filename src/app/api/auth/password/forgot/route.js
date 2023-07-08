import { NextResponse } from "next/server";
import User from "@/models/UserModel";
import { validateEmail } from "@/utils/validateEmail";
import { createResetToken } from "@/utils/tokens";
import db from "@/utils/db";
import { sendEmail } from "@/utils/sendMails";
import { resetPasswordTemplate } from "@/utils/emails/resetPasswordTemplate";

export async function POST(request, response) {
  await db.connectDb();

  const data = await request.json();

  const { email } = await data;

  if (!validateEmail(email)) {
    return NextResponse.json(
      {
        message: "Invalid Email",
      },
      { status: 400 }
    );
  }

  if (!email)
    return NextResponse.json(
      {
        message: "Please enter your registered email",
      },
      { status: 400 }
    );

  const user = await User.findOne({ email });
  if (!user)
    return NextResponse.json(
      {
        message: "Email does not exists",
      },
      { status: 400 }
    );

  const userId = createResetToken({ id: user._id.toString() });

  const url = `${process.env.BASE_URL}/password/reset/${userId}`;
  await sendEmail(
    email,
    url,
    "",
    "Password Reset Request",
    resetPasswordTemplate(email, url)
  );

  await db.disconnectDb();

  return NextResponse.json({
    message: "An email has been sent to reset your password",
  });
}
