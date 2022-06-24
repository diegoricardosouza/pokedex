import { FirstLetterUppercase } from 'utils/utils'
import * as S from './styles'

export type TypeProps = {
  title: string
}

const Type = ({ title }: TypeProps) => {
  return (
    <S.Wrapper>
      <S.Item>{FirstLetterUppercase(title)}</S.Item>
    </S.Wrapper>
  )
}

export default Type
