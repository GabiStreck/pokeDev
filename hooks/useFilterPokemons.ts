import { useEffect, useState, useMemo } from 'react';
import { PER_PAGE } from '@/constants';
import { getPokemon } from '@/services/getPokemon';
import { PokemonItem } from '@/types/pokemonList';
import useInfiniteScroll from './useInfiniteScroll';
import useFilterStore from './useFilterStore';
import { TypeDetail } from '@/types/pokemon';
import { PokemonsByFilterType } from '@/types/storeFilters';
import { getType } from '@/services/getTypes';
import { PokemonTypeDetail } from '@/types/typesPokemon';

const useFilterPokemons = (limit = PER_PAGE) => {
    const { filters } = useFilterStore();
    const [loadingFilters, setLoadingFilters] = useState<boolean>(false);
    const [pokemons, setPokemons] = useState<PokemonItem[]>([]);
    const [page, setPage] = useState<number>(1);
    const [endOfList, setEndOfList] = useState<boolean>(false);

    const getPokemonFilters = async (pokemon: PokemonTypeDetail[], offset = page) => {
        const pagination = pokemon.slice((offset - 1) * limit, offset * limit)

        return await Promise.all(
            pagination.map(async (poke) => {
                return getPokemon({ url: poke.url });
            }));
    }

    const getTypeData = async (typePokemon: TypeDetail): Promise<PokemonsByFilterType> => {
        const typeData = await getType({ url: typePokemon.url });
        const pokemonsByFilterType = {
            typeFilter: typeData.name,
            typePokemons: typeData.pokemon,
        }
        return pokemonsByFilterType;
    }

    const getPokemonsByFilters = async (offset = page) => {
        const typesData: PokemonsByFilterType[] = await Promise.all(
            filters.flatMap(async (typePokemon: TypeDetail) => {
                return await getTypeData(typePokemon);
            })
        );
        console.log(typesData, page);

        const allTypeFilter = typesData.map(item => item.typePokemons).reduce((prev, curr) => {
            return prev.filter((obj) => curr.some((el) => el.pokemon.name === obj.pokemon.name));
        });

        const uniquePokemons: PokemonTypeDetail[] = Array.from(new Set(allTypeFilter.map(p => p.pokemon.name)))
            .map(name => allTypeFilter.find(p => p.pokemon.name === name)!)
            .map(p => p.pokemon)


        const pokemonsPaginated: PokemonItem[] = await getPokemonFilters(uniquePokemons, offset)
        return pokemonsPaginated ?? []
    }

    const fetchPokemonsByTypes = async (offset = page) => {
        try {
            console.log('entre', endOfList);
            setLoadingFilters(true);
            const pokemonsPaginated = await getPokemonsByFilters(offset)
            const allPokemonsFilters: PokemonItem[] = pokemonsPaginated.flat().sort((a, b) => {
                if (a.order < b.order) return -1
                return 1
            });
            console.log(allPokemonsFilters.length, allPokemonsFilters.length < limit, limit, offset);

            setEndOfList(allPokemonsFilters.length < limit);
            setPage(offset + 1);
            return allPokemonsFilters
        } catch (error) {
            console.error("error in getting pokemons:", error);
        } finally {
            setLoadingFilters(false);
        }
        return []
    };

    const fetchMorePokemonsByTypes = async () => {
        if (endOfList) return;
        try {
            setLoadingFilters(true);
            const pokemonsPaginated = await fetchPokemonsByTypes()
            setPokemons([...pokemons, ...pokemonsPaginated].sort((a, b) => {
                if (a.order < b.order) return -1
                return 1
            }));
        } catch (error) {
            console.error("error in getting pokemons:", error);
        } finally {
            setLoadingFilters(false);
        }
    };

    const resetFilters = () => {
        setEndOfList(false)
        setPage(1);
        fetchPokemonsByTypes(1).then(setPokemons)
    }

    useEffect(() => {
        fetchPokemonsByTypes(1).then(setPokemons)
    }, [])

    useEffect(() => {
        resetFilters();
    }, [filters]);

    const { lastItemElementRef, isFetching } = useInfiniteScroll(fetchMorePokemonsByTypes);

    return {
        pokemons,
        loadingFilters,
        endOfList,
        lastItemElementRef,
        isFetching
    };
};

export default useFilterPokemons;
