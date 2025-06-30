import { Plant } from "../types.ts";
import PlantCard from "./PlantCard.tsx";

type PlantCardListProps = {
  plants: Plant[];
};
export default function PlantCardList(props: PlantCardListProps) {


  // {props.plants.map(function extractId( plant ) {

  return (
    <div className={"PlantCardList"}>
      {props.plants.map( p =>
          <PlantCard key={p.id}
                     name={p.name}
                     location={p.location}
                     wateringInterval={p.wateringInterval}
                     lastWatered={p.lastWatered}

          />
        )}
    </div>
  );
}

// let p:any ="";
// p = 7;
// p = true;

// function getPerson(): any {
//
// }
// function getPerson2(): unknown {
// return "";
// }
// const p = getPerson();
// p.toUpperCase();
// const p2 = getPerson2();
//
// if (typeof p2 === "string") {
//   p2.toUpperCase();
// }

function extractId( plant: any ) {}
const extractId_2 = (plant: any) => {
  return "Hello";
}

const extractId_3 = (plant: any) => "Hello World";
// const extractId_4 = plant => "Hello World";