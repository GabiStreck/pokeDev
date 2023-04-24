import { FC } from 'react'
import { Container } from '@mui/material'
import Layout from '@/components/Layout'
import PokemonList from '@/components/pokemon/PokemonList'
import Search from '@/components/search/Search'

interface Props {
  toggleDarkMode: () => void
}

const Home: FC<Props> = ({ toggleDarkMode }) => {
  return (
    <Layout toggleDarkMode={toggleDarkMode}>
      <Container>
        <Search />
        <PokemonList />
      </Container>
    </Layout>
  )
}

export default Home 
