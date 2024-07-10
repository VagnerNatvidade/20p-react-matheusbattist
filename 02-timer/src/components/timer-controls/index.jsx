import React from "react";

import { Container } from "./styles";

export function TimerControls({ onStart, onStop, timerOn, onReset, lap }) {
  return (
    <Container>
      {!timerOn && <button onClick={onStart}>Iniciar</button>}
      {timerOn && <button onClick={onStop}>Parar</button>}
      {timerOn && <button onClick={lap}>Volta</button>}
      <button onClick={onReset}>Zerar</button>
    </Container>
  );
}
