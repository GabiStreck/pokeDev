import { createTheme } from '@mui/material';
import { grey } from '@mui/material/colors';

export const theme = (isDarkMode: boolean) => createTheme({
    palette: {
        mode: isDarkMode ? 'dark' : 'light',
        primary: {
            main: isDarkMode ? grey[900] : grey[50],
        },
        background: {
            default: isDarkMode ? grey[900] : grey[50],
        },
    },
}); 