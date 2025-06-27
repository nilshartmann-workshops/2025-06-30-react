import { QueryClientProvider } from "@tanstack/react-query";
import { delay, http, HttpResponse } from "msw";
import { setupWorker } from "msw/browser";
import { BrowserRouter, Route, Routes } from "react-router";
import { afterEach, beforeAll, expect, test } from "vitest";
import { render } from "vitest-browser-react";

import { createQueryClient } from "../create-query-client.tsx";
import { Plant } from "../types.ts";
import Home from "./Home.tsx";

// In größeren Anwendungen mit diversen Testfällen in eigenes Modul
//   auslagern
const worker = setupWorker(
  http.get("http://localhost:7200/api/plants", async ({ request }) => {
    const plants: Plant[] = [
      {
        id: "1",
        name: "Aloe Vera",
        location: "Schlafzimmer",
        wateringInterval: 12,
        lastWatered: "2025-06-16",
      },
      {
        id: "2",
        name: "Orchidee",
        location: "Wohnzimmer",
        wateringInterval: 20,
      },
    ];

    await delay(125);

    return HttpResponse.json(plants);
  }),
);

beforeAll(async () => await worker.start());
afterEach(() => worker.resetHandlers());

test("Fetching and Rendering list of plants", async () => {
  const screen = render(
    <QueryClientProvider client={createQueryClient()}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>,
  );

  await expect
    .element(screen.getByText(/Pflanzen werden geladen/))
    .toBeInTheDocument();
  await expect.element(screen.getByText(/Aloe Vera/)).toBeInTheDocument();
});
