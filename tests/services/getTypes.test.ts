import { getApiUrl } from "@/config";
import { PATHNAME_TYPE } from "@/constants";
import { getType, getTypes } from "@/services/getTypes";
import { Result } from "@/types/pokemonList";
import { TypeResponse } from "@/types/typesPokemon";
import fetchMock from "jest-fetch-mock";

describe("Services: getTypes", () => {
    test("Fetches a types and returns its list of types", async () => {
        const types: Result[] = await getTypes({ signal: new AbortController().signal });
        expect(types[0]).toHaveProperty('name');
        expect(types[0]).toHaveProperty('url');
    });
});


describe("Services: getType", () => {
    test("Should return a Type when I pass the url as a parameter", async () => {
        const result: TypeResponse = await getType({ url: getApiUrl(`${PATHNAME_TYPE}/1/`) });
        expect(typeof result).toEqual('object');
        expect(result).toHaveProperty('pokemon');
    });
});

