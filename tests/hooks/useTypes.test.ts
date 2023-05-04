import { renderHook, waitFor } from '@testing-library/react';
import fetchMock from 'jest-fetch-mock';
import useTypes from '@/hooks/useTypes';
import { TypeDetail } from '@/types/pokemon';

const typesData: TypeDetail[] = [
    { name: "bug", url: "https://pokeapi.co/api/v2/type/7/" },
    { name: "dark", url: "https://pokeapi.co/api/v2/type/17/" },
    { name: "dragon", url: "https://pokeapi.co/api/v2/type/16/" }
];

describe('useTypes hook', () => {
    beforeEach(() => {
        fetchMock.resetMocks();
    });

    test('should fetch and set types when first rendered', async () => {
        fetchMock.mockResponseOnce(JSON.stringify(typesData));
        const { result } = renderHook(() => useTypes());
        expect(result.current.types).toEqual([]);
        expect(result.current.loading).toEqual(true);
        await waitFor(() =>
            expect(result.current.loading).toBe(false)
        )
        expect(result.current.types[0]).toEqual(typesData[0]);
        expect(result.current.loading).toEqual(false);
    });

    test('should use cached types from sessionStorage if available', async () => {
        global.sessionStorage.getItem = jest.fn().mockReturnValueOnce(JSON.stringify(typesData));
        const { result } = renderHook(() => useTypes());
        expect(result.current.types[0]).toEqual(typesData[0]);
        expect(result.current.loading).toEqual(false);
    });
});
