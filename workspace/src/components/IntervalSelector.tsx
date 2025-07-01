import { ChangeEvent, useState } from "react";
// 1. Render Phase
// (...)
// 3. Event Listener Phase

// 101 | setInterval
export default function IntervalSelector() {

  // State (Zustand)  -> Model
  // const state = useState(100); // Tuple
  // const interval = state[0];
  // const setInterval = state[1];

  // (Map, Set, Class), function) <--abgeraten!  function Verboten!!
  //  {}, []

  // const map = new Map();
  // map.set("interval", 100)
  //
  // //
  // setInterval(map.set("interval", 101))

  // Array Destrucutring
  const [ intervalValue, setIntervalValue ] = useState<number>(123) // 101
  // const [ persons, setPersons ] = useState<Person[]>([]) // 101
  // const [ wateredAt, setWateredAt ] = useState<string|null>(null);
  // console.log("Interval", intervalValue);
  //....
  // useMemo bzw. useCallback
  //   React Compiler (RC) <--- neu

  // const handleIntervalValueChange = (e: ChangeEvent<HTMLInputElement>) => {
  function handleIntervalValueChange(e: ChangeEvent<HTMLInputElement>) {
      const newInterval = parseInt(e.target.value);
      setIntervalValue(newInterval)
  }

  // MeineKomponente::handleIntervalValueChange

  return <div>
    <label>Interval </label>
    <p>Alle {intervalValue} Tage gießen! </p>
    <input type={"number"} value={intervalValue}
      onChange={ handleIntervalValueChange }
    />
    {intervalValue < 1 && <p>Pflanzen mind. 1 Tag wässern</p>}
    <button onClick={ () => setIntervalValue(7)}>
      Wöchentlich wässern
    </button>
  </div>
}