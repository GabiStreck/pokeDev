import { FC } from 'react'
import { Ability } from '@/types/pokemon'
import { Typography, List, ListItem } from '@mui/material'
import { normalize, capitalize } from '@/utils/format'

interface GameProps {
    games: Ability[];
}

const GamesInfo: FC<GameProps> = ({ games }) => {
    return (
        <List>
            {games.map(({ ability }: Ability) =>
                <ListItem>
                    <Typography>
                        {normalize(capitalize(ability.name))}
                    </Typography>
                </ListItem>
            )}
        </List>
    )
}

export default GamesInfo
