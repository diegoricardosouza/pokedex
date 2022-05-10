import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  display: inline-flex;
  border-radius: 10rem;
  align-items: center;
  justify-content: center;
  height: 3rem;
  background: rgba(255, 255, 255, 0.2);
  padding: 0 2.3rem;
  margin: 0.5rem 0;
`

export const Item = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: 1.6rem;
    font-weight: ${theme.font.bold};
  `}
`
