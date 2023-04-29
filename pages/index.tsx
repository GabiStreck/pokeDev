import { FC, Suspense } from 'react'
import dynamic from 'next/dynamic'
import { Container, Grid } from '@mui/material'
import Layout from '@/components/Layout'
import PokemonList from '@/components/pokemon/PokemonList'
import Search from '@/components/search/Search'
import useFilterStore from '@/hooks/useFilterStore'
import { PokemonListLoading } from '@/components/pokemon/PokemonListLoading';

interface Props {
  toggleDarkMode: () => void
}

const PokemonListFilters = dynamic(() => import('@/components/pokemon/PokemonListFilter'), {
  loading: () => <PokemonListLoading />,
  ssr: true,
});

const Home: FC<Props> = ({ toggleDarkMode }) => {
  const { filters } = useFilterStore()
  return (
    <Layout toggleDarkMode={toggleDarkMode}>
      <Container>
        <Search />
        {filters.length > 0 ?
          <Suspense
            fallback={
              <Grid container alignContent='stretch' spacing={2}>
                <PokemonListLoading />
              </Grid>
            }
          >
            <PokemonListFilters />
          </Suspense>
          :
          <PokemonList />}
      </Container>
    </Layout>
  )
}

export default Home 
