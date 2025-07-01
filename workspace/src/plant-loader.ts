import { z } from "zod/v4"; // <-- auf "/4" achten

type Plant = {
  id: string;
  name: string;
  location: string;
  wateringInterval: number;
  lastWatered?: string;
};

const Plant = z

function loadPlantFromServer(): any {
  // axios
  // fetch
  // ky
}

// zod


function showPlant(plant: Plant) {

  if (plant.wateringInterval>100) {
    // ....
  }

  plant.name.toUpperCase();

}

const plant = loadPlantFromServer();
showPlant(plant);

