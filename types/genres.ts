export interface GenresResponse {
    id: number
    name: string
    pokemon_species_details: PokemonSpeciesDetail[]
    required_for_evolution: RequiredForEvolution[]
}

export interface PokemonSpeciesDetail {
    rate: number
    pokemon_species: PokemonSpecies
}

export interface PokemonSpecies {
    name: string
    url: string
}

export interface RequiredForEvolution {
    name: string
    url: string
}
