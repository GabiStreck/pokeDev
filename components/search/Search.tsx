import { useState } from 'react';
import { TypeDetail } from '@/types/pokemon';
import useTypes from '@/hooks/useTypes';
import { capitalize } from '@/utils/format';
import { getGradientPokeTypes } from '@/theme';
import {
    Box,
    Paper,
    Stack,
    Autocomplete,
    TextField
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { ChipTypeSearch, ContainerSearchInput } from './core';
import useFilterPokemon from '@/hooks/useFilterPokemon';

function Search() {
    const { types, loading } = useTypes()
    const {
        selectedTypes,
        handleSelectedType,
        handleClearStore,
        handleRemoveSelectedType
    } = useFilterPokemon()

    const handleSelect = (event: any, value: TypeDetail[]) => {
        if (value) handleSelectedType(value)
    };

    return (
        <Stack
            paddingX={20}
            gap={3}
            minHeight={250}
            justifyContent='center'
        >
            <Box
                paddingX={2}
                paddingY={1}
                borderRadius={20}
                component={Paper}
                boxShadow={6}
                minWidth={600}
            >
                <Autocomplete
                    multiple
                    options={types}
                    getOptionLabel={(option) => capitalize(option.name)}
                    onChange={handleSelect}
                    id='search_types'
                    loading={loading}
                    value={selectedTypes}
                    fullWidth
                    clearOnEscape
                    renderTags={() => null}
                    renderInput={(params) => (
                        <ContainerSearchInput>
                            <SearchIcon />
                            <TextField
                                {...params}
                                placeholder='Search pokemon by type'
                                variant='standard'
                            />
                        </ContainerSearchInput>
                    )}
                />
            </Box>
            <div>
                {selectedTypes.map((type) => (
                    <ChipTypeSearch
                        key={type.name.trim()}
                        label={capitalize(type.name)}
                        onDelete={() => handleRemoveSelectedType(type)}
                        background={getGradientPokeTypes(type.name)}
                    />
                ))}
            </div>
        </Stack>
    );
}


export default Search;