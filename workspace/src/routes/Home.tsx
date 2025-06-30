import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { Link } from "react-router";

import PlantCardListLoader from "../components/PlantCardListLoader.tsx";

export default function Home() {
  return (
    <ErrorBoundary
      fallback={
        <div className={"error-message"}>Fehler beim Laden der Pflanzen 🥀</div>
      }
    >
      <Suspense
        fallback={
          <div className={"CardListFallback"}>Pflanzen werden geladen...</div>
        }
      >
        <Link className={"primary"} to={"/add"}>
          + Neue Pflanze
        </Link>
        <PlantCardListLoader />
      </Suspense>
    </ErrorBoundary>
  );
}
