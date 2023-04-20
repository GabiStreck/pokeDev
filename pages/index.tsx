import { FC } from 'react'
import Head from 'next/head'
import { Container } from '@mui/material'
import Layout from '@/components/Layout'
import PokemonList from '@/components/pokemon/PokemonList'

interface Props {
  toggleDarkMode: () => void
}

const Home: FC<Props> = ({ toggleDarkMode }) => {
  return (
    <>
      <Head>
        <title>PokeDev</title>
        <meta name='description' content='Created by Gabriel Streck' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Layout toggleDarkMode={toggleDarkMode}>
        <Container>
          <PokemonList />
        </Container>
      </Layout>
    </>
  )
}

export default Home 
