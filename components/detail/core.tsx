import Image from 'next/image'
import styled from '@emotion/styled'
import { Theme } from '@mui/material/styles';
import { Container, Fab, List, ListItem, Paper, Tab, Typography, Skeleton } from '@mui/material';


interface MainGradientContainerProps {
    backgroundGradient: string;
}

export const MainGradientContainer = styled.div<MainGradientContainerProps>`
    min-height: 100vh;
    width: 100%;
    max-width: 100wv;
    background: ${({ backgroundGradient }) => backgroundGradient};
    display: flex;
`;

export const PokemonContainer = styled(Container)(({ theme }: { theme: Theme }) => `
    display: flex; 
    align-items: center; 
    justify-content: center; 
    gap: 3.75rem;
    
    ${theme.breakpoints.down('md')} {
        flex-direction: column;
        padding: 0;
        gap: 0;
    }  
`);

export const ImageContainer = styled.div(({ theme }: { theme: Theme }) => `
    ${theme.breakpoints.down('md')} {
        position: relative;
        width: 100%;
    }  
`);

export const WavePokemonDetail = styled.div(({ theme }: { theme: Theme }) => `
    ${theme.breakpoints.down('md')} {
        background: ${(theme.palette.background.paper)};
        width: 100%;
        position: absolute;
        bottom: 0;
        width: 100%;
        position: absolute;
        bottom: 0;
        height: 9.375rem;
        border-radius: 40% 40% 0 0;
    }  
`);

export const PokemonImageDetail = styled(Image)(({ theme }: { theme: Theme }) => `
           cursor: pointer;
    ${theme.breakpoints.down('md')} {
        display: flex;
        margin: auto;
        padding: 0 1.25rem;
        position: relative;
        z-index: 1;
        object-fit: contain;
        max-width: 80vw;
    }  
    ${theme.breakpoints.down('sm')} {
        max-heigth: 300px;
    }
`);

export const TabPaperContainer = styled(Paper)(({ theme }: { theme: Theme }) => `
    height: 100%;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    padding-top: 0.9375rem;
    min-height: 40vh;
    border-radius: 0;

    ${theme.breakpoints.up('md')} {
        border-radius: 3.75rem 3.75rem 0 0;
        padding-top: 2.1875rem; 
        min-height: 54.2vh;
    }  
    ${theme.breakpoints.down('sm')} {
        min-height: 41vh;
        padding-top: 0; 
        max-width: 100vw;
    }  
`);

export const TabItem = styled(Tab)`
    font-size: 1rem;
    font-weight: 600;
`;

export const ListStyle = styled(List)`
    padding: 25px 0 40px 0;
`;

export const ListItemStyle = styled(ListItem)`
    padding: 15px 0;
    display: flex;
    alignItems: center;
    gap: 10;
    justifyContent: space-between;
`;

export const PokemonTitle = styled(Typography)(({ theme }: { theme: Theme }) => `  
    ${theme.breakpoints.down('sm')} {
        font-size: 2rem;
    }  
`);


export const PokemonNumber = styled(Typography)(({ theme }: { theme: Theme }) => `  
    ${theme.breakpoints.down('sm')} {
        font-size: 3rem;
    }  
`);

export const ContainerPokemonEvolution = styled('div')`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 550px;
    gap: 20px;
    margin: auto;
`;

export const FabStyle = styled(Fab)(({ theme, position }: { theme: Theme, position: string }) => `
    ${theme.breakpoints.only('xs')} {
        position: absolute;
        ${position}: 7%;
        bottom: 40px;
    }
`);

export const FabSkeleton = styled(Skeleton)(({ theme, position }: { theme: Theme, position: string }) => `
    ${theme.breakpoints.only('xs')} {
        position: absolute;
        ${position}: 7%;
        bottom: 40px;
        z-index: 10;
    }
`);
