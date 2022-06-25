import styled, { css } from 'styled-components'
import { WrapperPokemonProps } from 'templates/Home/styles'

export const Wrapper = styled.main`
  padding-bottom: 5rem;
`

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

export const WrapperTitle = styled.div`
  ${({ theme }) => css`
    margin-top: 5rem;
    margin-bottom: 3rem;

    a {
      display: flex;
      margin: 0;
      color: ${theme.colors.primary};
      font-weight: ${theme.font.bold};
      font-size: 2rem;
      text-align: center;
      align-items: center;
      justify-content: center;

      svg {
        width: 1.9rem;
        stroke: ${theme.colors.primary};
        margin-right: 1rem;
      }
    }
  `}
`
