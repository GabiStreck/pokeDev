import { getPokemon } from "./getPokemon";
import { PokemonItem } from "@/types/pokemonList"

export interface PokemonEvolution {
    id: number;
    name: string;
    image: string;
    genre: number;
}

export async function getEvolutionChain({ url }: { url: string }): Promise<PokemonEvolution[]> {
    const pokemonEvolutions: PokemonEvolution[] = [];
    try {
        const pokemonSpeciesResponse = await fetch(url);
        const pokemonSpeciesData = await pokemonSpeciesResponse.json();
        const evolutionChainResponse = await fetch(pokemonSpeciesData.evolution_chain.url);
        const evolutionChainData = await evolutionChainResponse.json();

        let currentEvolutions = evolutionChainData.chain;

        while (currentEvolutions) {
            const speciesUrl = currentEvolutions.species.url;
            if (!speciesUrl) break
            const speciesResponse = await fetch(speciesUrl);
            const speciesData = await speciesResponse?.json();
            if (speciesData)

                try {
                    const pokemon: PokemonItem = await getPokemon({ id: speciesData.id })
                    pokemonEvolutions.push({
                        id: pokemon.id,
                        name: pokemon.name,
                        image: pokemon.image,
                        genre: speciesData.gender_rate,
                    });
                } catch (err) {
                    console.log(err)
                }
            currentEvolutions = currentEvolutions.evolves_to[0];
        }

    } catch (error) {
        console.log(error);
    }

    return pokemonEvolutions;
}
