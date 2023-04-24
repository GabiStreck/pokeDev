import { FC, useState } from 'react';
import { useTheme } from '@mui/material';
import { PokemonEvolution } from '@/services/getEvolutionChain';
import SouthIcon from '@mui/icons-material/South';
import NorthIcon from '@mui/icons-material/North';
import { FabStyle, PokemonImageDetail, ContainerPokemonEvolution } from './core';


const PokemonEvolutions: FC<{ evolutions: PokemonEvolution[], name: string }> = ({ evolutions, name = '' }) => {
    const theme = useTheme()
    const pokemonIndex = evolutions.findIndex(poke => {
        return poke.name === name;
    })
    const [currentIndex, setCurrentIndex] = useState<number>(pokemonIndex);


    const handlePrevClick = () => {
        if (currentIndex > 0) {
            setCurrentIndex((prevIndex) => prevIndex - 1);
        }
    };

    const handleNextClick = () => {
        if (currentIndex < evolutions.length - 1) {
            setCurrentIndex((prevIndex) => prevIndex + 1);
        }
    };

    return (
        <ContainerPokemonEvolution>
            <FabStyle
                theme={theme}
                size="small"
                color="secondary"
                onClick={handlePrevClick}
                aria-label="inevolute"
                position='left'
                disabled={currentIndex === 0}
            >
                <SouthIcon />
            </FabStyle>
            <PokemonImageDetail
                theme={theme}
                onError={(e) => {
                    e.currentTarget.src = '/empty-state.png';
                }}
                src={evolutions[currentIndex].image}
                width={400}
                height={400}
                alt={evolutions[currentIndex].name}

            />
            <FabStyle
                theme={theme}
                size="small"
                color="secondary"
                onClick={handleNextClick}
                aria-label="evolute"
                position='right'
                disabled={currentIndex === evolutions.length - 1}
            >
                <NorthIcon />
            </FabStyle>
        </ContainerPokemonEvolution>
    );
};



export default PokemonEvolutions;
