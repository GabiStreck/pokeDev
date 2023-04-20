import { useEffect, useState } from 'react';
import { PER_PAGE } from '@/constants';
import { getPokemons } from '@/services/getPokemon';
import { PokemonItem, PokemonsListParams } from '@/types/pokemonList';
import useInfiniteScroll from './useInfiniteScroll';

const usePokemon = (limit = PER_PAGE) => {
    const [pokemons, setPokemons] = useState<PokemonItem[]>([]);
    const [nextPageUrl, setNextPageUrl] = useState<string | undefined>();
    const [loading, setLoading] = useState<boolean>(false);
    const { lastItemElementRef, isFetching } = useInfiniteScroll(
        () => fetchPokemons({ limit, nextPageUrl })
    );

    const fetchPokemons = async (params: PokemonsListParams) => {
        try {
            setLoading(true)
            const pokemonData = await getPokemons(params)
            if (pokemonData) {
                setPokemons([...pokemons, ...pokemonData.pokemons])
                setNextPageUrl(pokemonData.next)
            }
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        const controller = new AbortController()
        fetchPokemons({ signal: controller.signal, limit })
        return () => controller.abort()
    }, []);

    return { pokemons, nextPageUrl, loading, lastItemElementRef, isFetching };
};

export default usePokemon;
