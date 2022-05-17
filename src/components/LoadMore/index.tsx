import * as S from './styles'

export type LoadMoreProps = {
  text?: string
  onClick: () => void
}

const LoadMore = ({ text, onClick }: LoadMoreProps) => {
  return (
    <S.Wrapper onClick={onClick}>
      <S.Pokeball>
        <S.Button />
      </S.Pokeball>

      <S.Text>{text}</S.Text>
    </S.Wrapper>
  )
}

export default LoadMore
