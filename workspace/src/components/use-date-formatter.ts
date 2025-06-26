import dayjs from "dayjs";

import type { TimeRange } from "../types.ts";

export function useDateFormatter() {
  // todo: lies hier die "global" eingestellte Zeitzone des Benutzers
  //     und verwende sie statt der Konstante hier, so dass die Zeit-Informationen
  //     beim Aktualisieren der Zeitzone entsprechend von dayjs
  //     neu berechnet und angezeigt werden
  const timezone = "Europe/Berlin";

  return {
    shortTimeRange(range: TimeRange) {
      return `${dayjs(range.start)
        .tz(timezone)
        .format(
          "DD.MM., HH:mm",
        )} - ${dayjs(range.end).format("DD.MM., HH:mm")}`;
    },

    longDateTime(dateTime: string) {
      return `${dayjs(dateTime).tz(timezone).format("DD. MMMM YYYY, HH:mm")}`;
    },
  };
}
