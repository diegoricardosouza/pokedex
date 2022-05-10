import PokemonCard from 'components/PokemonCard'
import { useCallback, useEffect, useState } from 'react'

type PokemonProps = {
  name: string
}

const Home = () => {
  const [pokemons, setPokemons] = useState<PokemonProps[]>([])

  const pokemonListDefault = useCallback(async () => {
    const response = await fetch(
      'https://pokeapi.co/api/v2/pokemon?limit=10&offset=0'
    )
    const body = await response.json()

    setPokemons(body.results)
  }, [])

  useEffect(() => {
    pokemonListDefault()
  }, [pokemonListDefault])

  return (
    <>
      {pokemons.map((pokemon) => (
        <PokemonCard key={pokemon.name} title={pokemon.name} />
      ))}
    </>
  )
}

export default Home
