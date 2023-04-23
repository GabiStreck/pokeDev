import { FC, ReactNode } from 'react';
import { AppBar, Box, IconButton, Toolbar, Typography } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';

interface LayoutProps {
    children: ReactNode;
    toggleDarkMode: () => void;
}

const Layout: FC<LayoutProps> = ({ children, toggleDarkMode }) => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" elevation={0} color='transparent'>
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        PokeDev
                    </Typography>
                    <IconButton color="inherit" onClick={toggleDarkMode}>
                        <Brightness4Icon />
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Box>{children}</Box>
        </Box>
    );
};

export default Layout;
