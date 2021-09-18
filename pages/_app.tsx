import { AnimatePresence } from 'framer-motion';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from '../theme';
import { useState } from 'react';
import GlobalStyles from 'GlobalStyles';

function MyApp({ Component, pageProps, router }) {
  const [theme, setTheme] = useState('');

  return (
    <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
      <GlobalStyles />
      <AnimatePresence exitBeforeEnter>
        <Component {...pageProps} key={router.route} />
      </AnimatePresence>
    </ThemeProvider>
  );
}

export default MyApp;
