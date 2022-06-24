import styled, { css } from 'styled-components'

const ContainerInterna = styled.div`
  ${({ theme }) => css`
    width: 100%;
    max-width: ${theme.grid.containerInterna};
    margin: 0 auto;
    padding: 0 1.5rem;
    position: relative;
    z-index: 2;
  `}
`

export default ContainerInterna
