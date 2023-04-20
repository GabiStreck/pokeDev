import usePokemon from '@/hooks/usePokemon';
import { Grid } from '@mui/material';
import PokemonListItem from './PokemonListItem';

const PokemonList = () => {
    const { pokemons, loading } = usePokemon();
    if (loading) return <span>loading...</span>
    return (
        <Grid container spacing={2}>
            {pokemons?.map((pokemon) => (
                <PokemonListItem pokemon={pokemon} key={pokemon.id} />
            ))}
        </Grid>
    );
};

export default PokemonList;
