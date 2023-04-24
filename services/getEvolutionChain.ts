
export interface PokemonEvolution {
    id: string;
    name: string;
    image: string;
    imageDefault: string;
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
        if (speciesData)
            pokemonEvolutions.push({
                id: speciesData.id,
                name: speciesData.name,
                image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${speciesData.id}.svg`,
                imageDefault: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/${speciesData.id}.png`,
                genre: speciesData.gender_rate,
            });

        currentEvolutions = currentEvolutions.evolves_to[0];
    }

    return pokemonEvolutions;
}
