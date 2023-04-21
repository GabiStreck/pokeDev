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

function Search() {
    const [selectedType, setSelectedType] = useState<TypeDetail[]>([]);
    const { types, loading } = useTypes()
    const handleSelect = (event: any, value: TypeDetail[]) => {
        if (value) setSelectedType(value)
    };

    const handleDeleteChip = (typeToDelete: TypeDetail) => {
        setSelectedType((prevSelectedType) =>
            prevSelectedType.filter((type) => type.name !== typeToDelete.name)
        );
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
                    value={selectedType}
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
                {selectedType.map((type) => (
                    <ChipTypeSearch
                        key={type.name.trim()}
                        label={capitalize(type.name)}
                        onDelete={() => handleDeleteChip(type)}
                        background={getGradientPokeTypes(type.name)}
                    />
                ))}
            </div>
        </Stack>
    );
}


export default Search;