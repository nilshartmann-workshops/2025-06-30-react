import { Link } from "react-router";

import { Plant } from "../types.ts";
import PlantCard from "./PlantCard.tsx";

type PlantCardListProps = {
  plants: Plant[];
};
export default function PlantCardList({ plants }: PlantCardListProps) {
  return (
    <div className={"PlantCardList"}>
      {plants.map((p) => (
        <Link key={p.id} to={`/${p.id}`}>
          <PlantCard
            name={p.name}
            location={p.location}
            wateringInterval={p.wateringInterval}
            lastWatered={p.lastWatered}
          />
        </Link>
      ))}
    </div>
  );
}
