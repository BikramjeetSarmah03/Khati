import { createRootRouteWithContext, Outlet } from "@tanstack/react-router";
import { QueryClient } from "@tanstack/react-query";

import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

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
        <Header />

        <main className="grow">
          <Outlet />
        </main>

        <Footer />
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
