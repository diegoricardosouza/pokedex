import styled, { css } from 'styled-components'

export const Wrapper = styled.main``

export const WrapperPokemon = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 2rem;

  @media (min-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 992px) {
    grid-template-columns: repeat(3, 1fr);
  }
`

export const WrapperTitle = styled.div`
  margin-top: 5rem;
  margin-bottom: 3rem;
`

export const Title = styled.h1`
  ${({ theme }) => css`
    margin: 0;
    color: ${theme.colors.primary};
    font-weight: ${theme.font.bold};
  `}
`
