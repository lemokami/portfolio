import '../styles/globals.scss';
import { AnimatePresence } from 'framer-motion';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme, ThemeType } from '../theme';
import { useEffect, useState } from 'react';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle<{ theme: ThemeType }>`
  body {
    background: ${(props) => props.theme.background};
  }
`;

function MyApp({ Component, pageProps, router }) {
  const [theme, setTheme] = useState('');

  return (
    <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
      <GlobalStyle />
      <AnimatePresence exitBeforeEnter>
        <Component {...pageProps} key={router.route} />
      </AnimatePresence>
    </ThemeProvider>
  );
}

export default MyApp;
