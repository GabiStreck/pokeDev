import { FC } from 'react'
import {
    Typography,
    Box,
    LinearProgress,
    LinearProgressProps
} from '@mui/material'

const LinearProgressWithLabel: FC<LinearProgressProps & { value: number }> = (props) => {
    return (
        <Box display='flex' justifyContent='space-between' alignItems='center'>
            <Box width='100%' margin={1}>
                <LinearProgress variant="determinate" {...props} />
            </Box>
            <Box maxWidth={60} minWidth={35} >
                <Typography variant='body2' color='text.secondary'>
                    {`${Math.round(props.value,)}%`}
                </Typography>
            </Box>
        </Box>
    );
}

export default LinearProgressWithLabel