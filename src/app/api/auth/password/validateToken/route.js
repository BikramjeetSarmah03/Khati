import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";

export async function POST(request, response) {
  const data = await request.json();

  const { id } = await data;

  const verifyToken = jwt.verify(id, process.env.RESET_TOKEN_SECRET);
  if (!verifyToken)
    return NextResponse({
      message: "Token Expired. Request again",
    });

  return NextResponse.json({
    message: "You can reset now",
  });
}
