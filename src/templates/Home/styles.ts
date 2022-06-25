import styled, { css } from 'styled-components'

export type WrapperPokemonProps = {
  noResult: boolean
}

export const Wrapper = styled.main``

export const WrapperPokemon = styled.div<WrapperPokemonProps>`
  ${({ noResult }) => css`
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 2rem;

    @media (min-width: 600px) {
      ${noResult
        ? 'grid-template-columns: 1fr'
        : 'grid-template-columns: repeat(2, 1fr)'};
    }

    @media (min-width: 992px) {
      ${noResult
        ? 'grid-template-columns: 1fr'
        : 'grid-template-columns: repeat(3, 1fr)'};
    }
  `}
`

export const WrapperWishlist = styled.div`
  ${({ theme }) => css`
    margin-top: 5rem;

    a {
      display: block;
      margin: 0;
      color: ${theme.colors.primary};
      font-weight: ${theme.font.bold};
      font-size: 2rem;
      text-align: center;
    }
  `}
`

export const WrapperTitle = styled.div`
  margin-top: 3rem;
  margin-bottom: 3rem;
  display: flex;
  justify-content: space-between;

  @media (max-width: 767px) {
    flex-direction: column;
  }
`

export const Title = styled.h1`
  ${({ theme }) => css`
    margin: 0;
    color: ${theme.colors.primary};
    font-weight: ${theme.font.bold};
  `}
`

export const InputSearchContainer = styled.div`
  ${({ theme }) => css`
    position: relative;

    input {
      border: 0;
      border-radius: 10rem;
      height: 4rem;
      background: ${theme.colors.ligthGray};
      padding: 0 2rem 0 4rem;
      width: 60rem;
      color: ${theme.colors.gray};
      outline: none;
      border: 0.2rem solid ${theme.colors.ligthGray};
      transition: border 0.2s ease-in;
      font-size: 1.6rem;

      &::placeholder {
        color: ${theme.colors.gray};
      }

      &:focus {
        border-color: ${theme.colors.water};
      }
    }

    svg {
      position: absolute;
      left: 1rem;
      top: 50%;
      transform: translateY(-50%);
      width: 2.4rem;
      color: ${theme.colors.gray100};
    }

    @media (max-width: 767px) {
      margin-top: 1rem;

      input {
        width: 100%;
      }
    }
  `}
`

export const WrapperLoad = styled.div`
  margin: 2rem 0 3rem 0;
`
