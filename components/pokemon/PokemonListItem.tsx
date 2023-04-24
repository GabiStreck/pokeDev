import { FC } from 'react';
import { Typography } from '@mui/material';
import { PokemonItem } from '@/types/pokemonList';
import { IMAGE_EMPTY_STATE } from '@/constants';
import { capitalize, getNumberFormat, normalize } from '@/utils/format';
import { getGradientPokeTypes } from '@/theme';
import {
    ChipType,
    ContainerPaper,
    LinkStyle,
    ListTypesItem,
    TextContainer,
    PokemonImage
} from './core';


interface Props {
    pokemon: PokemonItem;
}

const PokemonListItem: FC<Props> = ({ pokemon }) => {
    const background = getGradientPokeTypes(pokemon?.types[0]?.type.name as string || '')
    return (
        <LinkStyle href={`/pokemon/${pokemon.id}`}>
            <ContainerPaper background={background}>
                <PokemonImage
                    src={pokemon.image ?? IMAGE_EMPTY_STATE}
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
                        align='center'
                    >
                        {normalize(capitalize(pokemon.name))}
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
                        {getNumberFormat(pokemon.order)}
                    </Typography>
                </TextContainer>
            </ContainerPaper>
        </LinkStyle>
    )
}

export default PokemonListItem