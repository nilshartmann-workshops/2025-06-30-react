import PlantCard from "./PlantCard.tsx";
import { Plant, PlantSchema } from "../types.ts";
import PlantCardList from "./PlantCardList.tsx";
import IntervalSelector from "./IntervalSelector.tsx";
import { useState } from "react";
import PlantForm from "./PlantForm.tsx";
import ky from "ky";
//
// const allPlants = [
//   {
//     id: "1",
//     name: "Aloe Vera",
//     location: "Schlafzimmer",
//     wateringInterval: 12,
//     lastWatered: "2025-06-16",
//   },
//   {
//     id: "2",
//     name: "Orchidee",
//     location: "Wohnzimmer",
//     wateringInterval: 20,
//   },
// ];
//
// let result = 0;
//
// function add(a: number, b: number) {
//   result =  a + b + result;
//   return result;
// }

export default function App() {

  const [intervalSelectorVisible, setIntervalSelectorVisible] = useState(true);
  const [ wateringInterval, setWateringInterval ] = useState<number>(123) // 101

  const [plants, setPlants] = useState<Plant[]>([])

  // useEffect

  // new Date()

  async function loadPlantsFromServer() {
    const result = await ky.get("http://localhost:7200/api/plants?slow=5000").json()
    const allPlants = PlantSchema.array().parse(result);
    setPlants(allPlants);
    // JavaScript Promise => Java: CompletableFuture
  }

  // VERBOTEN! SEITENEFFEKT!
  // window.document.title ="Planzen App"
  // loadPlantsFromServer();
  return (
    <div className={"AppContainer"}>
      {/*<title>Pflanzen</title>*/}
      <button onClick={ () => loadPlantsFromServer()}>Lade Pflanzen!</button>
      <PlantForm />
      <PlantCardList plants={plants} />


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
