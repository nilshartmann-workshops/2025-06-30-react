import PlantCard from "./PlantCard.tsx";

export default function App() {
  return (
    <div className={"AppContainer"}>
      <PlantCard
        location="Wohnzimmer"
        lastWatered="morgen"
        name={"aloe vera"}
        wateringInterval={1}
      />
    </div>
  );
}
