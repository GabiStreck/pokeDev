import { FC } from 'react';
import Image from 'next/image';
import { PokemonItem } from '@/types/pokemon';
import { Grid, Paper, Typography } from '@mui/material';

interface Props {
    pokemon: PokemonItem;
}

const PokemonListItem: FC<Props> = ({ pokemon }) => {
    return (
        <Grid item xs={12} sm={6} md={4}>
            <Paper elevation={0}>
                <Image
                    src={pokemon.image}
                    alt={pokemon.name}
                    height={150} width={150}
                    loading='lazy' />
                <Typography variant="h5" component="h2">
                    {pokemon.name}
                </Typography>
            </Paper>
        </Grid>
    )
}

export default PokemonListItem