import { useDispatch, useSelector } from 'react-redux';
import { TypeDetail } from '@/types/pokemon';
import {
    setFilter,
    setPokemonFilters,
    addPokemonFilters,
    clearStore,
    selectedFilters,
    selectedPokemons,
    removeTypeInFilters
} from '@/stores/FilterStore';
import { PokemonsByFilterType } from '@/types/storeFilters';

const useFilterStore = () => {
    const dispatch = useDispatch();
    const filters = useSelector(selectedFilters);
    const filteredPokemons = useSelector(selectedPokemons);

    const handleSelectedType = (types: TypeDetail[]) => {
        dispatch(setFilter(types));
    }

    const handleRemoveSelectedType = (type: TypeDetail) => {
        dispatch(removeTypeInFilters(type));
    }

    const handleSetPokemonFilters = (pokemonsFilter: PokemonsByFilterType[]) => {
        dispatch(setPokemonFilters(pokemonsFilter));
    }

    const handleAddPokemonFilters = (pokemonsFilter: PokemonsByFilterType) => {
        dispatch(addPokemonFilters(pokemonsFilter));
    }

    const handleClearStore = () => {
        dispatch(clearStore());
    }

    return {
        filters,
        filteredPokemons,
        handleSelectedType,
        handleSetPokemonFilters,
        handleAddPokemonFilters,
        handleRemoveSelectedType,
        handleClearStore
    };
};

export default useFilterStore;
