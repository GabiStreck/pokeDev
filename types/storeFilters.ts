import { FILTERS_KEY, POKEMON_BY_FILTER_KEY } from "@/constants";
import { TypeDetail } from "./pokemon";
import { PokemonItem } from "./pokemonList";

export type PokemonsByFilterType = {
    typeFilter: string;
    pokemons: PokemonItem[]
}

export interface PokemonState {
    [POKEMON_BY_FILTER_KEY]: PokemonsByFilterType[];
    [FILTERS_KEY]: TypeDetail[];
}