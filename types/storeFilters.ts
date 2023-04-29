import { FILTERS_KEY, POKEMON_BY_FILTER_KEY } from "@/constants";
import { TypeDetail } from "./pokemon";
import { Pokemon } from "./typesPokemon";

export type PokemonsByFilterType = {
    typeFilter: string;
    typePokemons: Pokemon[];
}

export interface PokemonState {
    [POKEMON_BY_FILTER_KEY]: PokemonsByFilterType[];
    [FILTERS_KEY]: TypeDetail[];
}