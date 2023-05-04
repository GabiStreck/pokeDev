import { renderHook, waitFor } from "@testing-library/react";
import fetchMock from 'jest-fetch-mock';
import usePokemon from '@/hooks/usePokemon';
import { getApiUrl } from "@/config";
import { PATHNAME_POKEMON, PER_PAGE } from "@/constants";
import { pokemons } from "../mock/pokemons";

describe('usePokemon', () => {
    beforeEach(() => {
        fetchMock.resetMocks();
    });

    test('Should return a list of PokemonItems with the default amount', async () => {
        const { result } = renderHook(() => usePokemon());
        expect(result.current.pokemons).toEqual([]);
        expect(result.current.nextPageUrl).toBeUndefined();
        expect(result.current.loading).toBeTruthy();

        await waitFor(() =>
            expect(result.current.loading).toBeFalsy()
        )
        expect(result.current.nextPageUrl).toEqual(
            getApiUrl(`${PATHNAME_POKEMON}?offset=${PER_PAGE}&limit=${PER_PAGE}`)
        );
        expect(result.current.pokemons).toEqual(pokemons.slice(0, PER_PAGE));
        expect(result.current.isFetching).toBeFalsy();
    });

    test('Should return a list of PokemonItems with the given limit', async () => {
        const { result } = renderHook(() => usePokemon(3));
        expect(result.current.pokemons).toEqual([]);
        expect(result.current.nextPageUrl).toBeUndefined();
        expect(result.current.loading).toBeTruthy();

        await waitFor(() =>
            expect(result.current.loading).toBeFalsy()
        )
        expect(result.current.nextPageUrl).toEqual(
            getApiUrl(`${PATHNAME_POKEMON}?offset=3&limit=3`)
        );
        expect(result.current.pokemons).toEqual(pokemons.slice(0, 3));
        expect(result.current.isFetching).toBeFalsy();
    });
});