import { FC } from 'react'
import { Ability } from '@/types/pokemon'
import { Typography, List, ListItem } from '@mui/material'
import { normalize, capitalize } from '@/utils/format'

interface AbilityProps {
    abilities: Ability[];
}

const AbilitiesInfo: FC<AbilityProps> = ({ abilities }) => {
    return (
        <List>
            {abilities.map(({ ability, slot }: Ability) =>
                <ListItem key={`${ability.name.trim()}-${slot}`}>
                    <Typography>{normalize(capitalize(ability.name))}</Typography>
                </ListItem>
            )}
        </List>
    )
}

export default AbilitiesInfo
