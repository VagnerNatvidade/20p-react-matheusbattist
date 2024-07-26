import Timer from "./components/Timer";
import { ChakraProvider, CSSReset, Box, Text } from "@chakra-ui/react";

function App() {
  return (
    <ChakraProvider>
      <CSSReset />
      <Box textAlign="center" fontSize="xl" mt="4">
        <Text>Pomodoro</Text>
        <Timer />
      </Box>
    </ChakraProvider>
  );
}

export default App;
