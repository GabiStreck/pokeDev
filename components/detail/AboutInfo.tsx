import { FC, ReactNode } from 'react'
import { Pokemon } from '@/types/pokemon'
import { Typography, Grid, Divider, ListItem, List, Container } from '@mui/material'
import { normalize, capitalize, convertLibsToKgs } from '@/utils/format'
import { GenresResponse } from '@/types/genres';

interface AbilityProps {
    pokemon: Pokemon;
    genres: GenresResponse
}

const AboutInfo: FC<AbilityProps> = ({ pokemon, genres }) => {
    console.log(genres);

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
        </Grid>
    )
}

const GridItemInfo = ({ label, children }: { label: string, children: ReactNode }) => (
    <Grid xs={12} display='flex' justifyContent='space-between'>
        <Typography variant='subtitle1'>
            {label}
        </Typography>
        {children}
    </Grid>
)

export default AboutInfo
