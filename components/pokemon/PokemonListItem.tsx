import { FC } from 'react';
import Image from 'next/image';
import { Grid, Typography } from '@mui/material';
import { PokemonItem } from '@/types/pokemonList';
import { capitalize, getNumberFormat } from '@/utils/format';
import { getGradientPokeTypes } from '@/theme';
import {
    ChipType,
    ContainerPaper,
    LinkStyle,
    ListTypesItem,
    TextContainer
} from './core';

interface Props {
    pokemon: PokemonItem;
}

const PokemonListItem: FC<Props> = ({ pokemon }) => {
    const background = getGradientPokeTypes(pokemon.types[0].type.name as string)
    return (
        <Grid item xs={12} sm={6} md={3}>
            <LinkStyle href='#'>
                <ContainerPaper background={background}>
                    <Image
                        src={pokemon.image}
                        alt={pokemon.name}
                        height={150} width={150}
                        loading='lazy'
                    />
                    <TextContainer>
                        <Typography
                            variant='h4'
                            fontWeight={600}
                            color={'#ffffff'}
                            component='h2'
                        >
                            {capitalize(pokemon.name)}
                        </Typography>
                        <ListTypesItem>
                            {pokemon.types.map(item =>
                                <ChipType label={capitalize(item.type.name)} size='small' />
                            )}
                        </ListTypesItem>
                        <Typography
                            variant='h3'
                            fontWeight={600}
                            color={'#ffffff'}
                            component='h2'
                        >
                            {getNumberFormat(pokemon.id)}
                        </Typography>
                    </TextContainer>
                </ContainerPaper>
            </LinkStyle>
        </Grid>
    )
}

export default PokemonListItem