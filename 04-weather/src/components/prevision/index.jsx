import React from "react";

import { Container } from "./styles";

export function Prevision({ previsions }) {
  return (
    <Container>
      <h4>Previsão para as próximas horas:</h4>
      <ul>
        {previsions.map((prevision) => (
          <li key={prevision.dt}>
            <img
              src={`http://openweathermap.org/img/wn/${prevision.weather[0].icon}.png`}
              alt={`${prevision.weather[0].description}`}
            />
            {prevision.main.temp} °C - {prevision.weather[0].description}
          </li>
        ))}
      </ul>
    </Container>
  );
}
