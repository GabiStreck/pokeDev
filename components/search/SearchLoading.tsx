import {
    Box,
    Skeleton,
    useTheme
} from '@mui/material';
import { SearchStackContainer } from './core';


function SearchLoading() {
    const theme = useTheme();
    return (
        <SearchStackContainer
            theme={theme}
            paddingX={20}
            gap={3}
            minHeight={250}
            justifyContent='center'
        >
            <Box display='grid' alignItems='center' gap={1}>
                <Skeleton variant='rounded' width={200} height={60} style={{ margin: 'auto' }} />
                <Skeleton variant='rounded' width='100%' height={40} />
            </Box>
        </SearchStackContainer>
    );
}


export default SearchLoading;