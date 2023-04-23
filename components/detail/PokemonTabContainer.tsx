import { FC, useState, SyntheticEvent, ReactNode } from 'react'
import { Pokemon } from '@/types/pokemon'
import StatsInfo from '@/components/detail/StatsInfo'
import AbilitiesInfo from '@/components/detail/AbilitiesInfo'
import PokemonTabInfo from '@/components/detail/PokemonTabInfo'
import PokemonTab from '@/components/detail/PokemonTab'
import GamesInfo from '@/components/detail/GamesInfo'
import { Theme, useMediaQuery } from '@mui/material'
import AboutInfo from './AboutInfo'


interface Props {
    pokemon: Pokemon
}

const PokemonTabContainer: FC<Props> = ({ pokemon }) => {
    const [value, setValue] = useState<number>(0);
    const isMobile = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'));

    const handleChange = (event: SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    const items: { [key: string]: ReactNode } = {
        'About': <AboutInfo pokemon={pokemon} />,
        'Abilities': <AbilitiesInfo abilities={pokemon.abilities} />,
        'Stats': <StatsInfo stats={pokemon.stats} />,
        'Games': <GamesInfo games={pokemon.abilities} />
    }

    const getItemLabels = (): string[] => {
        const labels = Object.keys(items)
        return isMobile ? labels : labels.filter(item => item !== 'About')
    }

    return (
        <PokemonTab
            value={value}
            onChange={handleChange}
            ariaLabel='Detail Pokemon'
            tabs={getItemLabels()}
        >
            {getItemLabels().map((label, index) => (
                <PokemonTabInfo value={value} index={index}>
                    {items[label]}
                </PokemonTabInfo>
            )
            )}
        </PokemonTab>
    )
}


export default PokemonTabContainer
