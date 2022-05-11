import Spinner from 'components/Spinner'
import * as S from './styles'

export type LoaderProps = {
  isLoading: boolean
}

const Loader = ({ isLoading }: LoaderProps) => {
  if (!isLoading) {
    return null
  }

  return (
    <S.Wrapper>
      <Spinner />

      <S.Text>Loading...</S.Text>
    </S.Wrapper>
  )
}

export default Loader
