import "dotenv/config";
import { defineConfig } from "drizzle-kit";

import env from "@khati/env";

export default defineConfig({
  out: "./drizzle",
  schema: "./schemas/index.ts",
  dialect: "sqlite",
  dbCredentials: {
    url: env.DATABASE_URL,
    token: env.DATABASE_AUTH_TOKEN,
  },
});
