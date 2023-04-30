import { FC, useState, useEffect } from 'react';
import { useTheme } from '@mui/material';
import { PokemonEvolution } from '@/services/getEvolutionChain';
import SouthIcon from '@mui/icons-material/South';
import NorthIcon from '@mui/icons-material/North';
import { FabStyle, PokemonImageDetail, ContainerPokemonEvolution, FabSkeleton } from './core';
import { Pokemon } from '@/types/pokemon';
import { IMAGE_EMPTY_STATE } from '@/constants';
import { useRouter } from 'next/router';

interface PokemonEvolutionsProps {
    evolutions: PokemonEvolution[];
    pokemon: Pokemon;
    loading: boolean
}

const PokemonEvolutions: FC<PokemonEvolutionsProps> = ({ evolutions = [], pokemon, loading }) => {
    const theme = useTheme()
    const router = useRouter()
    const [currentIndex, setCurrentIndex] = useState<number>(0);

    useEffect(() => {
        const pokemonIndex = evolutions?.findIndex(poke => {
            return poke.name === pokemon.name;
        })
        if (pokemonIndex !== currentIndex) setCurrentIndex(pokemonIndex)
    }, [evolutions])

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
        if (evolutions.length <= 1) return pokemon.image
        return evolutions[currentIndex]?.image
    }

    const getRoute = () => {
        if (evolutions.length <= 1) return null
        return pokemon.id === evolutions[currentIndex].id ?
            null :
            router.push(`/pokemon/${evolutions[currentIndex].id}`)
    }

    return (
        <ContainerPokemonEvolution>
            {loading ?
                <FabSkeleton
                    theme={theme}
                    variant='circular'
                    width={40}
                    height={40}
                    position='left'
                />
                :
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
            }
            <PokemonImageDetail
                theme={theme}
                src={getImage() ?? IMAGE_EMPTY_STATE}
                onError={(e: any) => {
                    e.currentTarget.src = IMAGE_EMPTY_STATE;
                }}
                onClick={getRoute}
                width={400}
                height={400}
                alt={evolutions[currentIndex]?.name ?? pokemon.name}
                title={pokemon.id === evolutions[currentIndex]?.id ?? pokemon.id ? '' : evolutions[currentIndex]?.name ?? ''}
            />
            {loading ?
                <FabSkeleton
                    theme={theme}
                    variant='circular'
                    width={40}
                    height={40}
                    position='right'
                />
                :
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
            }
        </ContainerPokemonEvolution>
    );
};



export default PokemonEvolutions;
