import { FC } from 'react'
import Head from 'next/head'
import { GetServerSideProps } from 'next'
import { useTheme } from '@mui/material/styles';
import { Pokemon } from '@/types/pokemon'
import { getGradientPokeTypes } from '@/theme'
import { BAD_REQUEST, NOT_FOUND } from '@/constants';
import { getPokemonDetail } from '@/services/getPokemon'
import { normalize, capitalize, getNumberFormat } from '@/utils/format'
import Layout from '@/components/Layout'
import { ChipType, ListTypesItem, TextContainer } from '@/components/pokemon/core'
import PokemonTabContainer from '@/components/detail/PokemonTabContainer'
import {
    ImageContainer,
    MainGradientContainer,
    PokemonContainer,
    PokemonNumber,
    PokemonTitle,
    WavePokemonDetail
} from '@/components/detail/core';
import { getGenres } from '@/services/getGender';
import { GenresResponse } from '@/types/genres';
import { getEvolutionChain, PokemonEvolution } from '@/services/getEvolutionChain';
import PokemonEvolutions from '@/components/detail/PokemonEvolutions';
import ErrorPage from '@/components/ErrorPage';

type PokemonDetailProps = {
    pokemon: Pokemon | null,
    genres: GenresResponse | null;
    evolutions: PokemonEvolution[] | [];
}

interface Props {
    toggleDarkMode: () => void;
    pokemon: Pokemon | null,
    genres: GenresResponse;
    evolutions: PokemonEvolution[];
}

const PokemonDetail: FC<Props> = ({ toggleDarkMode, pokemon, genres, evolutions }) => {
    console.log('pokemon', pokemon);
    if (!pokemon || !pokemon.types) return <ErrorPage toggleDarkMode={toggleDarkMode} />;

    const theme = useTheme();
    const bgGradient = getGradientPokeTypes(pokemon?.types[0]?.type.name as string || '')
    return (
        <MainGradientContainer
            theme={theme}
            backgroundGradient={bgGradient}
        >
            <Layout toggleDarkMode={toggleDarkMode}>
                <PokemonContainer theme={theme}>
                    <TextContainer>
                        <PokemonTitle
                            theme={theme}
                            variant='h2'
                            fontWeight={600}
                            color={'#ffffff'}
                            align='center'
                        >
                            {normalize(capitalize(pokemon.name))}
                        </PokemonTitle>
                        <ListTypesItem>
                            {pokemon.types.map(item =>
                                <ChipType label={capitalize(item.type.name)} />
                            )}
                        </ListTypesItem>
                        <PokemonNumber
                            theme={theme}
                            variant='h1'
                            fontWeight={600}
                            color={'#ffffffcf'}
                        >
                            {getNumberFormat(pokemon.order)}
                        </PokemonNumber>
                    </TextContainer>
                    <ImageContainer theme={theme}>
                        <PokemonEvolutions evolutions={evolutions} pokemon={pokemon} />
                        <WavePokemonDetail theme={theme} />
                    </ImageContainer>
                </PokemonContainer>

                <PokemonTabContainer pokemon={pokemon} genres={genres} />
            </Layout>
        </MainGradientContainer>
    )
}


/* @ts-ignore*/
export const getServerSideProps: GetServerSideProps<PokemonDetailProps> = async ({ params }) => {
    try {
        const { id } = params as { id: string };

        const pokemon = await getPokemonDetail({ id })
        if (!pokemon) {
            return {
                props: {
                    pokemon: null,
                    genres: null,
                    evolution: []
                }
            }
        }
        const evolution = await getEvolutionChain(pokemon.species.url)
        const evolutions = evolution.length > 0 ? evolution : [];
        const pokemonSpecie = evolutions?.find(item => item.name === pokemon.name)
        let genres = null
        if (pokemonSpecie) {
            const gender = pokemonSpecie.genre === -1 ? 'genderless' : pokemonSpecie.genre === 0 ? 'genderless' : pokemonSpecie.genre === 1 ? 'male' : 'female';
            genres = gender ? await getGenres({ name: gender }) : null;
        }

        return {
            props: {
                pokemon: pokemon,
                genres: genres,
                evolutions: evolutions
            }
        };
    } catch (error: any) {
        if (error.response && error.response.status === NOT_FOUND) {
            return {
                notFound: true
            }
        } else if (error.response && error.response.status === BAD_REQUEST) {
            return {
                badRequest: true
            }
        }
        console.error(error);
        return {
            props: {
                pokemon: {} as Pokemon,
                genres: null,
                evolution: []
            }
        };
    }
}

export default PokemonDetail 
