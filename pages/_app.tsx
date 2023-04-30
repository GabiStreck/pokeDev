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
          <link rel='icon' href='/favicon.ico' />
          <meta name='viewport' content='width=device-width, initial-scale=1' />
          <meta name='theme-color' content='#ffffff' />
          <link rel='manifest' href='/manifest.json' />
          <link
            rel='apple-touch-icon'
            sizes='76x76'
            href='/icons/icon-76x76.png'
          />
          <link
            rel='icon'
            type='image/png'
            sizes='32x32'
            href='/icons/icon-32x32.png'
          />
          <link
            rel='icon'
            type='image/png'
            sizes='16x16'
            href='/icons/icon-16x16.png'
          />
        </Head>
        <Component {...pageProps} toggleDarkMode={toggleDarkMode} />
      </ThemeProvider>
    </Provider>
  );
};

export default App;

