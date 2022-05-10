import styled, { css } from 'styled-components'

export const Wrapper = styled.article`
  ${({ theme }) => css`
    background: ${theme.colors.grass};
    max-width: 35rem;
    overflow: hidden;
    position: relative;
    min-height: 35rem;
    border-radius: 2rem;
    padding: 1.5rem;

    svg {
      width: 20rem;
      height: 20rem;
      position: absolute;
      right: -1rem;
      bottom: -1rem;

      path {
        fill: #fff;
        opacity: 0.25;
      }
    }
  `}
`

export const WrapperTitle = styled.header``

export const Title = styled.h2`
  ${({ theme }) => css`
    margin: 0 0 1rem 0;
    color: ${theme.colors.white};
    font-size: 2.4rem;
    font-weight: ${theme.font.bold};
  `}
`

export const Number = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: flex-end;
    font-size: 2.3rem;
    font-weight: ${theme.font.black};
    color: ${theme.colors.black};
    opacity: 0.15;
  `}
`

export const WrapperContent = styled.div``

export const WrapperTypes = styled.div`
  display: inline-flex;
  flex-direction: column;
`

export const WrapperImage = styled.div``
