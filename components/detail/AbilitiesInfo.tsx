import { FC } from 'react'
import { Ability } from '@/types/pokemon'
import { normalize, capitalize } from '@/utils/format'
import { Box, Container, List, ListItem, ListItemIcon, ListItemText } from '@mui/material'
import StarIcon from '@mui/icons-material/Star';

interface AbilityProps {
    abilities: Ability[];
}

const AbilitiesInfo: FC<AbilityProps> = ({ abilities }) => {
    return (
        <Container disableGutters>
            <Box paddingY={2}>
                <List>
                    {abilities.map(({ ability, slot }: Ability) =>
                        <ListItem key={`${ability.name.trim()}-${slot}`}>
                            <ListItemIcon>
                                <StarIcon />
                            </ListItemIcon>
                            <ListItemText primary={normalize(capitalize(ability.name))} />
                        </ListItem>
                    )}
                </List>
            </Box>
        </Container>

    )
}

export default AbilitiesInfo
