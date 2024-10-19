import { createRoute } from "@hono/zod-openapi";

import { jsonContent } from "stoker/openapi/helpers";
import { createMessageObjectSchema } from "stoker/openapi/schemas";

import { createRouter } from "@/lib/create-app";
import { HttpStatusCodes } from "@/lib/types";

const router = createRouter().openapi(
  createRoute({
    tags: ["Index"],
    method: "get",
    path: "/",
    responses: {
      [HttpStatusCodes.OK]: jsonContent(
        createMessageObjectSchema("Index API"),
        "API Index"
      ),
    },
  }),
  (c) => {
    return c.json(
      {
        message: "Api Index",
      },
      HttpStatusCodes.OK
    );
  }
);

export default router;
