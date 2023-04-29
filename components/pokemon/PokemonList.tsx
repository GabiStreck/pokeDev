import usePokemon from '@/hooks/usePokemon';
import { Grid } from '@mui/material';
import PokemonListItem from './PokemonListItem';
import { PokemonListLoading } from './PokemonListLoading';

const PokemonList = () => {
    const {
        pokemons,
        nextPageUrl,
        loading,
        isFetching,
        lastItemElementRef
    } = usePokemon();
    return (
        <Grid container alignContent='stretch' spacing={2}>
            {pokemons?.map((pokemon, index) => (
                <Grid item xs={12} sm={6} md={3} key={`${index}-pokemon-${pokemon.id}`} >
                    <PokemonListItem pokemon={pokemon} />
                    {index === pokemons.length - 1 && nextPageUrl ? (
                        <div ref={lastItemElementRef}></div>
                    ) : null}
                </Grid>
            ))}
            {(isFetching || loading && !nextPageUrl) && <PokemonListLoading />}
        </Grid>
    );
};

export default PokemonList;
