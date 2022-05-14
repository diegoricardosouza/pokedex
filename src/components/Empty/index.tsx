import * as S from './styles'

export type EmptyProps = {
  title: string
}

const Empty = ({ title }: EmptyProps) => {
  return (
    <S.Wrapper>
      <img src="/img/sad-pikachu.png" alt="No results" />
      <S.Title>{title}</S.Title>
    </S.Wrapper>
  )
}

export default Empty
