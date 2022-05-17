import * as S from './styles'

export type LoadMoreProps = {
  text?: string
}

const LoadMore = ({ text }: LoadMoreProps) => {
  return (
    <S.Wrapper>
      <S.Pokeball>
        <S.Button />
      </S.Pokeball>

      <S.Text>{text}</S.Text>
    </S.Wrapper>
  )
}

export default LoadMore
