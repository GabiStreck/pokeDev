import { FC } from 'react'
import { Stat } from '@/types/pokemon'
import { normalize, capitalize } from '@/utils/format'
import {
    Container,
    List,
    ListItem,
    Typography,
} from '@mui/material'
import LinearProgressWithLabel from './LinearProgressWithLabel';
import { ListItemStyle, ListStyle } from './core';


interface StatsProps {
    stats: Stat[];
}

const StatsInfo: FC<StatsProps> = ({ stats }) => {
    return (
        <ListStyle>
            {stats.map(({ stat, base_stat }: Stat) =>
                <ListItemStyle
                    key={`${stat.url}`}
                >
                    <Container>
                        <Typography fontWeight={500}>
                            {normalize(capitalize(stat.name))}
                        </Typography>
                        <LinearProgressWithLabel
                            color={base_stat <= 40 ? 'error' : base_stat >= 70 ? 'success' : 'info'}
                            value={base_stat} />
                    </Container>
                </ListItemStyle>
            )}
        </ListStyle>
    )
}

export default StatsInfo