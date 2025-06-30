import PlantCard from "./PlantCard.tsx";
import { Plant } from "../types.ts";
import PlantCardList from "./PlantCardList.tsx";

const allPlants = [
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

export default function App() {
  return (
    <div className={"AppContainer"}>

      <PlantCardList plants={allPlants} />
      {/*<PlantCard*/}
      {/*  location="Wohnzimmer"*/}
      {/*  lastWatered="morgen"*/}
      {/*  name={"aloe vera"}*/}
      {/*  wateringInterval={1}*/}
      {/*/>*/}
    </div>
  );
}
