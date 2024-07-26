import { useState, useEffect } from "react";
import {
  Box,
  Button,
  Text,
  Input,
  FormControl,
  FormLabel,
  Center,
  HStack,
} from "@chakra-ui/react";

function Timer() {
  const [minutes, setMinutes] = useState(25);
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [userTime, setUserTime] = useState(25);

  useEffect(() => {
    let interval;

    if (isActive && (minutes > 0 || seconds > 0)) {
      interval = setInterval(() => {
        if (seconds === 0) {
          setMinutes(minutes - 1);
          setSeconds(59);
        } else {
          setSeconds(seconds - 1);
        }
      }, 1000);
    } else if (minutes === 0 && seconds === 0) {
      alert("Tempo esgotado!");
      resetTimer();
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isActive, minutes, seconds]);

  function handleTimeChange(e) {
    setUserTime(e.target.value);
    setMinutes(e.target.value);
  }

  function resetTimer() {
    setIsActive(false);
    setMinutes(userTime);
    setSeconds(0);
  }

  function toggleTime() {
    setIsActive(!isActive);
  }

  return (
    <Center p="4">
      <Box width="100%" maxWidth="400px" p="4">
        <Text fontSize="4xl" mb="4" textAlign="center">
          {String(minutes).padStart(2, "0")}:{String(seconds).padStart(2, "0")}
        </Text>
        <FormControl mb="4">
          <FormLabel>Definir tempo(minutes)</FormLabel>
          <Input
            type="number"
            value={userTime}
            onChange={handleTimeChange}
            isDisabled={isActive}
          />
        </FormControl>
        <HStack spacing={4}>
          <Button onClick={toggleTime} colorScheme={isActive ? "red" : "green"}>
            {isActive ? "Pausar" : "Iniciar"}
          </Button>
          <Button colorScheme="gray" onClick={resetTimer}>
            Reiniciar
          </Button>
        </HStack>
      </Box>
    </Center>
  );
}

export default Timer;
