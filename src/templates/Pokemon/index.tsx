import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

import HeaderDetails from 'components/HeaderDetails'
import TabDetails from 'components/TabDetails'
import { Type as TypeProps } from 'types/types'
import { AddZeros } from 'utils/utils'

export type AbilitiesProps = {
  ability: {
    name: string
  }
}

export type StatsProps = {
  hp: number
  attack: number
  defense: number
  speed: number
  specialAttack: number
  specialDefense: number
}

type PokemonProps = {
  id: number
  number: string
  image: string
  specie: string
  height: string
  weight: string
  stats: StatsProps
  abilities: AbilitiesProps[]
  type: TypeProps[]
}

const Pokemon = () => {
  const { query } = useRouter()
  const name = query.slug as string

  const [pokemon, setPokemon] = useState({} as PokemonProps)
  const [bgColor, setBgColor] = useState()

  useEffect(() => {
    const pokemonData = async () => {
      try {
        if (name) {
          const response = await fetch(
            `https://pokeapi.co/api/v2/pokemon/${name}`
          )

          const {
            id,
            weight,
            height,
            stats,
            sprites,
            abilities,
            types,
            species
          } = await response.json()

          setBgColor(types[0].type.name)

          setPokemon({
            id,
            number: `#${AddZeros(id)}`,
            image:
              sprites.other['official-artwork'].front_default ||
              sprites.front_default,
            weight: `${weight / 10} kg`,
            specie: species.name,
            height: `${height / 10} m`,
            stats: {
              hp: stats[0].base_stat,
              attack: stats[1].base_stat,
              defense: stats[2].base_stat,
              specialAttack: stats[3].base_stat,
              specialDefense: stats[4].base_stat,
              speed: stats[5].base_stat
            },
            abilities,
            type: types
          })
        }
      } catch (error) {
        console.log(error)
      }
    }

    pokemonData()
  }, [name])

  return (
    <>
      <HeaderDetails
        image={pokemon.image}
        number={pokemon.number}
        title={name}
        color={bgColor}
        types={pokemon.type}
      />

      <TabDetails
        name={name}
        specie={pokemon.specie}
        height={pokemon.height}
        weight={pokemon.weight}
        abilities={pokemon.abilities}
        stats={pokemon.stats}
      />
    </>
  )
}

export default Pokemon
