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

const gradientPokemonTypes = {
    normal: "linear-gradient(45deg, rgba(158, 148, 130, 0.8) 30%, rgba(213, 197, 181, 0.8) 90%)",
    fire: "linear-gradient(45deg, rgba(254, 159, 0, 0.8) 30%, rgba(244, 67, 54, 0.8) 90%)",
    water: "linear-gradient(45deg, rgba(0, 146, 195, 0.8) 30%, rgba(12, 112, 164, 0.8) 90%)",
    electric: "linear-gradient(45deg, rgba(255, 208, 0, 0.8) 30%, rgba(255, 143, 0, 0.8) 90%)",
    grass: "linear-gradient(45deg, rgba(139, 195, 74, 0.8) 30%, rgba(76, 175, 80, 0.8) 90%)",
    ice: "linear-gradient(45deg, rgba(77, 208, 225, 0.8) 30%, rgba(38, 198, 218, 0.8) 90%)",
    fighting: "linear-gradient(45deg, rgba(156, 93, 45, 0.8) 30%, rgba(244, 67, 54, 0.8) 90%)",
    poison: "linear-gradient(45deg, rgba(171, 71, 188, 0.8) 30%, rgba(103, 58, 183, 0.8) 90%)",
    ground: "linear-gradient(45deg, rgba(161, 136, 127, 0.8) 30%, rgba(121, 85, 72, 0.8) 90%)",
    flying: "linear-gradient(45deg, rgba(144, 164, 174, 0.8) 30%, rgba(96, 125, 139, 0.8) 90%)",
    psychic: "linear-gradient(45deg, rgba(255, 64, 129, 0.8) 30%, rgba(233, 30, 99, 0.8) 90%)",
    bug: "linear-gradient(45deg, rgba(124, 179, 66, 0.8) 30%, rgba(140, 195, 0, 0.8) 90%)",
    rock: "linear-gradient(45deg, rgba(194, 178, 128, 0.8) 30%, rgba(161, 136, 127, 0.8) 90%)",
    ghost: "linear-gradient(45deg, rgba(94, 53, 177, 0.8) 30%, rgba(57, 73, 171, 0.8) 90%)",
    dragon: "linear-gradient(45deg, rgba(103, 58, 183, 0.8) 30%, rgba(63, 81, 181, 0.8) 90%)",
    dark: "linear-gradient(45deg, rgba(156, 39, 176, 0.8) 30%, rgba(103, 58, 183, 0.8) 90%)",
    steel: "linear-gradient(45deg, rgba(176, 190, 197, 0.8) 30%, rgba(120, 144, 156, 0.8) 90%)",
    fairy: "linear-gradient(45deg, rgba(240, 98, 146, 0.8) 30%, rgba(236, 64, 122, 0.8) 90%)",
    shadow: "linear-gradient(45deg, rgba(35, 37, 38, 0.8) 30%, rgba(65, 67, 69, 0.8) 90%)",
    unknown: "linear-gradient(45deg, rgba(211, 203, 184, 0.8) 30%, rgba(176, 164, 149, 0.8) 90%)",
};

export const getGradientPokeTypes = (type: string): string => {
    /* @ts-ignore */
    return gradientPokemonTypes[type] || gradientPokemonTypes.normal;
}