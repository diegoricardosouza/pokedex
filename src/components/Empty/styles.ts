import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Title = styled.p`
  ${({ theme }) => css`
    margin: 0;
    color: ${theme.colors.primary};
    font-size: 2.5rem;
    font-weight: ${theme.font.bold};
    text-align: center;
  `}
`
