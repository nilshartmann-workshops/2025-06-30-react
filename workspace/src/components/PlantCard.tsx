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

// export default function PlantCard({ wateringInterval, name, lastWatered, location}: PlantCardProps) {
export default function PlantCard(props: PlantCardProps) {
  const wateringInfo = props.wateringInterval === 1 ?
    "Jeden Tag wässern!": `Alle ${props.wateringInterval} Tage wässern`;
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

// export function Abc() {}
export let person = "...";

// export {
//   PlantCard,
// }
