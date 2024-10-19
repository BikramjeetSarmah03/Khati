import { apiReference } from "@scalar/hono-api-reference";

import type { AppOpenAPI } from "./types";

import packageJSON from "../../package.json";

export function configureOpenAPI(app: AppOpenAPI) {
  app.doc("/openapi.json", {
    openapi: "3.0.0",
    info: {
      version: packageJSON.version,
      title: "API's",
    },
  });

  app.get(
    "/docs",
    apiReference({
      theme: "kepler",
      defaultHttpClient: {
        targetKey: "javascript",
        clientKey: "fetch",
      },
      spec: {
        url: "/openapi.json",
      },
    })
  );
}
