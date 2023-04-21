import type { AppProps } from 'next/app'
import { CssBaseline, ThemeProvider } from '@mui/material';
import { Provider } from 'react-redux';
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
        <Component {...pageProps} toggleDarkMode={toggleDarkMode} />
      </ThemeProvider>
    </Provider>
  );
};

export default App;

