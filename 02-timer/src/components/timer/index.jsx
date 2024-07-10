import React from "react";
import { useState, useEffect } from "react";

import { Container } from "./styles";
import { LapList } from "../lap-list";
import { TimerDisplay } from "../timer-display";
import { TimerControls } from "../timer-controls";

const timer = {
  minutes: "",
  seconds: "",
  centiseconds: "",
};

export function Timer() {
  const [millisecond, setMillisecond] = useState(0);
  const [timerOn, setTimerOn] = useState(false);
  const [laps, setLaps] = useState([]);

  const formatTime = () => {
    timer.minutes = ("0" + (Math.floor(millisecond / 60000) % 60)).slice(-2);
    timer.seconds = ("0" + (Math.floor(millisecond / 1000) % 60)).slice(-2);
    timer.centiseconds = ("0" + (Math.floor(millisecond / 10) % 100)).slice(-2);

    return `${timer.minutes}:${timer.seconds}:${timer.centiseconds}`;
  };

  const startTimer = (interval) => {
    return setInterval(() => {
      setMillisecond((prevMilliseconds) => prevMilliseconds + 10);
    }, 10);
  };

  const stoptTimer = (interval) => {
    clearInterval(interval);
    return interval;
  };

  const resetTimer = () => {
    setMillisecond(0);
    setTimerOn(false);
    setLaps([]);
  };

  const addLap = () => {
    setLaps([...laps, formatTime()]);
  };

  useEffect(() => {
    let interval = null;

    if (timerOn) {
      interval = startTimer(interval);
    } else {
      interval = stoptTimer(interval);
    }

    return () => stoptTimer(interval);
  }, [timerOn]);

  return (
    <Container>
      <TimerDisplay
        time={formatTime()}
        minutes={timer.minutes}
        seconds={timer.seconds}
        centiseconds={timer.centiseconds}
      />
      <TimerControls
        timerOn={timerOn}
        onStart={() => setTimerOn(true)}
        onStop={() => setTimerOn(false)}
        onReset={resetTimer}
        lap={addLap}
      />
      <LapList laps={laps} />
    </Container>
  );
}
