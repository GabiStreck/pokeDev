import { FC } from 'react'
import { Container } from '@mui/material'
import Layout from '@/components/Layout'
import PokemonList from '@/components/pokemon/PokemonList'
import Search from '@/components/search/Search'
import useFilterStore from '@/hooks/useFilterStore'
import PokemonListFilters from '@/components/pokemon/PokemonListFilter'

interface Props {
  toggleDarkMode: () => void
}


const Home: FC<Props> = ({ toggleDarkMode }) => {
  const { filters } = useFilterStore()
  console.log(filters);

  return (
    <Layout toggleDarkMode={toggleDarkMode}>
      <Container>
        <Search />
        {filters.length > 0 ?
          <PokemonListFilters />
          :
          <PokemonList />}
      </Container>
    </Layout>
  )
}

export default Home 
