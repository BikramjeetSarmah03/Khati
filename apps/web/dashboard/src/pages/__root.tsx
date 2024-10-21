import { createRootRouteWithContext, Outlet } from "@tanstack/react-router";
import { QueryClient } from "@tanstack/react-query";

interface RouterContext {
  queryClient: QueryClient;
}

export const Route = createRootRouteWithContext<RouterContext>()({
  component: RootComponent,
});

function RootComponent() {
  return (
    <>
      <div className="flex flex-col min-h-screen bg-white text-foreground">
        <main className="h-full grow">
          <Outlet />
        </main>
      </div>

      {/* {process.env.NODE_ENV !== "production" && (
        <>
          <ReactQueryDevtools />
          <TanStackRouterDevtools position="bottom-left" />
        </>
      )} */}
    </>
  );
}
