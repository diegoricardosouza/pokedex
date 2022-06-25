import styled, { css } from 'styled-components'

export const Wrapper = styled.button`
  ${({ theme }) => css`
    background: transparent;
    border: 0;
    cursor: pointer;

    svg {
      width: 2.5rem;
      stroke: ${theme.colors.white};
    }

    .wishlist-active {
      fill: ${theme.colors.white};
    }
  `}
`
