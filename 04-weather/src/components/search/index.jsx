import React from "react";

import { Container } from "./styles";

export function Search({ city, setCity, searchWeather }) {
  return (
    <Container>
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Digite a cidade..."
      />
      <button onClick={searchWeather}>Buscar</button>
    </Container>
  );
}
