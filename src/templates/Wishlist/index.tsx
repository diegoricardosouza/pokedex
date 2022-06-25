import { useEffect, useState } from 'react'
import Container from 'components/Container'
import Empty from 'components/Empty'
import Loader from 'components/Loader'
import { PokemonProps } from 'templates/Home'
import PokemonCard from 'components/PokemonCard'
import * as S from './styles'
import { useWishlist } from 'hooks/use-wishlist'
import Link from 'next/link'

const Wishlist = () => {
  const NUMBER_MAX_POKEMONS_API = 10000

  const [pokemons, setPokemons] = useState<PokemonProps[]>([])
  const [loading, setLoading] = useState(true)

  const { items } = useWishlist()

  useEffect(() => {
    const pokemonListDefault = async () => {
      try {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon?limit=${NUMBER_MAX_POKEMONS_API}`
        )
        const body = await response.json()

        const pokemonSearch = body.results.filter(
          ({ name }: PokemonProps) => items.indexOf(name) > -1
        )

        setPokemons(pokemonSearch)
      } catch (error) {
        console.log(error)
      } finally {
        setLoading(false)
      }
    }

    pokemonListDefault()
  }, [items])

  return (
    <>
      {loading ? (
        <Loader isLoading={loading} />
      ) : (
        <Container>
          <S.Wrapper>
            <S.WrapperTitle>
              <Link href="/">
                <a>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="back-icon"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M10 19l-7-7m0 0l7-7m-7 7h18"
                    />
                  </svg>
                  Ver Todos os Pokémons
                </a>
              </Link>
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
      )}
    </>
  )
}

export default Wishlist
