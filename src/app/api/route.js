import db from "@/utils/db";
import { NextResponse } from "next/server";

export async function GET(request, response) {
  await db.connectDb();
  await db.disconnectDb();

  return NextResponse.json({
    message: "Database connected",
  });
}
