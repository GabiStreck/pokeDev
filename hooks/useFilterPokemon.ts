import { useDispatch, useSelector } from 'react-redux';
import { TypeDetail } from '@/types/pokemon';
import { PokemonList } from '@/types/pokemonList';
import {
    setFilter,
    setPokemons,
    clearStore,
    selectedFilters,
    selectedPokemons,
    removeTypeInFilters
} from '@/stores/FilterStore';

const useFilterPokemon = () => {
    const dispatch = useDispatch();
    const selectedTypes = useSelector(selectedFilters);
    const filteredPokemons = useSelector(selectedPokemons);

    const handleSelectedType = (types: TypeDetail[]) => {
        dispatch(setFilter(types));
    }

    const handleRemoveSelectedType = (type: TypeDetail) => {
        dispatch(removeTypeInFilters(type));
    }

    const handleChangePokemons = (pokemons: PokemonList[]) => {
        dispatch(setPokemons(pokemons));
    }

    const handleClearStore = () => {
        dispatch(clearStore());
    }

    return {
        selectedTypes,
        filteredPokemons,
        handleSelectedType,
        handleChangePokemons,
        handleRemoveSelectedType,
        handleClearStore
    };
};

export default useFilterPokemon;
