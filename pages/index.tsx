import { FC, ReactNode, Suspense } from 'react'
import dynamic from 'next/dynamic'
import { Container, Grid } from '@mui/material'
import Layout from '@/components/Layout'
import useFilterStore from '@/hooks/useFilterStore'
import { PokemonListLoading } from '@/components/pokemon/PokemonListLoading';
import SearchLoading from '@/components/search/SearchLoading'

interface Props {
  toggleDarkMode: () => void
}

const PokemonListFilters = dynamic(() => import('@/components/pokemon/PokemonListFilter'), {
  loading: () => <PokemonListLoading />,
  ssr: false,
});

const PokemonList = dynamic(() => import('@/components/pokemon/PokemonList'), {
  ssr: false,
});

const Search = dynamic(() => import('@/components/search/Search'), {
  ssr: false,
});

const Home: FC<Props> = ({ toggleDarkMode }) => {
  const { filters } = useFilterStore()
  return (
    <Layout toggleDarkMode={toggleDarkMode}>
      <Container>
        <Suspense fallback={<SearchLoading />}>
          <Search />
        </Suspense>
        {filters.length > 0 ?
          <LoadingContein>
            <PokemonListFilters />
          </LoadingContein>
          :
          <LoadingContein>
            <PokemonList />
          </LoadingContein>
        }
      </Container>
    </Layout>
  )
}

const LoadingContein: FC<{ children: ReactNode }> = ({ children }) => (
  <Suspense
    fallback={
      <Grid container alignContent='stretch' spacing={2}>
        <PokemonListLoading />
      </Grid>
    }
  >
    {children}
  </Suspense>
)

export default Home 
