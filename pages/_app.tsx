import type { AppProps } from 'next/app'
import Head from 'next/head';
import { Provider } from 'react-redux';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { store } from '@/config-store';
import { theme } from '@/theme';
import { useDarkMode } from '@/hooks/useDarkMode';
import '@/styles/globals.css'

const App = ({ Component, pageProps }: AppProps) => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme(isDarkMode)}>
        <CssBaseline />
        <Head>
          <title>PokeDev</title>
          <meta name='description' content='Created by Gabriel Streck' />
          <meta name='viewport' content='width=device-width, initial-scale=1' />
          <link rel='icon' href='/favicon.ico' />
        </Head>
        <Component {...pageProps} toggleDarkMode={toggleDarkMode} />
      </ThemeProvider>
    </Provider>
  );
};

export default App;

