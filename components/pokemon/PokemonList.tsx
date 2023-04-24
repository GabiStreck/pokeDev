import usePokemon from '@/hooks/usePokemon';
import { CircularProgress, Grid } from '@mui/material';
import PokemonListItem from './PokemonListItem';
import { ConteinerLoading } from './core';
import { PokemonListLoading } from './PokemonListLoading';

const PokemonList = () => {
    const {
        pokemons,
        nextPageUrl,
        loading,
        isFetching,
        loadingFilters,
        lastItemElementRef
    } = usePokemon();
    return (
        <>
            <ConteinerLoading>
                {loadingFilters && pokemons.length > 0 ?
                    <CircularProgress variant='indeterminate' color='error' />
                    : null
                }
            </ConteinerLoading>
            <Grid container alignContent='stretch' spacing={2}>
                {pokemons?.map((pokemon, index) => (
                    <Grid item xs={12} sm={6} md={3} key={`${index}-pokemon-${pokemon.id}`} >
                        <PokemonListItem pokemon={pokemon} />
                        {index === pokemons.length - 1 && nextPageUrl ? (
                            <div ref={lastItemElementRef}></div>
                        ) : null}
                    </Grid>
                ))}
                {(isFetching || loading || loadingFilters && !nextPageUrl) && <PokemonListLoading />}
            </Grid>
        </>
    );
};

export default PokemonList;
