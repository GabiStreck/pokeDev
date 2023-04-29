import useFilterPokemons from '@/hooks/useFilterPokemons';
import { CircularProgress, Grid } from '@mui/material';
import PokemonListItem from './PokemonListItem';
import { ConteinerLoading } from './core';
import { PokemonListLoading } from './PokemonListLoading';

const PokemonListFilters = () => {
    const {
        pokemons,
        loadingFilters,
        isFetching,
        endOfList,
        lastItemElementRef
    } = useFilterPokemons();

    return (
        <>
            <ConteinerLoading>
                {false && pokemons.length > 0 ?
                    <CircularProgress variant='indeterminate' color='error' />
                    : null
                }
            </ConteinerLoading>
            <Grid container alignContent='stretch' spacing={2}>
                {pokemons?.map((pokemon, index) => (
                    <Grid item xs={12} sm={6} md={3} key={`${index}-pokemon-${pokemon.id}`} >
                        <PokemonListItem pokemon={pokemon} />
                        {index === pokemons.length - 1 && !endOfList ? (
                            <div ref={lastItemElementRef}></div>
                        ) : null}
                    </Grid>
                ))}
                {(isFetching || loadingFilters) && <PokemonListLoading />}
            </Grid>
        </>
    );
};

export default PokemonListFilters;
