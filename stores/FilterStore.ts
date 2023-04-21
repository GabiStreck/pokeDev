import { RootState } from "@/config-store";
import { TypeDetail } from "@/types/pokemon";
import { PokemonList } from "@/types/pokemonList";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface PokemonState {
    pokemons: PokemonList[];
    filters: TypeDetail[];
}

const initialState: PokemonState = {
    pokemons: [],
    filters: [],
};

export const filterStore = createSlice({
    name: "filters",
    initialState,
    reducers: {
        setPokemons: (state, action: PayloadAction<PokemonList[]>) => {
            state.pokemons = action.payload;
        },
        setFilter: (state, action: PayloadAction<TypeDetail[]>) => {
            state.filters = action.payload;
        },
        removeTypeInFilters: (state, action: PayloadAction<TypeDetail>) => {
            state.filters = state.filters.filter(type => type.name !== action.payload.name);
        },
        clearStore: (state) => {
            state.filters = [];
            state.pokemons = [];
        },
    },
});

export const { setPokemons, setFilter, clearStore, removeTypeInFilters } = filterStore.actions;
export const selectedFilters = (state: RootState) => state.filters.filters;
export const selectedPokemons = (state: RootState) => state.filters.pokemons;
export default filterStore.reducer;
