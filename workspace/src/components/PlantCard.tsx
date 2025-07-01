// Komponentennamen mit Großbuchstaben am Anfang!

// Properties bzw. props (=> XML Attribute)
// <PlantCard name="Aloe Vera" location="Wohnzimmer" lastWatered="2025-06-30" />

/*

const props = {
  name:"Aloe Vera",
  location:"Wohnzimmer",
  lastWatered:"2025-06-30"
}
 */

import { Fragment } from "react";
import { Plant } from "../types.ts";

type PlantCardProps = {
  name: string
  location: string
  /**
   * Represents the interval in days.
   */
  wateringInterval: number;
  lastWatered?: string
}
// Logik
// Daten
// View
// JSX



// const PlantCard2: React.FC<PlantCardProps> = (props) => {
// export default function PlantCard({ wateringInterval, name, lastWatered, location}: PlantCardProps) {
export default function PlantCard(props: PlantCardProps) {
  // if (props.lastWatered !== undefined) { // type narrowing
  //   props.lastWatered.toUpperCase()
  // }
  //
  // const result = props.lastWatered?.toUpperCase()

  const wateringInfo = props.wateringInterval === 1 ?
    "Jeden Tag wässern!" : `Alle ${props.wateringInterval} Tage wässern`;

  // const title =  <h1>fasdfasdf</h1><h2>fasdfasdf</h2>;
  // const titleJs = reactCreateElement("h1", /*...*/);reactCreateElement("h2", /* ... */);
  // const titleRichtig =  <Fragment><h1>fasdfasdf</h1><h2>fasdfasdf</h2></Fragment>;
  // const titleJs = reactCreateElement("Fragment",
  //   [
  //     reactCreateElement("h1", /*...*/),
  //     reactCreateElement("h2", /* ... */)
  //   ]
  // );

  // let myCondition = 3;
  //
  // let result = myCondition === 0 ? "null" :
  //   myCondition < 0 ? "kleiner null" : "größer null";
  //
  // let result = "";
  // if (myCondition === 0) {
  //   result = "..."
  // } else if (myCondition <0) {
  //   result = "...";
  // } else {
  //   result = "..."
  // }
  //
  // const result = (function getResult() {
  //   return 0;
  // })()

  // myCondition > 0



  return <div className="PlantCard">
    <header>
      <h2>{props.name}</h2>
      <div>{props.location}</div>
    </header>
    <section>
      <div>{wateringInfo}</div>
      {/*{props.lastWatered && <div>Zuletzt: {props.lastWatered}</div> }*/}
      {props.lastWatered !== undefined ?
        <div>Zuletzt: {props.lastWatered}</div>
        :
        null
      }
    </section>
  </div>;
}

// PlantCard.displayName = "Meine Pflanzen Karte";

// export default PlantCard2;
// export function Abc() {}
export let person = "...";

// export {
//   PlantCard,
// }


// function Title() {
//   // return reactCreateElement("h1", /*...*/);reactCreateElement("h2", /* ... */)
//   return <><h1>Tiitle</h1><h2>Subtitle</h2></>
//   // return <Fragment><h1>Tiitle</h1><h2>Subtitle</h2></Fragment>
// }