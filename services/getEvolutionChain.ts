import { PokemonItem } from "@/types/pokemonList";
import { getPokemon } from "./getPokemon";

export interface PokemonEvolution extends PokemonItem {
    genre: number;
}

export async function getEvolutionChain(url: string): Promise<PokemonEvolution[]> {
    const pokemonSpeciesResponse = await fetch(url);
    const pokemonSpeciesData = await pokemonSpeciesResponse.json();
    const evolutionChainResponse = await fetch(pokemonSpeciesData.evolution_chain.url);
    const evolutionChainData = await evolutionChainResponse.json();

    const pokemonEvolutions: PokemonEvolution[] = [];
    let currentEvolutions = evolutionChainData.chain;

    while (currentEvolutions) {
        const speciesUrl = currentEvolutions.species.url;
        if (!speciesUrl) break
        const speciesResponse = await fetch(speciesUrl);
        const speciesData = await speciesResponse?.json();
        if (speciesData) {
            const pokemonData = await getPokemon({ id: speciesData.id })

            pokemonEvolutions.push({
                ...pokemonData,
                genre: speciesData.gender_rate,
            });
        }
        currentEvolutions = currentEvolutions.evolves_to[0];
    }

    return pokemonEvolutions;
}
