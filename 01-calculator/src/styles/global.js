import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
  }

  :root {
    font-size: 62.5%;
  } 
  
  body {
    display: grid;
    place-content: center;
    height: 100vh;
    font-size: 16px;
  }
`;
