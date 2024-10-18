import { drizzle } from "drizzle-orm/libsql";
import { createClient } from "@libsql/client";

import env from "@khati/env";

import * as schema from "./schemas";

const client = createClient({
  url: env.DATABASE_URL,
  authToken: env.DATABASE_AUTH_TOKEN,
});

const db = drizzle(client, {
  schema,
});
