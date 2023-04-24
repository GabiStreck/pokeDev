
export interface PokemonEvolution {
    id: string;
    name: string;
    image: string;
    genre: number;
    habitat: string
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
        const speciesResponse = await fetch(speciesUrl);
        const speciesData = await speciesResponse.json();

        pokemonEvolutions.push({
            id: speciesData.id,
            name: speciesData.name,
            image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${speciesData.id}.svg`,
            genre: speciesData.gender_rate,
            habitat: speciesData.habitat.name
        });

        currentEvolutions = currentEvolutions.evolves_to[0];
    }

    return pokemonEvolutions;
}
