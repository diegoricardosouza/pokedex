import { useEffect, useState } from 'react'
import Image from 'next/image'

import Pokebola from 'components/Pokebola'
import Type from 'components/Type'
import { Colors } from 'types/colors'
import { PokemonTypeColor } from 'utils/colors'
import { Type as TypeProps } from 'types/types'
import { AddZeros, FirstLetterUppercase } from 'utils/utils'

import * as S from './styles'

export type PokemonCardProps = {
  title: string
}

type PokemonProps = {
  id: number
  types: TypeProps[]
  image: string
}

const PokemonCard = ({ title }: PokemonCardProps) => {
  const [pokemon, setPokemon] = useState({} as PokemonProps)
  const [bgColor, setBgColor] = useState({} as Colors)

  useEffect(() => {
    const pokemonData = async () => {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${title.toLowerCase()}`
      )
      const { id, types, sprites } = await response.json()

      setBgColor(types[0].type.name)

      setPokemon({
        id,
        types,
        image: sprites.other['official-artwork'].front_default
      })
    }

    pokemonData()
  }, [title])

  return (
    <S.Wrapper cor={bgColor}>
      <S.Number>
        <span>#{AddZeros(pokemon.id)}</span>
      </S.Number>

      <S.WrapperTitle>
        <S.Title>{FirstLetterUppercase(title)}</S.Title>
      </S.WrapperTitle>

      <S.WrapperContent>
        <S.WrapperTypes>
          {pokemon.types &&
            pokemon.types.map((type, index) => (
              <Type key={index} title={type.type.name} />
            ))}
        </S.WrapperTypes>

        <S.WrapperImage>
          {pokemon.image && (
            <Image
              src={pokemon.image}
              alt={pokemon.image}
              width={300}
              height={300}
              loading="lazy"
              objectFit="cover"
            />
          )}
        </S.WrapperImage>
      </S.WrapperContent>

      <Pokebola />
    </S.Wrapper>
  )
}

export default PokemonCard
