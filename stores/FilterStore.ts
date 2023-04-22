import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "@/config-store";
import {
    FILTERS_KEY,
    FILTERS_STORE_KEY,
    POKEMON_BY_FILTER_KEY
} from "@/constants";
import { TypeDetail } from "@/types/pokemon";
import { PokemonsByFilterType, PokemonState } from "@/types/storeFilters";

export const initialState: PokemonState = {
    [FILTERS_KEY]: [],
    [POKEMON_BY_FILTER_KEY]: []
};

export const filterStore = createSlice({
    name: FILTERS_STORE_KEY,
    initialState,
    reducers: {
        setPokemonFilters: (state, action: PayloadAction<PokemonsByFilterType[]>) => {
            state[POKEMON_BY_FILTER_KEY] = action.payload;
        },
        addPokemonFilters: (state, action: PayloadAction<PokemonsByFilterType>) => {
            state[POKEMON_BY_FILTER_KEY].push(action.payload);
        },
        setFilter: (state, action: PayloadAction<TypeDetail[]>) => {
            state[FILTERS_KEY] = action.payload;
        },
        removeTypeInFilters: (state, action: PayloadAction<TypeDetail>) => {
            state[FILTERS_KEY] = state[FILTERS_KEY].filter(type => type.name !== action.payload.name);
        },
        clearStore: (state) => {
            state[FILTERS_KEY] = [];
            state[POKEMON_BY_FILTER_KEY] = [];
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

export const selectedFilters = (state: RootState) => state[FILTERS_STORE_KEY][FILTERS_KEY];
export const selectedPokemons = (state: RootState) => state[FILTERS_STORE_KEY][POKEMON_BY_FILTER_KEY];

export default filterStore.reducer;
