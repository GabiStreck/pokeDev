import { getApiUrl } from "@/config"
import { PATHNAME_POKEMON } from "@/constants";
import { Pokemon } from "@/types/pokemon";
import { PokemonItem, PokemonList, PokemonParams, PokemonsListParams } from "@/types/pokemonList";
import { getImage } from "@/utils/helpers";

const BASE_URL = getApiUrl(PATHNAME_POKEMON)

export const getPokemons = async ({ limit, signal, nextPageUrl }: PokemonsListParams)
    : Promise<PokemonList> => {
    const url = nextPageUrl ? nextPageUrl : `${BASE_URL}?limit=${limit}`;

    const response = await fetch(url, { signal });
    const data = await response.json();

    const pokemonData: PokemonItem[] = await Promise.all(
        data.results.map(async (pokemon: { url: string; name: string }) => {
            return await getPokemon({ url: pokemon.url, signal })
        })
    );
    delete data.results
    return { pokemons: pokemonData, ...data }
}


export const getPokemon = async ({ id, signal, url }: PokemonParams)
    : Promise<PokemonItem> => {
    const pokemonUrl = url ? url : `${BASE_URL}/${id}`
    const pokemonResponse = await fetch(pokemonUrl, { signal });

    const pokemonData = await pokemonResponse.json();

    return {
        id: pokemonData.id,
        order: pokemonData.order > 0 ? pokemonData.order : pokemonData.id,
        name: pokemonData.name,
        image: getImage(pokemonData['sprites']),
        types: pokemonData.types
    };
}



export const getPokemonDetail = async ({ id, signal, url }: PokemonParams)
    : Promise<Pokemon | undefined> => {
    const pokemonUrl = url ? url : `${BASE_URL}/${id}`
    const pokemonResponse = await fetch(pokemonUrl, { signal });

    const pokemonData = await pokemonResponse?.json();
    if (!pokemonData) return undefined;
    return {
        ...pokemonData,
        order: pokemonData.order > 0 ? pokemonData.order : pokemonData.id,
        image: getImage(pokemonData['sprites']),
    };
}