import { Box, Typography } from '@mui/material'
import { PokemonImage } from './core'

const PokemonsFilterEmpty = () => {
    return (
        <Box
            display='grid'
            alignItems='center'
            justifyContent='center'
            margin='auto'
            maxWidth={320}
            gap={2}
            paddingTop={10}
        >
            <PokemonImage
                src='/images/empty-filters.png'
                width={80}
                height={90}
                alt='No Data'
            />
            <Typography textAlign='center'>
                {"Sorry, I think the Pokémon have escaped or do not exist with that search combination. Try searching with other filters!"}
            </Typography>
        </Box>
    )
}

export default PokemonsFilterEmpty 
