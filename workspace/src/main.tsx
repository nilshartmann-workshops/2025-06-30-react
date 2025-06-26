import "./index.css";
import "./setup-dayjs.ts";

import { QueryClientProvider } from "@tanstack/react-query";
import { createRouter, RouterProvider } from "@tanstack/react-router";
import { createRoot } from "react-dom/client";

import App from "./components/App.tsx";
import { createQueryClient } from "./create-query-client.tsx";
import { routeTree } from "./routeTree.gen";

// Create a new router instance
const router = createRouter({ routeTree });

// Register the router instance for type safety
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

let useRouter = false;

if (useRouter) {
  const queryClient = createQueryClient();

  createRoot(document.getElementById("root")!).render(
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>,
  );
} else {
  createRoot(document.getElementById("root")!).render(<App />);
}
