import PlantCard from "./PlantCard.tsx";
import { Plant, PlantSchema } from "../types.ts";
import PlantCardList from "./PlantCardList.tsx";
import IntervalSelector from "./IntervalSelector.tsx";
import { Suspense, useState } from "react";
import PlantForm from "./PlantForm.tsx";
import ky from "ky";
import { queryOptions, useSuspenseQuery } from "@tanstack/react-query";
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


  const [view, setView] = useState("list")

  return (
    <div className={"AppContainer"}>
      {/*<PlantForm />*/}
      <button className={"primary"} onClick={() => setView(view === "list" ? "editor": "list")}>Hin und herwechseln</button>

      {/*{view === "list" ? <PlantCardListLoader />: <PlantForm />}*/}
      <PlantForm />
      <Suspense fallback={<h1>Please wait....</h1>}>
        <PlantCardListLoader />
      </Suspense>

      <p>Hallo</p>

    </div>
  );
}

const getPlantsQueryOptions = (orderBy = "id") => queryOptions({
  queryKey: ["plants", "lists", orderBy],

  // queryFn: async function () {
  async queryFn() {
    const result =
      await ky.get("http://localhost:7200/api/plants?slow=3000&orderBy=" + orderBy).json()
    const allPlants =
      PlantSchema.array().parse(result);
    return allPlants;
  }
})

function PlantCardListLoader() {
  const [orderBy, setOrderBy]  = useState ("id");

  const result = useSuspenseQuery(getPlantsQueryOptions(orderBy))
  return <div>
    <button onClick={() => setOrderBy("wateringInterval")}>wateringInterval</button>
    <button onClick={() => setOrderBy("name")}>name</button>
    <button onClick={() => result.refetch()}>Refetch</button>
    <PlantCardList plants={result.data} />

  </div>
}
