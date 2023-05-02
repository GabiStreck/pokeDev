import { getApiUrl } from "@/config";
import { getPokemon, getPokemons, getPokemonDetail } from "@/services/getPokemon";
import { PokemonItem, PokemonList } from "@/types/pokemonList";
import fetchMock from "jest-fetch-mock";

const pokemons: PokemonItem[] = [
    {
        id: 1,
        order: 1,
        name: "bulbasaur",
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg",
        types: [
            {
                "slot": 1,
                "type": {
                    "name": "grass",
                    "url": "https://pokeapi.co/api/v2/type/12/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "poison",
                    "url": "https://pokeapi.co/api/v2/type/4/"
                }
            }
        ],
    },
    {
        id: 2,
        order: 2,
        name: "ivysaur",
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/2.svg",
        types: [
            {
                "slot": 1,
                "type": {
                    "name": "grass",
                    "url": "https://pokeapi.co/api/v2/type/12/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "poison",
                    "url": "https://pokeapi.co/api/v2/type/4/"
                }
            }
        ],
    },
    {
        id: 3,
        order: 3,
        name: "venusaur",
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/3.svg",
        types: [
            {
                "slot": 1,
                "type": {
                    "name": "grass",
                    "url": "https://pokeapi.co/api/v2/type/12/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "poison",
                    "url": "https://pokeapi.co/api/v2/type/4/"
                }
            }
        ],
    },
    {
        id: 4,
        order: 5,
        name: "charmander",
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/4.svg",
        types: [
            {
                "slot": 1,
                "type": {
                    "name": "fire",
                    "url": "https://pokeapi.co/api/v2/type/10/"
                }
            }
        ]
    },
    {
        id: 5,
        order: 6,
        name: "charmeleon",
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/5.svg",
        types: [
            {
                "slot": 1,
                "type": {
                    "name": "fire",
                    "url": "https://pokeapi.co/api/v2/type/10/"
                }
            }
        ]
    },
    {
        id: 6,
        order: 7,
        name: "charizard",
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/6.svg",
        types: [
            {
                "slot": 1,
                "type": {
                    "name": "fire",
                    "url": "https://pokeapi.co/api/v2/type/10/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "flying",
                    "url": "https://pokeapi.co/api/v2/type/3/"
                }
            }
        ]
    },
]

describe("Services: getPokemons", () => {
    beforeEach(() => {
        fetchMock.resetMocks();
    });

    test("Should fetch and return list of pokemons", async () => {
        const mockData: PokemonList = {
            count: 1281,
            next: getApiUrl("pokemon?offset=3&limit=3"),
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
            next: getApiUrl("pokemon?offset=6&limit=3"),
            previous: getApiUrl("pokemon?offset=0&limit=3"),
            pokemons: pokemons.slice(3, 6),
        };
        fetchMock.mockResponseOnce(JSON.stringify(mockData));

        const result = await getPokemons({
            limit: 3,
            signal: null,
            nextPageUrl: getApiUrl("pokemon?limit=3&offset=3"),
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
        const result = await getPokemonDetail({ url: getApiUrl("pokemon/1/") });
        expect(typeof result).toEqual('object');
    });
});

