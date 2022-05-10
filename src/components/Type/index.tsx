import * as S from './styles'

export type TypeProps = {
  title: string
}

const Type = ({ title = 'Grass' }: TypeProps) => {
  return (
    <S.Wrapper>
      <S.Item>{title}</S.Item>
    </S.Wrapper>
  )
}

export default Type
