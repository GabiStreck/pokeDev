import { FC, ReactNode } from 'react';
import { useRouter } from 'next/router';
import CatchingPokemon from '@mui/icons-material/CatchingPokemon';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { AppBar, Box, IconButton, Toolbar, Typography } from '@mui/material';

interface LayoutProps {
    children: ReactNode;
    toggleDarkMode: () => void;
}

const Layout: FC<LayoutProps> = ({ children, toggleDarkMode }) => {
    const router = useRouter()
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" elevation={0} color='transparent'>
                <Toolbar>
                    {router.route !== '/' &&
                        <IconButton color="inherit" onClick={() => router.back()}>
                            <ArrowBackIcon />
                        </IconButton>
                    }
                    <Typography marginLeft={2} component="div" sx={{ flexGrow: 1 }}>

                    </Typography>

                    <IconButton color="inherit" onClick={toggleDarkMode}>
                        <CatchingPokemon />
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Box>{children}</Box>
        </Box>
    );
};

export default Layout;
