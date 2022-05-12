import Container from 'components/Container'
import Loader from 'components/Loader'
import PokemonCard from 'components/PokemonCard'
import { useCallback, useEffect, useState } from 'react'

import * as S from './styles'

type PokemonProps = {
  name: string
}

const Home = () => {
  const [pokemons, setPokemons] = useState<PokemonProps[]>([])
  const [loading, setLoading] = useState(true)

  const pokemonListDefault = useCallback(async () => {
    const response = await fetch(
      'https://pokeapi.co/api/v2/pokemon?limit=30&offset=0'
    )
    const body = await response.json()

    setPokemons(body.results)
    setLoading(false)
  }, [])

  useEffect(() => {
    pokemonListDefault()
  }, [pokemonListDefault])

  return (
    <>
      <Loader isLoading={loading} />

      <Container>
        <S.Wrapper>
          <S.WrapperTitle>
            <S.Title>Pokédex</S.Title>
          </S.WrapperTitle>

          <S.WrapperPokemon>
            {pokemons.length > 0 &&
              pokemons.map((pokemon) => (
                <PokemonCard key={pokemon.name} title={pokemon.name} />
              ))}
          </S.WrapperPokemon>
        </S.Wrapper>
      </Container>
    </>
  )
}

export default Home
