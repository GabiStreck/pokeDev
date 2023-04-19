import type { AppProps } from 'next/app'
import { CssBaseline, ThemeProvider } from '@mui/material';
import { theme } from '@/theme';
import { useDarkMode } from '@/hooks/useDarkMode';
import '@/styles/globals.css'

const App = ({ Component, pageProps }: AppProps) => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <ThemeProvider theme={theme(isDarkMode)}>
      <CssBaseline />
      <Component {...pageProps} toggleDarkMode={toggleDarkMode} />
    </ThemeProvider>
  );
};

export default App;

