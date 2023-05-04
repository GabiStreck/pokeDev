import fetchMock from "jest-fetch-mock";
import { getApiUrl } from "@/config";
import { PATHNAME_POKEMON } from "@/constants";
import { getPokemon, getPokemons, getPokemonDetail } from "@/services/getPokemon";
import { PokemonList } from "@/types/pokemonList";
import { pokemons } from "../mock/pokemons";


describe("Services: getPokemons", () => {
    beforeEach(() => {
        fetchMock.resetMocks();
    });

    test("Should fetch and return list of pokemons", async () => {
        const mockData: PokemonList = {
            count: 1281,
            next: getApiUrl(`${PATHNAME_POKEMON}?offset=3&limit=3`),
            previous: null,
            pokemons: pokemons.slice(0, 3),
        };
        fetchMock.mockResponseOnce(JSON.stringify(mockData));

        const result = await getPokemons({ limit: 3, signal: null });
        expect(result).toEqual(mockData);
    });

    test("Should fetch and return list of pokemons with nextPageUrl", async () => {
        const mockData: PokemonList = {
            count: 1281,
            next: getApiUrl(`${PATHNAME_POKEMON}?offset=6&limit=3`),
            previous: getApiUrl(`${PATHNAME_POKEMON}?offset=0&limit=3`),
            pokemons: pokemons.slice(3, 6),
        };
        fetchMock.mockResponseOnce(JSON.stringify(mockData));

        const result = await getPokemons({
            limit: 3,
            signal: null,
            nextPageUrl: getApiUrl(`${PATHNAME_POKEMON}?limit=3&offset=3`),
        });
        expect(result).toEqual(mockData);
    });
});



describe("Services: getPokemon", () => {
    beforeEach(() => {
        fetchMock.resetMocks();
    });

    test("Fetches a Pokemon and returns its details", async () => {
        const mockResponse = pokemons[0]
        fetchMock.mockResponse(JSON.stringify(mockResponse));

        const pokemon = await getPokemon({ id: "1" });
        expect(pokemon.id).toEqual(mockResponse.id);
        expect(pokemon.name).toEqual(mockResponse.name);
        expect(pokemon.image).not.toBeUndefined();
        expect(pokemon.types.length).toBeGreaterThan(0);
    });
});


describe("Services: getPokemonDetail", () => {
    beforeEach(() => {
        fetchMock.resetMocks();
    });

    test("Should return a Pokemon  when I pass the id as a parameter", async () => {
        const result = await getPokemonDetail({ id: "1" });
        expect(typeof result).toEqual('object');
    });

    test("Should return a Pokemon  when I pass the url as a parameter", async () => {
        const result = await getPokemonDetail({ url: getApiUrl(`${PATHNAME_POKEMON}/1/`) });
        expect(typeof result).toEqual('object');
    });
});

