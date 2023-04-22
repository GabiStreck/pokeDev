import { TypeDetail } from "./pokemon";
import { PokemonItem } from "./pokemonList";

export type PokemonsByFilterType = {
    typeFilter: string;
    pokemons: PokemonItem[]
}

export interface PokemonState {
    pokemonByFilter: PokemonsByFilterType[];
    filters: TypeDetail[];
}