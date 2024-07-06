import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Roboto', sans-serif;
    background-color: #f8f9fa;
    color: #212529;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;

export default GlobalStyle;
