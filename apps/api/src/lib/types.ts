import type { OpenAPIHono, RouteConfig, RouteHandler } from "@hono/zod-openapi";

export interface AppBindings {
  //   Variables: {
  //     logger: PinoLogger;
  //   };
}

export type AppOpenAPI = OpenAPIHono<AppBindings>;

export * as HttpStatusCodes from "stoker/http-status-codes";
export * as HttpStatusPhrases from "stoker/http-status-phrases";

export type AppRouteHandler<R extends RouteConfig> = RouteHandler<
  R,
  AppBindings
>;
