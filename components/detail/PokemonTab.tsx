import { FC, ReactNode, SyntheticEvent } from 'react'
import { Box, Tabs, Tab, useTheme } from '@mui/material'
import { TabItem, TabPaperContainer } from './core';

interface Props {
    tabs: string[];
    value: number;
    children: ReactNode;
    onChange: (event: SyntheticEvent, newValue: number) => void;
    ariaLabel: string;
}

const PokemonTab: FC<Props> = ({ tabs,
    value,
    children,
    onChange,
    ariaLabel }) => {
    const theme = useTheme();
    const getA11yProps = (index: number) => {
        return {
            id: `simple-tab-${index}`,
            'aria-controls': `simple-tabpanel-${index}`,
        };
    }

    return (
        <TabPaperContainer theme={theme} elevation={0}>
            <Box>
                <Tabs
                    variant='fullWidth'
                    value={value}
                    onChange={onChange}
                    aria-label={ariaLabel}
                    textColor='primary'
                    indicatorColor='primary'
                >
                    {tabs.map((tab, index) => (
                        <TabItem
                            aria-hidden='true'
                            label={tab}
                            {...getA11yProps(index)}
                            key={`tab-${tab.trim()}-${index}`}
                            wrapped
                        />
                    ))}
                </Tabs>
            </Box>
            {children}
        </TabPaperContainer>
    )
}

export default PokemonTab
