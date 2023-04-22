import { getApiUrl } from "@/config"
import { PATHNAME_POKEMON } from "@/constants";
import { PokemonItem, PokemonList, PokemonParams, PokemonsListParams } from "@/types/pokemonList";

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

    const getImage = () => {
        const imageOther = pokemonData['sprites']['other']
        return (
            imageOther['dream_world'].front_default
            ?? imageOther['official-artwork'].front_default
            ?? pokemonData['sprites'].front_default
        )
    }

    return {
        id: pokemonData.id,
        order: pokemonData.order > 0 ? pokemonData.order : pokemonData.id,
        name: pokemonData.name,
        image: getImage(),
        types: pokemonData.types
    };
}