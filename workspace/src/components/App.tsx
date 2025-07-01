import PlantCard from "./PlantCard.tsx";
import { Plant } from "../types.ts";
import PlantCardList from "./PlantCardList.tsx";
import IntervalSelector from "./IntervalSelector.tsx";
import { useState } from "react";
import PlantForm from "./PlantForm.tsx";

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

  const [intervalSelectorVisible, setIntervalSelectorVisible] = useState(true);
  const [ wateringInterval, setWateringInterval ] = useState<number>(123) // 101

  return (
    <div className={"AppContainer"}>

      <PlantForm />

      {/*<form>*/}
      {/*  {intervalSelectorVisible ?*/}
      {/*    <IntervalSelector*/}
      {/*      intervalValue={wateringInterval}*/}
      {/*      onIntervalChange={ setWateringInterval }*/}
      {/*    />*/}
      {/*    : "Kein Selector heute :-("}*/}
      {/*</form>*/}
      {/*<button onClick={() => setIntervalSelectorVisible(!intervalSelectorVisible)}>*/}
      {/*  Hide / Show Interval Selector*/}
      {/*</button>*/}

      {/*<PlantCardList plants={allPlants} />*/}
      {/*<PlantCard*/}
      {/*  location="Wohnzimmer"*/}
      {/*  lastWatered="morgen"*/}
      {/*  name={"aloe vera"}*/}
      {/*  wateringInterval={1}*/}
      {/*/>*/}
    </div>
  );
}
