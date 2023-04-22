import { configureStore } from "@reduxjs/toolkit";
import filterStore from "@/stores/FilterStore";
import { FILTERS_STORE_KEY } from "./constants";

export const store = configureStore({
    reducer: {
        [FILTERS_STORE_KEY]: filterStore,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
