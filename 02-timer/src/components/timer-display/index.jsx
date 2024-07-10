import React from "react";

import { Container } from "./styles";

export function TimerDisplay({ minutes, seconds, centiseconds }) {
  return (
    <Container>
      <h1>
        <span>{minutes}</span>:<span>{seconds}</span>:
        <span>{centiseconds}</span>
      </h1>
    </Container>
  );
}
