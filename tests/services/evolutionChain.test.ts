import { PokemonEvolution, getEvolutionChain } from "@/services/getEvolutionChain";

describe('Services: getEvolutionChain', () => {
    const url = 'https://pokeapi.co/api/v2/pokemon-species/1/'
    test('should return an array of PokemonEvolutions', async () => {
        const pokemonEvolutions: PokemonEvolution[] = await getEvolutionChain({ url: url });
        expect(Array.isArray(pokemonEvolutions)).toBe(true);
        expect(pokemonEvolutions.length).toBeGreaterThan(0);

        const firstPokemonEvolution = pokemonEvolutions[0];
        expect(firstPokemonEvolution.id).toBeDefined();
        expect(firstPokemonEvolution.name).toBeDefined();
        expect(firstPokemonEvolution.image).toBeDefined();
        expect(firstPokemonEvolution.genre).toBeDefined();
    });

    test('should return an empty array when an invalid url is provided', async () => {
        const pokemonEvolutions: PokemonEvolution[] = await getEvolutionChain({ url: 'invalid-url' });
        expect(Array.isArray(pokemonEvolutions)).toBe(true);
        expect(pokemonEvolutions.length).toBe(0);
    });
});
