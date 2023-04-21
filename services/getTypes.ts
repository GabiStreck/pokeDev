import { getApiUrl } from "@/config"
import { PATHNAME_TYPE } from "@/constants";
import { TypeDetail } from "@/types/pokemon";
import { ListResponse } from "@/types/pokemonList";
import { TypeResponse } from "@/types/typesPokemon";

interface TypesParams { signal?: AbortSignal }
interface TypeParams {
    id?: number
    url?: string,
    signal?: AbortSignal,
}

const BASE_URL = getApiUrl(PATHNAME_TYPE)

export const getTypes = async ({ signal }: TypesParams): Promise<TypeDetail[]> => {
    const response = await fetch(BASE_URL, { signal });
    const data: ListResponse = await response.json();
    return data.results
}

export const getType = async ({ signal, id, url }: TypeParams): Promise<any> => {
    const typeUrl = url ? url : `${BASE_URL}/${id}`
    const response = await fetch(typeUrl, { signal });
    const data: TypeResponse = await response.json();
    return data
}