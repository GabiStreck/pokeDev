import { FC } from 'react'
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
import PokemonEvolutions from '@/components/detail/PokemonEvolutions';
import ErrorPage from '@/components/ErrorPage';
import usePokemonDetail from '@/hooks/usePokemonDetail';

type PokemonDetailProps = {
    pokemon: Pokemon | null
}

interface Props {
    toggleDarkMode: () => void;
    pokemon: Pokemon | null
}

const PokemonDetail: FC<Props> = ({ toggleDarkMode, pokemon }) => {
    const theme = useTheme();
    if (!pokemon || !pokemon.types) return <ErrorPage toggleDarkMode={toggleDarkMode} />;
    const { genre, evolutions, loading } = usePokemonDetail(pokemon)
    const bgGradient = getGradientPokeTypes(pokemon?.types[0]?.type.name as string || "")

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
                                <ChipType
                                    key={`pokemon-key-${item.type.name.trim()}`}
                                    label={capitalize(item.type.name)}
                                />
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
                        <PokemonEvolutions
                            evolutions={evolutions}
                            pokemon={pokemon}
                            loading={loading}
                        />
                        <WavePokemonDetail theme={theme} />
                    </ImageContainer>
                </PokemonContainer>

                <PokemonTabContainer pokemon={pokemon} genre={genre} />
            </Layout>
        </MainGradientContainer>
    )
}


/* @ts-ignore*/
export const getServerSideProps: GetServerSideProps<PokemonDetailProps> = async ({ params }) => {
    try {
        const { id } = params as { id: string };
        const pokemon = await getPokemonDetail({ id })
        return {
            props: {
                pokemon: pokemon ? pokemon : null,
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
