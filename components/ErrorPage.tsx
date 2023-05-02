import { FC } from 'react'
import { Box, Typography } from '@mui/material'
import Layout from './Layout'
import { PokemonImage } from './pokemon/core'

interface Props {
    toggleDarkMode: () => void
}

const ErrorPage: FC<Props> = ({ toggleDarkMode }) => {
    return (
        <Layout toggleDarkMode={toggleDarkMode}>

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
                    src='/images/error-page.png'
                    width={200}
                    height={265}
                    alt='Error Page'
                    loading="lazy"
                />
                <Typography variant='h3' textAlign='center'>Oops!</Typography>
                <Typography textAlign='center'>
                    {"We're sorry, but this Pokemon is currently unavailable. Please go back and choose another Pokemon."}
                </Typography>
            </Box>
        </Layout>
    )
}

export default ErrorPage 
