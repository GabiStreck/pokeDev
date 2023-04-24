import { getApiUrl } from "@/config";
import { PATHNAME_GENDER } from "@/constants";
import { GenresResponse } from "@/types/genres";

export const getGenres = async ({ name }: { name: string }): Promise<GenresResponse> => {
    const response = await fetch(`${getApiUrl(PATHNAME_GENDER)}/${name}`);
    const data = await response.json();
    return data;
};

