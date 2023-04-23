import { FC } from 'react'
import Head from 'next/head'
import { GetServerSideProps } from 'next'
import { useTheme } from '@mui/material/styles';
import { Typography, useMediaQuery } from '@mui/material';
import { Pokemon } from '@/types/pokemon'
import { getGradientPokeTypes } from '@/theme'
import { getPokemonDetail } from '@/services/getPokemon'
import { normalize, capitalize, getNumberFormat } from '@/utils/format'
import Layout from '@/components/Layout'
import { ChipType, ListTypesItem, TextContainer } from '@/components/pokemon/core'
import PokemonTabContainer from '@/components/detail/PokemonTabContainer'
import AboutInfo from '@/components/detail/AboutInfo'
import {
    ImageContainer,
    MainGradientContainer,
    PokemonContainer,
    PokemonImageDetail,
    PokemonNumber,
    PokemonTitle,
    WavePokemonDetail
} from '@/components/detail/core';

type PokemonDetailProps = {
    pokemon: Pokemon
}

interface Props {
    toggleDarkMode: () => void;
    pokemon: Pokemon
}

const PokemonDetail: FC<Props> = ({ toggleDarkMode, pokemon }) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const bgGradient = getGradientPokeTypes(pokemon?.types[0]?.type.name as string || '')
    return (
        <>
            <Head>
                <title>PokeDev</title>
                <meta name='description' content='Created by Gabriel Streck' />
                <meta name='viewport' content='width=device-width, initial-scale=1' />
                <link rel='icon' href='/favicon.ico' />
            </Head>
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
                            {!isMobile ? <AboutInfo pokemon={pokemon} /> : null}
                        </TextContainer>
                        <ImageContainer theme={theme}>
                            <PokemonImageDetail
                                theme={theme}
                                src={pokemon.image}
                                alt={pokemon.name}
                                width={400}
                                height={400}
                            />
                            <WavePokemonDetail theme={theme} />
                        </ImageContainer>
                    </PokemonContainer>

                    <PokemonTabContainer pokemon={pokemon} />
                </Layout>
            </MainGradientContainer>
        </>
    )
}


export const getServerSideProps: GetServerSideProps<PokemonDetailProps> = async ({ params }) => {
    /*@ts-ignore*/
    const { id } = params
    const pokemon = await getPokemonDetail({ id })
    //const evolutions = await getPokemonEvolution({ id })
    // const games = await getPokemonGames({ id })
    return {
        props: {
            pokemon,
        },
    }
}
export default PokemonDetail
