import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    background-color: #0C0D0F;
    color: #FB1528;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font-family: 'Lexend', sans-serif;
    font-size: 16px;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }

  button {
    cursor: pointer;
  }
`;

/* // --persian-orange: #df9a57ff;
// --outrageous-orange: #fc7a57ff;
// --mustard: #fcd757ff;
// --laser-lemon: #eefc57ff;
// --davys-grey: #5e5b52ff;
// --white: #ffffff;
// --rich-black-fogra: #0C0D0F;
// --red-pigment: #FB1528; */
