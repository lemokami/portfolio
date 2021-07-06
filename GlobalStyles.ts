import { createGlobalStyle } from 'styled-components';
import { ThemeType } from './theme';

const GlobalStyles = createGlobalStyle<{ theme: ThemeType }>`
  body {
    background: ${(props) => props.theme.background};
  }
`;

export default GlobalStyles;
