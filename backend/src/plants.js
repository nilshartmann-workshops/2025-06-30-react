// Beispiel-Daten für die Pflanzen-Pflege App
export const samplePlants = [
  {
    id: "1",
    name: "Grüne Monstera",
    location: "Wohnzimmer",
    wateringInterval: 7,
    lastWatered: "2025-06-20",
    notes: "Steht am großen Fenster, mag viel Licht",
  },
  {
    id: "2",
    name: "Kleine Sukkulente",
    location: "Küche",
    wateringInterval: 14,
    lastWatered: "2025-06-15",
    notes: "Sehr pflegeleicht, wenig Wasser",
  },
  {
    id: "3",
    name: "Gummibaum Ferdinand",
    location: "Schlafzimmer",
    wateringInterval: 10,
    lastWatered: "2025-06-18",
    notes: "Mag es nicht zu hell",
  },
  {
    id: "4",
    name: "Hängende Efeutute",
    location: "Badezimmer",
    wateringInterval: 5,
    lastWatered: "2025-06-22",
    notes: "Liebt die Luftfeuchtigkeit im Bad",
  },
  {
    id: "5",
    name: "Kaktus Karl",
    location: "Arbeitszimmer",
    wateringInterval: 21,
    lastWatered: "2025-06-10",
    notes: "Einmal im Monat reicht völlig",
  },
  {
    id: "6",
    name: "Friedenslilie Frieda",
    location: "Wohnzimmer",
    wateringInterval: 6,
    lastWatered: "2025-06-21",
    notes: "Zeigt mit hängenden Blättern wenn sie durstig ist",
  },
  {
    id: "7",
    name: "Basilikum-Töpfchen",
    location: "Küche",
    wateringInterval: 2,
    lastWatered: "2025-06-25",
    notes: "Täglich prüfen, trocknet schnell aus",
  },
  {
    id: "8",
    name: "Große Palme",
    location: "Flur",
    wateringInterval: 8,
    lastWatered: "2025-06-19",
    notes: "Braucht viel Wasser wegen der Größe",
  },
  {
    id: "9",
    name: "Aloe Vera",
    location: "Schlafzimmer",
    wateringInterval: 12,
    lastWatered: "2025-06-16",
  },
  {
    id: "10",
    name: "Orchidee Olga",
    location: "Badezimmer",
    wateringInterval: 9,
    lastWatered: "2025-06-17",
    notes: "Nur mit kalkarmem Wasser gießen",
  },
];

// Sortier-Funktion für Pflanzen
export const sortPlants = (plants, sortBy, direction = "asc") => {
  const sortedPlants = [...plants]; // Shallow copy um Original nicht zu verändern

  sortedPlants.sort((a, b) => {
    let valueA, valueB;

    switch (sortBy) {
      case "id":
        valueA = a.id;
        valueB = b.id;
        break;
      case "name":
        valueA = a.name.toLowerCase();
        valueB = b.name.toLowerCase();
        break;
      case "location":
        valueA = a.location.toLowerCase();
        valueB = b.location.toLowerCase();
        break;
      case "wateringInterval":
        valueA = a.wateringInterval;
        valueB = b.wateringInterval;
        break;
      case "lastWatered":
        // Bei lastWatered: zuletzt gewässerte Pflanze soll oben stehen (neuestes Datum zuerst)
        valueA = new Date(a.lastWatered);
        valueB = new Date(b.lastWatered);
        // Für lastWatered standardmäßig desc (neueste zuerst), außer explizit anders gewünscht
        if (direction === "asc" && sortBy === "lastWatered") {
          [valueA, valueB] = [valueB, valueA];
        }
        break;
      default:
        return 0;
    }

    // String-Vergleich
    if (typeof valueA === "string" && typeof valueB === "string") {
      const result = valueA.localeCompare(valueB);
      return direction === "desc" ? -result : result;
    }

    // Zahlen- oder Datum-Vergleich
    if (valueA < valueB) {
      return direction === "desc" ? 1 : -1;
    }
    if (valueA > valueB) {
      return direction === "desc" ? -1 : 1;
    }
    return 0;
  });

  return sortedPlants;
};

// Hilfsfunktion um zufällige Testdaten zu generieren
export const generateRandomPlant = () => {
  const names = [
    "Monstera Mia",
    "Sukkulente Sam",
    "Ficus Felix",
    "Efeu Emma",
    "Kaktus Klaus",
    "Palme Paula",
    "Basilikum Ben",
    "Aloe Alice",
  ];

  const locations = [
    "Wohnzimmer",
    "Küche",
    "Schlafzimmer",
    "Badezimmer",
    "Arbeitszimmer",
    "Flur",
  ];

  const intervals = [2, 3, 5, 7, 10, 14, 21];

  const notes = [
    "Mag helles Licht",
    "Sehr pflegeleicht",
    "Braucht viel Luftfeuchtigkeit",
    "Wenig Wasser",
    "Regelmäßig düngen",
  ];

  // Zufälliges Datum der letzten 20 Tage
  const randomDaysAgo = Math.floor(Math.random() * 20);
  const lastWatered = new Date();
  lastWatered.setDate(lastWatered.getDate() - randomDaysAgo);

  return {
    id: Math.random().toString(36).substr(2, 9),
    name: names[Math.floor(Math.random() * names.length)],
    location: locations[Math.floor(Math.random() * locations.length)],
    wateringInterval: intervals[Math.floor(Math.random() * intervals.length)],
    lastWatered: lastWatered.toISOString().split("T")[0],
    notes:
      Math.random() > 0.3
        ? notes[Math.floor(Math.random() * notes.length)]
        : undefined,
  };
};
