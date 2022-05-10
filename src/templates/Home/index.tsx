import Container from 'components/Container'
import PokemonCard from 'components/PokemonCard'
import { useCallback, useEffect, useState } from 'react'

import * as S from './styles'

type PokemonProps = {
  name: string
}

const Home = () => {
  const [pokemons, setPokemons] = useState<PokemonProps[]>([])

  const pokemonListDefault = useCallback(async () => {
    const response = await fetch(
      'https://pokeapi.co/api/v2/pokemon?limit=120&offset=30'
    )
    const body = await response.json()

    setPokemons(body.results)
  }, [])

  useEffect(() => {
    pokemonListDefault()
  }, [pokemonListDefault])

  return (
    <Container>
      <S.Wrapper>
        {pokemons.map((pokemon) => (
          <PokemonCard key={pokemon.name} title={pokemon.name} />
        ))}
      </S.Wrapper>
    </Container>
  )
}

export default Home
