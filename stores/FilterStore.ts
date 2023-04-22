import { RootState } from "@/config-store";
import { TypeDetail } from "@/types/pokemon";
import { PokemonsByFilterType, PokemonState } from "@/types/storeFilters";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: PokemonState = {
    pokemonByFilter: [],
    filters: [],
};

export const filterStore = createSlice({
    name: "filters",
    initialState,
    reducers: {
        setPokemonFilters: (state, action: PayloadAction<PokemonsByFilterType[]>) => {
            state.pokemonByFilter = action.payload;
        },
        addPokemonFilters: (state, action: PayloadAction<PokemonsByFilterType>) => {
            state.pokemonByFilter.push(action.payload);
        },
        setFilter: (state, action: PayloadAction<TypeDetail[]>) => {
            state.filters = action.payload;
        },
        removeTypeInFilters: (state, action: PayloadAction<TypeDetail>) => {
            state.filters = state.filters.filter(type => type.name !== action.payload.name);
        },
        clearStore: (state) => {
            state.filters = [];
            state.pokemonByFilter = [];
        },
    },
});

export const {
    setPokemonFilters,
    addPokemonFilters,
    setFilter,
    clearStore,
    removeTypeInFilters
} = filterStore.actions;

export const selectedFilters = (state: RootState) => state.filters.filters;
export const selectedPokemons = (state: RootState) => state.filters.pokemonByFilter;

export default filterStore.reducer;
