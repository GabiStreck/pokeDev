import { FC, useState, SyntheticEvent, ReactNode } from 'react'
import { Pokemon } from '@/types/pokemon'
import { GenresResponse } from '@/types/genres'
import StatsInfo from '@/components/detail/StatsInfo'
import AbilitiesInfo from '@/components/detail/AbilitiesInfo'
import PokemonTabInfo from '@/components/detail/PokemonTabInfo'
import PokemonTab from '@/components/detail/PokemonTab'
import AboutInfo from './AboutInfo'


interface Props {
    pokemon: Pokemon;
    genres: GenresResponse
}

const PokemonTabContainer: FC<Props> = ({ pokemon, genres }) => {
    const [value, setValue] = useState<number>(0);

    const handleChange = (event: SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    const items: { [key: string]: ReactNode } = {
        "About": <AboutInfo pokemon={pokemon} genres={genres} />,
        "Abilities": <AbilitiesInfo abilities={pokemon.abilities} />,
        "Stats": <StatsInfo stats={pokemon.stats} />
    }

    const getItemLabels = (): string[] => {
        return Object.keys(items)
    }

    return (
        <PokemonTab
            value={value}
            onChange={handleChange}
            ariaLabel='Detail Pokemon'
            tabs={getItemLabels()}
        >
            {getItemLabels().map((label, index) => (
                <PokemonTabInfo key={`${value}-key`} value={value} index={index}>
                    {items[label]}
                </PokemonTabInfo>
            )
            )}
        </PokemonTab>
    )
}


export default PokemonTabContainer
