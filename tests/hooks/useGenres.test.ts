import { renderHook, waitFor } from "@testing-library/react";
import useGenres from "@/hooks/useGenres";
import { GenresResponse } from "@/types/genres";
import fetchMock from "jest-fetch-mock";

describe("Hooks: useGenres", () => {
    beforeEach(() => {
        fetchMock.resetMocks();
    });

    test("Should return the genre with the correct parameters", async () => {
        const mockGenresData: GenresResponse = {
            id: 1,
            name: "male",
            pokemon_species_details: [],
            required_for_evolution: [],
        };
        fetchMock.mockResponseOnce(JSON.stringify(mockGenresData));
        const { result } = renderHook(() => useGenres("male"));
        expect(result.current.loading).toBe(true);

        await waitFor(() =>
            expect(result.current.loading).toBe(false)
        )
        expect(result.current.genres).not.toBeNull();
        expect(result.current.genres?.name).toEqual(mockGenresData.name);
    });

    test("Does not fetch genres data when no genre is provided", async () => {
        const { result } = renderHook(() => useGenres(""));
        expect(result.current.loading).toBe(false);
        expect(result.current.genres).toBeNull();
        expect(fetchMock).not.toHaveBeenCalled();
    });

    test("Should return null when wrong data is provided", async () => {
        const errorMessage = "Error fetching genres data";
        fetchMock.mockReject(new Error(errorMessage));
        const { result } = renderHook(() =>
            useGenres("test-error")
        );
        expect(result.current.loading).toBe(true);
        await waitFor(() =>
            expect(result.current.loading).toBe(false)
        )

        expect(result.current.genres).toBeNull();
    });
});
