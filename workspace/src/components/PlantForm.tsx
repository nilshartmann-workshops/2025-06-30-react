import { z } from "zod/v4";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import dayjs from "dayjs";

const IsoDateOrUndefined = z
  .transform((s) => (s === "" ? undefined : s))
  .pipe(z.iso.date("Bitte gib ein Datum im Format ... ein").optional())

const PlantFormStateSchema = z.object({
  name: z.string("Bitte gib einen Pflanzenname ein").nonempty("Das Feld darf nicht leer sein"),
  location: z.string().nonempty("Gib den Standort ein!"),
  // lastWatered: z.iso.date().optional(),
  lastWatered: IsoDateOrUndefined.refine(v => {
    if (!v) {
      // kein Datum -> erlaubt
      return true;
    }
    // ...wenn Datum gesetzt ist, darf es nicht in der Zukunft liegt
    if (dayjs(v).isAfter(new Date())) {
      return false;
    }

    return true;
  }, {
    error: "Das Datum darf nicht in der Zukunft liegen"
    }


  )
});

type PlantFormState = z.infer<typeof PlantFormStateSchema>;



export default function PlantForm() {
  const form = useForm({
    resolver: zodResolver(PlantFormStateSchema),
    // wann wird validiert?
    mode: "onBlur",
    // Mit defaultValues könnt ihr das Formular
    // vorbelegen
    defaultValues: {
      location: "Wohnzimmer"
    }
  });

  // form.formState.isValid

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
        {form.formState.errors.name?.message !== undefined &&
          <span className={"error-message"}>
          {form.formState.errors.name?.message}
        </span>}
      </div>

      <div className={"FormControl"}>
        <label>Standort</label>
        <select {...form.register("location")}>
          <option value={""}>Bitte Standort wählen</option>
          <option value={"Wohnzimmer"}>Wohnzimmer</option>
          <option value={"Schlafzimmer"}>Schlafzimmer</option>
          <option value={"Bad"}>Bad</option>
        </select>
        {form.formState.errors.location?.message !== undefined &&
          <span className={"error-message"}>
          {form.formState.errors.location.message}
        </span>}
      </div>

      <div className={"FormControl"}>
        <label>Zuletzt gegossen</label>
        <input
          type={"date"}
          {...form.register("lastWatered")}
        />
        {form.formState.errors.lastWatered?.message !== undefined &&
          <span className={"error-message"}>
          {form.formState.errors.lastWatered.message}
        </span>}
      </div>

      <button type={"submit"} className={"primary"}>
        Speichern 🍂
      </button>
      <button type={"button"} className={"secondary"}
        onClick={ () => form.reset() }
      >
        Löschen 🧹
      </button>
    </form>
  );
}
