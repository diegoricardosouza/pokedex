import ContainerInterna from 'components/ContainerInterna'
import Pokebola from 'components/Pokebola'
import Type from 'components/Type'
import Link from 'next/link'
import { Type as TypeProps } from 'types/types'
import { FirstLetterUppercase } from 'utils/utils'
import * as S from './styles'
import { useWishlist } from 'hooks/use-wishlist'

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
  const { isInWishlist, addToWishlist, removeFromWishlist } = useWishlist()

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

          <S.WishlistButton
            onClick={() =>
              isInWishlist(title)
                ? removeFromWishlist(title)
                : addToWishlist(title)
            }
          >
            {isInWishlist(title) ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="wishlist wishlist-active"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
                className="wishlist"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            )}
          </S.WishlistButton>
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
