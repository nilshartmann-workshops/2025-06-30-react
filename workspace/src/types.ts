import { z } from "zod/v4"; // <-- auf "/v4" achten

function loadPlantFromServer(): unknown {
  // axios
  // fetch
  // ky
  return "";
}


// export type Plant = {
//   id: string;
//   name: string;
//   location: string;
//   wateringInterval: number;
//   lastWatered?: string;
// };

export const Plant = z.object({
  id: z.string(),
  name: z.string().nonempty(),
  location: z.string().nonempty(),
  wateringInterval: z.number().min(1),
  lastWatered: z.iso.date().optional(),
});

export type Plant = z.infer<typeof Plant>
//
const mayBeAPlant = loadPlantFromServer();
// const result = Plant.safeParse(mayBeAPlant)
// if (result.success) {
//   const p : Plant = result.data;
// } else {
//   result.error.
// }
// showPlant(plant);


// zod


function showPlant(plant: Plant) {

  if (plant.wateringInterval>100) {
    // ....
  }

  plant.name.toUpperCase();

}



