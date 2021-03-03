import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: "arial"
  }

  button {
    cursor: pointer;
    text-transform: lowercase;
    border:none;
  }
`;
