import Pokebola from 'components/Pokebola'
import Type from 'components/Type'
import { FirstLetterUppercase } from 'utils/utils'

import * as S from './styles'

export type PokemonCardProps = {
  title: string
  number?: number
  img?: string
}

const PokemonCard = ({ title, number, img }: PokemonCardProps) => {
  return (
    <S.Wrapper>
      <S.Number>
        <span>#001 {number}</span>
      </S.Number>

      <S.WrapperTitle>
        <S.Title>{FirstLetterUppercase(title)}</S.Title>
      </S.WrapperTitle>

      <S.WrapperContent>
        <S.WrapperTypes>
          <Type title="Grass" />
          <Type title="Poison" />
        </S.WrapperTypes>

        <S.WrapperImage>{img}</S.WrapperImage>
      </S.WrapperContent>

      <Pokebola />
    </S.Wrapper>
  )
}

export default PokemonCard
