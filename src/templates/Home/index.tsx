import { FormEvent, useCallback, useEffect, useState } from 'react'
import { Search } from '@styled-icons/material-outlined'

import Container from 'components/Container'
import Loader from 'components/Loader'
import PokemonCard from 'components/PokemonCard'
import Empty from 'components/Empty'

import * as S from './styles'

type PokemonProps = {
  name: string
}

const Home = () => {
  const NUMBER_POKEMONS = 15
  const NUMBER_MAX_POKEMONS_API = 10000

  const [pokemons, setPokemons] = useState<PokemonProps[]>([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')

  const pokemonListDefault = useCallback(async () => {
    try {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon?limit=${NUMBER_POKEMONS}&offset=0`
      )
      const body = await response.json()

      setPokemons(body.results)
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }, [])

  const handleSearchPokemons = useCallback(async () => {
    try {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon?limit=${NUMBER_MAX_POKEMONS_API}`
      )
      const body = await response.json()

      setSearchTerm(searchTerm.toLowerCase())

      const pokemonSearch = body.results.filter(({ name }: PokemonProps) =>
        name.includes(searchTerm)
      )

      setPokemons(pokemonSearch)
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }, [searchTerm])

  useEffect(() => {
    if (searchTerm.length >= 2) handleSearchPokemons()
    else pokemonListDefault()
  }, [pokemonListDefault, searchTerm, handleSearchPokemons])

  const handleChangeSearchTerm = (event: FormEvent) => {
    const target = event.target as HTMLInputElement

    setSearchTerm(target.value)
  }

  return (
    <>
      <Loader isLoading={loading} />

      <Container>
        <S.Wrapper>
          <S.WrapperTitle>
            <S.Title>Pokédex</S.Title>

            <S.InputSearchContainer>
              <input
                type="text"
                placeholder="Qual Pokémon você está procurando?"
                onChange={handleChangeSearchTerm}
              />

              <Search />
            </S.InputSearchContainer>
          </S.WrapperTitle>

          <S.WrapperPokemon noResult={pokemons.length <= 0}>
            {pokemons.length > 0 ? (
              pokemons.map((pokemon) => (
                <PokemonCard key={pokemon.name} title={pokemon.name} />
              ))
            ) : (
              <Empty title="Oppsss, Nenhum resultado encontrado!" />
            )}
          </S.WrapperPokemon>
        </S.Wrapper>
      </Container>
    </>
  )
}

export default Home
