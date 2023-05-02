import { useEffect, useState } from 'react'
import { GenresResponse } from '@/types/genres';
import { getGenres } from '@/services/getGender';


const useGenres = (genre: string) => {
    const [loading, setLoading] = useState<boolean>(false);
    const [genres, setGenres] = useState<GenresResponse | null>(null);

    async function fetchGenresData() {
        try {
            if (!genre) return
            setLoading(true)
            const greData = await getGenres({ name: genre })
            setGenres(greData);
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchGenresData();
    }, [genre]);

    return {
        genres,
        loading
    }
}

export default useGenres