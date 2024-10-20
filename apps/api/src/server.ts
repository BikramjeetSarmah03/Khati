import { serve } from "@hono/node-server";

import env from "@khati/env";

import app from "@/app";

const port = env.PORT || 5000;
// eslint-disable-next-line no-console
console.log(`Server is running on port ${port}`);

serve({
  fetch: app.fetch,
  port,
});
