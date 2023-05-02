import { useEffect, useState } from 'react';
import { getTypes } from '@/services/getTypes';
import { TypeDetail } from '@/types/pokemon';
import { PATHNAME_TYPE } from '@/constants';
import useSessionStorage from './useSessionStorage';

interface TypesParams {
    signal: AbortSignal;
}

const useTypes = () => {
    const [types, setTypes] = useState<TypeDetail[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [value, setValue] = useSessionStorage<TypeDetail[] | null>(
        PATHNAME_TYPE, null
    )

    const fetchTypes = async (params: TypesParams) => {
        try {
            if (value) setTypes(value)
            else {
                setLoading(true)
                const typesData = await getTypes(params)
                if (typesData) {
                    const typesSorted = typesData.sort((a, b) => {
                        if (a.name < b.name) return -1
                        return 1
                    })
                    setTypes(typesSorted)
                    setValue(typesSorted)
                }
            }
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        const controller = new AbortController()
        fetchTypes({ signal: controller.signal })
        return () => controller.abort()
    }, []);

    return { types, loading };
};

export default useTypes;
