import createApp from "@/lib/create-app";
import { configureOpenAPI } from "@/lib/configure-openapi";

import indexRoutes from "@/routes/index.routes";

const app = createApp();

const routes = [indexRoutes] as const;

configureOpenAPI(app);

routes.forEach((route) => {
  app.route("/", route);
});

export type AppType = (typeof routes)[number];

export default app;
