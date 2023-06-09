import { authOptions } from "@/utils/next-auth/options";
import NextAuth from "next-auth";
import db from "@/utils/db";

db.connectDb();

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
