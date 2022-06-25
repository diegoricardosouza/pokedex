import Link from 'next/link'
import ContainerInterna from 'components/ContainerInterna'
import WishlistButton from 'components/WishlistButton'
import Pokebola from 'components/Pokebola'
import Type from 'components/Type'

import { Type as TypeProps } from 'types/types'
import { FirstLetterUppercase } from 'utils/utils'
import * as S from './styles'

type HeaderDetailsProps = {
  title: string
  image: string
  number: string
  color?: string
  types: TypeProps[]
}

const HeaderDetails = ({
  title,
  image,
  number,
  color,
  types
}: HeaderDetailsProps) => {
  return (
    <S.HeaderWrapper className={color}>
      <ContainerInterna>
        <S.Back>
          <Link href="/">
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
                className="back-icon"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
            </a>
          </Link>

          <WishlistButton title={title} />
        </S.Back>

        <S.WrapperContainer>
          <S.WrapperContainerInfos>
            <S.Image src={image} />

            <S.HeaderInfos>
              <S.Number>{number}</S.Number>

              <S.WrapperTitle>
                <S.Title>{FirstLetterUppercase(title)}</S.Title>
                <S.WrapperTypes>
                  {types &&
                    types.map((type, index) => (
                      <Type key={index} title={type.type.name} />
                    ))}
                </S.WrapperTypes>
              </S.WrapperTitle>
            </S.HeaderInfos>
          </S.WrapperContainerInfos>

          <S.TopAbas />
        </S.WrapperContainer>
      </ContainerInterna>

      <Pokebola />
    </S.HeaderWrapper>
  )
}

export default HeaderDetails
