import styled, { css } from 'styled-components'
import { Colors } from 'types/colors'

type BackgroundColorProps = {
  cor: Colors
}

export const Wrapper = styled.article<BackgroundColorProps>`
  ${({ theme, cor }) => css`
    background: ${theme.colors[cor]};
    max-width: 35rem;
    overflow: hidden;
    position: relative;
    border-radius: 2rem;
    padding: 1.5rem 1.5rem 0 1.5rem;

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
    margin: 0 0 -2rem 0;
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
    opacity: 0.2;
    letter-spacing: -0.1rem;
  `}
`

export const WrapperContent = styled.div`
  display: flex;
`

export const WrapperTypes = styled.div`
  padding-top: 3rem;
  width: 13rem;
`

export const WrapperImage = styled.div`
  position: relative;
  z-index: 2;
  width: 60%;
  flex: 0 0 60%;
`
