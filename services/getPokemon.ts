import { getApiUrl } from "@/config"
import { PokemonItem } from "@/types/pokemon";

interface GetPokemonsParams {
    limit: number;
    signal?: any;
    nextPageUrl?: string
}

interface GetPokemonParams {
    id?: string;
    url?: string,
    signal?: any;
}

const BASE_URL = getApiUrl('pokemon')

export const getPokemons = async ({ limit, signal, nextPageUrl }: GetPokemonsParams) => {
    const url = nextPageUrl ? nextPageUrl : `${BASE_URL}?limit=${limit}`;

    const response = await fetch(url, { signal });
    const data = await response.json();

    const pokemonData = await Promise.all(
        data.results.map(async (pokemon: { url: string; name: string }) => {
            return await getPokemon({ url: pokemon.url, signal })
        })
    );
    return pokemonData
}


export const getPokemon = async ({ id, signal, url }: GetPokemonParams)
    : Promise<PokemonItem | undefined> => {
    if (!id && !url) return;
    const pokemonUrl = url ? url : `${BASE_URL}/${id}`
    const pokemonResponse = await fetch(pokemonUrl, { signal });

    const pokemonData = await pokemonResponse.json();
    return {
        id: pokemonData.id,
        name: pokemonData.name,
        image: pokemonData['sprites']['other']['dream_world']['front_default'],
    };
} 