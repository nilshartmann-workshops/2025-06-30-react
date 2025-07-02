import PlantCard from "./PlantCard.tsx";
import { Plant, PlantSchema } from "../types.ts";
import PlantCardList from "./PlantCardList.tsx";
import IntervalSelector from "./IntervalSelector.tsx";
import { useState } from "react";
import PlantForm from "./PlantForm.tsx";
import ky from "ky";
import { useSuspenseQuery } from "@tanstack/react-query";
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

  const [orderBy, setOrderBy]  = useState ("id");

  const result = useSuspenseQuery({
    queryKey: ["plants", "lists", orderBy],

    // queryFn: async function () {
    async queryFn() {
      const result =
        await ky.get("http://localhost:7200/api/plants?orderBy=" + orderBy).json()
      const allPlants =
        PlantSchema.array().parse(result);
      return allPlants;
    }
  })

  return (
    <div className={"AppContainer"}>
      <PlantForm />
      <button onClick={() => setOrderBy("wateringInterval")}>wateringInterval</button>
      <button onClick={() => setOrderBy("name")}>name</button>
      <PlantCardList plants={result.data} />
    </div>
  );
}
