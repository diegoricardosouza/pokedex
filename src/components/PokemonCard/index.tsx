import Pokebola from 'components/Pokebola'
import Type, { TypeProps } from 'components/Type'

import * as S from './styles'

export type PokemonCardProps = {
  title: string
  number: number
  img: string
  types: TypeProps[]
}

const PokemonCard = () => {
  return (
    <S.Wrapper>
      <S.Number>
        <span>#001</span>
      </S.Number>

      <S.WrapperTitle>
        <S.Title>Bulbasaur</S.Title>
      </S.WrapperTitle>

      <S.WrapperContent>
        <S.WrapperTypes>
          <Type title="Grass" />
          <Type title="Poison" />
        </S.WrapperTypes>

        <S.WrapperImage></S.WrapperImage>
      </S.WrapperContent>

      <Pokebola />
    </S.Wrapper>
  )
}

export default PokemonCard
