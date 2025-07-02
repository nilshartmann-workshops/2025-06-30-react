import { ChangeEvent, useState } from "react";
// 1. Render Phase
// (...)
// 3. Event Listener Phase

// 101 | setInterval

type IntervalSelectorProps = {
  intervalValue: number;
  onIntervalChange(newInterval: number): void
}

export default function IntervalSelector(props: IntervalSelectorProps) {

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
  // const [ intervalValue, setIntervalValue ] = useState<number>(123) // 101
  // const [ persons, setPersons ] = useState<Person[]>([]) // 101
  // const [ wateredAt, setWateredAt ] = useState<string|null>(null);
  // console.log("Interval", intervalValue);
  //....
  // useMemo bzw. useCallback
  //   React Compiler (RC) <--- neu

  // const handleIntervalValueChange = (e: ChangeEvent<HTMLInputElement>) => {
  function handleIntervalValueChange(e: ChangeEvent<HTMLInputElement>) {
    try {
      const newInterval = parseInt(e.target.value);
      props.onIntervalChange(newInterval)
    } catch (e) {
      // ...
    }

  }

  // MeineKomponente::handleIntervalValueChange

  return <div>
    <label>Interval </label>
    <p>Alle {props.intervalValue} Tage gießen! </p>
    <input type={"number"} value={props.intervalValue === undefined? "" : props.intervalValue}
      onChange={ handleIntervalValueChange }
    />
    {props.intervalValue < 1 && <p>Pflanzen mind. 1 Tag wässern</p>}
    <button  type="button" className={"sm"}  onClick={ () => props.onIntervalChange(1)}>
      Daily
    </button>
    <button type="button" className={"sm"} onClick={ () => props.onIntervalChange(7)}>
      Weekly
    </button>
    <button type="button" className={"sm"} onClick={ () => props.onIntervalChange(14)}>
      Biweekly
    </button>
  </div>
}