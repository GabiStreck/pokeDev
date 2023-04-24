import { PER_PAGE } from '@/constants'
import { Grid, Skeleton } from '@mui/material'

export const PokemonListLoading = () => {
    return (
        <>
            {Array.from({ length: PER_PAGE }, (_, index) =>
                <Grid item xs={12} sm={6} md={3} key={`product-loading-${index}`}>
                    <Skeleton
                        variant='rounded'
                        animation='wave'
                        width='100%'
                        height={300}
                    />
                </Grid>
            )}
        </>
    )
}
