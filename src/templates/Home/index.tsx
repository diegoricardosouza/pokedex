import Container from 'components/Container'
import PokemonCard from 'components/PokemonCard'
import Spinner from 'components/Spinner'
import { useCallback, useEffect, useState } from 'react'

import * as S from './styles'

type PokemonProps = {
  name: string
}

const Home = () => {
  const [pokemons, setPokemons] = useState<PokemonProps[]>([])

  const pokemonListDefault = useCallback(async () => {
    const response = await fetch(
      'https://pokeapi.co/api/v2/pokemon?limit=15&offset=0'
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
        <Spinner />

        <S.WrapperTitle>
          <S.Title>Pokédex</S.Title>
        </S.WrapperTitle>

        <S.WrapperPokemon>
          {pokemons.map((pokemon) => (
            <PokemonCard key={pokemon.name} title={pokemon.name} />
          ))}
        </S.WrapperPokemon>
      </S.Wrapper>
    </Container>
  )
}

export default Home
