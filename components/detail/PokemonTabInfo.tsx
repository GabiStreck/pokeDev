import { Box, Container } from '@mui/material'

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function PokemonTabInfo(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <Container
            disableGutters
            role="tabpanel"
            hidden={value !== index}
            id={`pokemon-tabpanel-${index}`}
            aria-labelledby={`pokemon-tab-${index}`}
            {...other}
        >
            {value === index && (
                children
            )}
        </Container>
    );
}

export default PokemonTabInfo
