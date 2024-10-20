import {
  createRootRouteWithContext,
  Link,
  Outlet,
} from "@tanstack/react-router";
import { QueryClient } from "@tanstack/react-query";

import { Header } from "@/components/layout/header";

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

        <footer className="flex justify-between p-4 text-center text-muted-foreground">
          <div>
            Made By{" "}
            <Link>
              <a href="https://github.com/BikramjeetSarmah03/">
                Bikramjeet Sarmah
              </a>
            </Link>
          </div>
          <p className="text-sm">Khati &copy;</p>
          <div className="flex items-center gap-2">
            <Link>
              <a href="https://github.com/BikramjeetSarmah03/Khati/">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="p-1 border rounded-full lucide lucide-github"
                >
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                  <path d="M9 18c-4.51 2-5-2-7-2" />
                </svg>
              </a>
            </Link>
            <Link>
              <a href="https://github.com/BikramjeetSarmah03/Khati/">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="p-1 border rounded-full lucide lucide-github"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
            </Link>
          </div>
        </footer>
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
