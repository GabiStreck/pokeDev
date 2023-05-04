import { PokemonItem } from "@/types/pokemonList";

export const pokemons: PokemonItem[] = [
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
    {
        id: 7,
        order: 10,
        name: "squirtle",
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/7.svg",
        types: [
            {
                "slot": 1,
                "type": {
                    "name": "water",
                    "url": "https://pokeapi.co/api/v2/type/11/"
                }
            }
        ]
    },
    {
        id: 8,
        order: 11,
        name: "wartortle",
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/8.svg",
        types: [
            {
                "slot": 1,
                "type": {
                    "name": "water",
                    "url": "https://pokeapi.co/api/v2/type/11/"
                }
            }
        ]

    },
]