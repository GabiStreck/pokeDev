import { Type } from "./pokemon";

export type PokemonItem = {
    id: number;
    order: number;
    name: string;
    image: string;
    types: Type[];
}

export interface ListResponse {
    count: number
    next: string
    previous: any
    results: Result[]
}

export interface Result {
    name: string;
    url: string;
}

export interface PokemonList {
    count: number;
    next: string;
    previous: any;
    pokemons: PokemonItem[];
}

export interface PokemonsListParams {
    limit: number;
    signal?: any;
    nextPageUrl?: string;
}

export interface PokemonParams {
    id?: string;
    url?: string,
    signal?: any;
}

