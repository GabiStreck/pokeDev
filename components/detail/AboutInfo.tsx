import { FC, ReactNode } from 'react'
import { Pokemon } from '@/types/pokemon'
import { Typography, Grid, Divider, ListItem, List, Skeleton } from '@mui/material'
import { normalize, capitalize, convertLibsToKgs } from '@/utils/format'
import useGenres from '@/hooks/useGenres';

interface AbilityProps {
    pokemon: Pokemon;
    genre: string
}

const AboutInfo: FC<AbilityProps> = ({ pokemon, genre }) => {
    const { loading, genres } = useGenres(genre)
    return (
        <Grid
            display='grid'
            gap={1}
            paddingY={5}
            alignItems='center'
            justifyContent='initial'
            rowGap={2}
            maxWidth={320}
            margin='auto'
        >
            <GridItemInfo label='Species:'>
                <Typography variant='button' fontWeight={600}>
                    {normalize(capitalize(pokemon.species.name))}
                </Typography>
            </GridItemInfo>

            <GridItemInfo label='Height:'>
                <Typography variant='button' fontWeight={600}>
                    {`${pokemon.height}"`}
                </Typography>
            </GridItemInfo>

            <GridItemInfo label='Weight:'>
                <Typography variant='button' fontWeight={600}>
                    {`${pokemon.weight}lbs - ${convertLibsToKgs(pokemon.weight).toFixed(2)}kg`}
                </Typography>
            </GridItemInfo>
            {loading ? <GenresLoading /> : null}
            {genres ?
                <>
                    <Divider />
                    <GridItemInfo label='Genres:'>
                        <Typography variant='button' fontWeight={600}>
                            {normalize(capitalize(genres.name))}
                        </Typography>
                    </GridItemInfo>

                    <GridItemInfo label='Required for evolution:'>
                        <List disablePadding>
                            {genres.required_for_evolution.map(item =>
                                <ListItem key={item.url} disableGutters>
                                    <Typography
                                        variant='button'
                                        fontWeight={600}
                                        textAlign='right'
                                    >
                                        {normalize(capitalize(item.name))}
                                    </Typography>
                                </ListItem>
                            )}
                        </List>
                    </GridItemInfo>
                </>
                : null}
        </Grid>
    )
}

const GridItemInfo = ({ label, children }: { label: string, children: ReactNode }) => (
    <Grid display='flex' justifyContent='space-between'>
        <Typography >
            {label}
        </Typography>
        {children}
    </Grid>
)

const GenresLoading = () => (
    <Grid display='flex' justifyContent='space-between'>
        <Skeleton variant='rounded' width={140} />
        <List disablePadding>
            {Array.from({ length: 4 }).map((_, index) =>
                <ListItem key={`loading-${index}-genre`} disableGutters>
                    <Skeleton variant='rounded' width={120} />
                </ListItem>
            )}
        </List>
    </Grid>
)

export default AboutInfo
