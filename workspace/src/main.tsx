import "./index.css";
import "./setup-dayjs.ts";

import { createRoot } from "react-dom/client";

import App from "./components/App.tsx";
import { createQueryClient } from "./create-query-client.tsx";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = createQueryClient();

createRoot(document.getElementById("root")!).render(
  // QueryClient per React Context in die React Anwendung
  // einhängen
  <QueryClientProvider client={queryClient}>
      <App />
      <ReactQueryDevtools />
  </QueryClientProvider>
);
