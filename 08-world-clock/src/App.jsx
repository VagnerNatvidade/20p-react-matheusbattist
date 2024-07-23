import { useState } from "react";

import { TimeZoneClock } from "./components/TimeZoneClock";

export function App() {
  const timeZones = [
    "UTC",
    "GMT",
    "America/New_York",
    "America/Chicago",
    "America/Denver",
    "America/Los_Angeles",
    "Europe/London",
    "Europe/Berlin",
    "Asia/Tokyo",
  ];

  const localTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const [selectedTimeZones, setSelectedTimeZones] = useState([localTimeZone]);

  function addTimeZone(e) {
    const newTime = e.target.value;

    if (!selectedTimeZones.includes(newTime)) {
      setSelectedTimeZones([...selectedTimeZones, newTime]);
    }
  }

  return (
    <div>
      <h1>Relógio mundial</h1>
      <select onChange={(e) => addTimeZone(e)}>
        <option value="" disabled select>
          Selecione um fuso horário
        </option>
        {timeZones.map((time) => (
          <option key={time} value={time}>
            {time}
          </option>
        ))}
      </select>
      <div>
        {selectedTimeZones.map((time) => (
          <TimeZoneClock key={time} timeZone={time} />
        ))}
      </div>
    </div>
  );
}
