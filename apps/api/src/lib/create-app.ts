import { OpenAPIHono } from "@hono/zod-openapi";
import { logger } from "hono/logger";

import { notFound, onError } from "stoker/middlewares";
import { defaultHook } from "stoker/openapi";

import { AppBindings, AppOpenAPI } from "./types";

export function createRouter() {
  return new OpenAPIHono<AppBindings>({
    strict: false,
    defaultHook,
  });
}

export default function createApp() {
  const app = createRouter();

  app.notFound(notFound);
  app.onError(onError);

  return app;
}

export function createTestApp(router: AppOpenAPI) {
  const testApp = createApp();
  testApp.route("/", router);

  return testApp;
}
