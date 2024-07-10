import React from "react";

import { Container } from "./styles";

export function CurrentWeather({ weather }) {
  return (
    <Container>
      <h3>{weather.name}</h3>
      <img
        src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`}
        alt={`${weather.weather[0].description}`}
      />
      <p>{weather.main.temp} °C</p>
      <p>{weather.weather[0].description}</p>
    </Container>
  );
}
