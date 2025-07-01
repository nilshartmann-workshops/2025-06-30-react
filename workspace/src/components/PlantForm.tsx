import { z } from "zod/v4";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const IsoDateOrUndefined = z
  .string()
  .transform((s) => (s === "" ? undefined : s))
  .pipe(z.iso.date().optional());

const PlantFormStateSchema = z.object({
  name: z.string().nonempty(),
  location: z.string().nonempty(),
  // lastWatered: z.iso.date().optional(),
  lastWatered: IsoDateOrUndefined,
});
type PlantFormState = z.infer<typeof PlantFormStateSchema>;

export default function PlantForm() {
  const form = useForm({
    resolver: zodResolver(PlantFormStateSchema),
  });

  const handleSave = (data: PlantFormState) => {
    console.log("DATA", data);
  };

  const handleError = (err: any) => {
    console.log("Invalid form data", err);
  };

  return (
    <form onSubmit={form.handleSubmit(handleSave, handleError)}>
      <div className={"FormControl"}>
        <label htmlFor={"plantName"}>Name der Pflanze</label>
        <input id={"plantName"} {...form.register("name")} />
      </div>

      <div className={"FormControl"}>
        <label>Standort</label>
        <select {...form.register("location")}>
          <option value={""}>Bitte Standort wählen</option>
          <option value={"Wohnzimmer"}>Wohnzimmer</option>
          <option value={"Schlafzimmer"}>Schlafzimmer</option>
          <option value={"Bad"}>Bad</option>
        </select>
      </div>

      <div className={"FormControl"}>
        <label>Zuletzt gegossen</label>
        <input
          type={"date"}
          {...form.register("lastWatered")}
        />
      </div>

      <button type={"submit"} className={"primary"}>
        Speichern 🍂
      </button>
    </form>
  );
}
