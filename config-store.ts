import { configureStore } from "@reduxjs/toolkit";
import filterStore from "@/stores/FilterStore";

export const store = configureStore({
    reducer: {
        filters: filterStore,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
