import { TypeDetail } from '@/types/pokemon';
import { useState, useEffect } from 'react';

const useDebouncedFilter = (filter: TypeDetail[], delay = 500) => {
    const [debouncedFilter, setDebouncedFilter] = useState<TypeDetail[]>(filter);

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedFilter(filter);
        }, delay);

        return () => {
            clearTimeout(handler);
        };
    }, [filter, delay]);

    return debouncedFilter;
};

export default useDebouncedFilter;
