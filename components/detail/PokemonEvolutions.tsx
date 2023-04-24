import { FC, useState } from 'react';
import { useTheme } from '@mui/material';
import { PokemonEvolution } from '@/services/getEvolutionChain';
import SouthIcon from '@mui/icons-material/South';
import NorthIcon from '@mui/icons-material/North';
import { FabStyle, PokemonImageDetail, ContainerPokemonEvolution } from './core';
import { Pokemon } from '@/types/pokemon';
import { IMAGE_EMPTY_STATE } from '@/constants';
import { useRouter } from 'next/router';

interface PokemonEvolutionsProps {
    evolutions: PokemonEvolution[];
    pokemon: Pokemon
}

const PokemonEvolutions: FC<PokemonEvolutionsProps> = ({ evolutions = [], pokemon }) => {
    const theme = useTheme()
    const router = useRouter()
    const pokemonIndex = evolutions?.findIndex(poke => {
        return poke.name === pokemon.name;
    }) ?? 0
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

    const getImage = () => {
        if (evolutions.length <= 1 || pokemonIndex === currentIndex) return pokemon.image
        return evolutions[currentIndex]?.image ?? evolutions[currentIndex]?.imageDefault
    }

    return (
        <ContainerPokemonEvolution>
            <FabStyle
                theme={theme}
                size='small'
                color='secondary'
                onClick={handlePrevClick}
                aria-label='inevolute'
                position='left'
                disabled={evolutions.length <= 1 || currentIndex === 0}
            >
                <SouthIcon />
            </FabStyle>
            <PokemonImageDetail
                theme={theme}
                src={getImage() ?? IMAGE_EMPTY_STATE}
                onError={(e: any) => {
                    e.currentTarget.src = IMAGE_EMPTY_STATE;
                }}
                onClick={() => pokemonIndex === currentIndex ? null : router.push(`/pokemon/${evolutions[currentIndex].id}`)}
                width={400}
                height={400}
                alt={evolutions[currentIndex]?.name}
            />
            <FabStyle
                theme={theme}
                size='small'
                color='secondary'
                onClick={handleNextClick}
                aria-label='evolute'
                position='right'
                disabled={evolutions.length <= 1 || currentIndex === evolutions.length - 1}
            >
                <NorthIcon />
            </FabStyle>
        </ContainerPokemonEvolution>
    );
};



export default PokemonEvolutions;
