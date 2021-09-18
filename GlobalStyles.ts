import { createGlobalStyle } from 'styled-components';
import { ThemeType } from './theme';

const GlobalStyles = createGlobalStyle<{ theme: ThemeType }>`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html{
    font-size: 100%;
  }
  body {
    background-image: ${(props) => props.theme.backgroundImage};
    background-color: ${(props) => props.theme.backgroundColor};
  }

  @font-face {
    font-family: 'Komoda';
    src: url('/fonts/Komoda.woff2') format('woff2');
    font-style: normal;
    font-display: swap;
  } 

  @font-face {
    font-family: 'RobotoSlab';
    src: url('/fonts/RobotoSlab.woff') format('woff');
    font-display: swap;
  }

  // body {
  //   cursor: url('/cursor.svg'), auto;
  // }

  a {
    text-decoration: none;
    color: inherit;
    cursor: auto;
  }

  svg {
    width: inherit;
    height: inherit;
  }
`;

export default GlobalStyles;
