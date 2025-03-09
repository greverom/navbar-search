import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
    width: 100vw; 
    overflow-x: hidden; 
    font-family: Arial, sans-serif;
    background-color: #ffffff;
  }

  *, *::before, *::after {
    box-sizing: border-box;
  }
`;