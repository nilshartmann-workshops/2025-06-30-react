import { formatDate, getDaysUntilWatering } from "./date-utils.ts";

type PlantCardProps = {
  name: string;
  location: string;
  wateringInterval: number;
  lastWatered?: string;
};

export default function PlantCard({
  name,
  location,
  wateringInterval,
  lastWatered,
}: PlantCardProps) {
  const wateringInfo =
    wateringInterval === 1
      ? "Jeden Tag gießen!"
      : `Alle ${wateringInterval} Tage gießen`;

  let needsWatering = false;
  if (lastWatered) {
    const daysUntilWatering = getDaysUntilWatering(
      lastWatered,
      wateringInterval,
    );
    needsWatering = daysUntilWatering <= 0;
  }

  return (
    <div className={"PlantCard"}>
      <header>
        <h2>{name}</h2>
        <div>📍{location}</div>
      </header>
      <section>
        <div>{wateringInfo}</div>
        {lastWatered ? (
          <div>
            Zuletzt: {formatDate(lastWatered)}{" "}
            {needsWatering && (
              <span className={"status-overdue"}>Muss gegossen werden!</span>
            )}
          </div>
        ) : null}
      </section>
    </div>
  );
}
