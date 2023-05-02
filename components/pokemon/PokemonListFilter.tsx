import useFilterPokemons from '@/hooks/useFilterPokemons';
import { Grid } from '@mui/material';
import PokemonListItem from './PokemonListItem';
import { PokemonListLoading } from './PokemonListLoading';
import PokemonsFilterEmpty from './PokemonsFilterEmpty';

const PokemonListFilters = () => {
    const {
        pokemons,
        loadingFilters,
        isFetching,
        endOfList,
        lastItemElementRef
    } = useFilterPokemons();

    if (pokemons.length === 0 && !loadingFilters && !isFetching)
        return <PokemonsFilterEmpty />

    return (
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
    );
};

export default PokemonListFilters;
