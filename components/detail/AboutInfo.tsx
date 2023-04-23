import { FC } from 'react'
import { Pokemon } from '@/types/pokemon'
import { Typography, Grid, ListItem } from '@mui/material'
import { normalize, capitalize } from '@/utils/format'

interface AbilityProps {
    pokemon: Pokemon;
}

const AboutInfo: FC<AbilityProps> = ({ pokemon }) => {
    return (
        <Grid display='grid' gap={1} paddingY={1}>
            <Grid xs={12} display={'flex'} gap={10}>
                <Typography variant='subtitle1' color='#ffffff'>
                    Species
                </Typography>

                <Typography variant='button' fontWeight={600} color='#ffffff'>
                    {normalize(capitalize(pokemon.species.name))}
                </Typography>
            </Grid>

            <Grid xs={12} display={'flex'} gap={10}>
                <Typography variant='subtitle1' color='#ffffff'>
                    Height
                </Typography>

                <Typography variant='button' fontWeight={600} color='#ffffff'>
                    {`${pokemon.height} m`}
                </Typography>
            </Grid>
            <Grid xs={12} display={'flex'} gap={10}>
                <Typography variant='subtitle1' color='#ffffff'>
                    Weight
                </Typography>

                <Typography variant='button' fontWeight={600} color='#ffffff'>
                    {`${pokemon.weight} kg`}
                </Typography>
            </Grid>
        </Grid>
    )
}

export default AboutInfo
