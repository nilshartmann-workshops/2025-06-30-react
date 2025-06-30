import "./index.css";
import "./setup-dayjs.ts";

import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";

import { createQueryClient } from "./create-query-client.tsx";
import Add from "./routes/Add.tsx";
import AppLayout from "./routes/AppLayout.tsx";
import Detail from "./routes/Detail.tsx";
import Home from "./routes/Home.tsx";

const queryClient = createQueryClient();

createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path="/:plantId" element={<Detail />} />
          <Route path="/add" element={<Add />} />
        </Route>
      </Routes>
    </BrowserRouter>
    <ReactQueryDevtools />
  </QueryClientProvider>,
);
