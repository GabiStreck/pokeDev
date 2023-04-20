import { Fragment } from 'react'
import usePokemon from '@/hooks/usePokemon';
import { Grid } from '@mui/material';
import PokemonListItem from './PokemonListItem';

const PokemonList = () => {
    const {
        pokemons,
        nextPageUrl,
        loading,
        isFetching,
        lastItemElementRef
    } = usePokemon();

    return (
        <Grid container spacing={2}>
            {pokemons?.map((pokemon, index) => (
                <Fragment key={pokemon.id} >
                    <PokemonListItem pokemon={pokemon} />
                    {index === pokemons.length - 1 && nextPageUrl ? (
                        <div ref={lastItemElementRef}></div>
                    ) : null}
                </Fragment>
            ))}
            {isFetching || loading && <span>loading</span>}
        </Grid>
    );
};

export default PokemonList;
