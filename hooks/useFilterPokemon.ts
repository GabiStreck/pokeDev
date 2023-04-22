import { useMemo, useState } from 'react';
import { getType } from '@/services/getTypes';
import { getPokemon } from '@/services/getPokemon';
import { PokemonItem } from '@/types/pokemonList';
import { Pokemon } from '@/types/typesPokemon';
import { TypeDetail } from '@/types/pokemon';
import useFilterStore from './useFilterStore';
import { PokemonsByFilterType } from '@/types/storeFilters';


const useFilterPokemon = () => {
    const { filters, filteredPokemons, handleAddPokemonFilters } = useFilterStore();
    const [loadingFilters, setLoadingFilters] = useState<boolean>(false);

    const missingTypes = useMemo<TypeDetail[]>(() => {
        const typesInPokemonFilters: string[] = filteredPokemons.map(pokeFilter => pokeFilter.typeFilter);
        return filters.filter((type: TypeDetail) => !typesInPokemonFilters.includes(type.name)) as TypeDetail[];
    }, [filters, filteredPokemons]);

    const getPokemonFilters = async (pokemon: Pokemon[], signal: AbortSignal, pokemonSet: Set<string>) => {
        return Promise.all(
            pokemon.map(({ pokemon }) => {
                const id = pokemon.url.split("/").slice(-2, -1)[0];
                if (pokemonSet.has(id)) {
                    return null;
                } else {
                    pokemonSet.add(id);
                    return getPokemon({ url: pokemon.url, signal });
                }
            })
        );
    }

    const getTypeData = async (typePokemon: TypeDetail, signal: AbortSignal): Promise<PokemonItem[]> => {
        const typeData = await getType({ url: typePokemon.url, signal });
        const pokemonFilters: (PokemonItem | null)[] = await getPokemonFilters(
            typeData.pokemon, signal, new Set<string>()
        );
        const filteredPokemonFilters: PokemonItem[] = pokemonFilters.filter(
            (p: PokemonItem | null): p is PokemonItem => p !== null);

        if (filteredPokemonFilters && filteredPokemonFilters.length > 0) {
            handleAddPokemonFilters({ typeFilter: typeData.name, pokemons: filteredPokemonFilters });
            return filteredPokemonFilters;
        }
        return [];
    }

    const fetchPokemonsByTypes = async (signal: AbortSignal) => {
        try {
            setLoadingFilters(true)
            const typesData: PokemonItem[][] = await Promise.all(
                missingTypes.map(async (typePokemon: TypeDetail) => {
                    return await getTypeData(typePokemon, signal);
                })
            );

            const pokemonsInStore = filteredPokemons.filter(
                (pokeFilter: PokemonsByFilterType) => filters.some(
                    (filter: TypeDetail) => filter.name === pokeFilter.typeFilter
                )
            ).map(pokemonFilter => pokemonFilter.pokemons).flat();

            const allPokemonsFilters: PokemonItem[] = [...pokemonsInStore, ...typesData.flat()].sort((a, b) => {
                if (a.order < b.order) return -1
                return 1
            });
            setLoadingFilters(false)
            return allPokemonsFilters;
        } catch (error) {
            console.log(error);
            return [];
        }
    };

    return { fetchPokemonsByTypes, filters, loadingFilters };
}

export default useFilterPokemon;
