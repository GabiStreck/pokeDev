import { useEffect, useState } from 'react';
import { PER_PAGE } from '@/constants';
import { getPokemons } from '@/services/getPokemon';
import { PokemonItem, PokemonsListParams } from '@/types/pokemonList';
import useInfiniteScroll from './useInfiniteScroll';
import useFilterPokemon from './useFilterPokemon';

const usePokemon = (limit = PER_PAGE) => {
    const [pokemons, setPokemons] = useState<PokemonItem[]>([]);
    const [nextPageUrl, setNextPageUrl] = useState<string | undefined>();
    const [loading, setLoading] = useState<boolean>(false);
    const { fetchPokemonsByTypes, filters, loadingFilters } = useFilterPokemon();

    const { lastItemElementRef, isFetching } = useInfiniteScroll(
        () => fetchPokemons({ limit, nextPageUrl })
    );

    useEffect(() => {
        const controller = new AbortController();
        if (filters.length > 0) {
            if (nextPageUrl) setNextPageUrl('')
            fetchPokemonsByTypes(controller.signal)
                .then(setPokemons)
                .catch(e => console.log(e))
        } else setPokemons([])
        return () => controller.abort();
    }, [filters]);


    useEffect(() => {
        if (filters.length === 0 && pokemons.length === 0) {
            const controller = new AbortController()
            fetchPokemons({ signal: controller.signal, limit })
            return () => controller.abort()
        }
    }, [pokemons]);


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

    return { pokemons, nextPageUrl, loading, lastItemElementRef, isFetching, loadingFilters };
};

export default usePokemon;
