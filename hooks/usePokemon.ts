import { useEffect, useState } from 'react';
import { PER_PAGE } from '@/constants';
import { getPokemons } from '@/services/getPokemon';
import { PokemonItem } from '@/types/pokemon';

const usePokemon = (limit = PER_PAGE) => {
    const [pokemons, setPokemons] = useState<PokemonItem[]>([]);
    const [loading, setLoading] = useState<boolean>(false);

    const fetchPokemons = async (signal: AbortSignal) => {
        try {
            setLoading(true)
            const pokemonData = await getPokemons({ signal, limit })
            if (pokemonData) setPokemons(pokemonData)
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        const controller = new AbortController()
        fetchPokemons(controller.signal)
        return () => controller.abort()
    }, []);

    return { pokemons, loading };
};

export default usePokemon;
