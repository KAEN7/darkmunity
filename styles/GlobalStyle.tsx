import { createGlobalStyle } from "styled-components";
import { color } from "./theme";

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  body {
    font-family: "Darker Grotesque", "Arial", sans-serif;
    background: ${color.black};
    color: ${color.white};
  }

  a {
    text-decoration: none;
    color: ${color.white};
  }

  ul {
    list-style: none;
  }
`;

export default GlobalStyle;
