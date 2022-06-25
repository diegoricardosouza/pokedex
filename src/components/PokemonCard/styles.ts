import styled, { css, DefaultTheme } from 'styled-components'
import { Text, Wrapper as WLoader } from 'components/Loader/styles'
import { WrapperPokeball } from 'components/Spinner/styles'

export type BackgroundColorProps = {
  cor?:
    | 'normal'
    | 'fighting'
    | 'flying'
    | 'poison'
    | 'ground'
    | 'rock'
    | 'bug'
    | 'ghost'
    | 'steel'
    | 'fire'
    | 'water'
    | 'grass'
    | 'electric'
    | 'psychic'
    | 'ice'
    | 'dragon'
    | 'dark'
    | 'fairy'
    | 'unknown'
    | 'shadow'
}

const wrapperModifiers = {
  normal: (theme: DefaultTheme) => css`
    background: ${theme.colors.normal};
  `,
  fighting: (theme: DefaultTheme) => css`
    background: ${theme.colors.fighting};
  `,
  flying: (theme: DefaultTheme) => css`
    background: ${theme.colors.flying};
  `,
  poison: (theme: DefaultTheme) => css`
    background: ${theme.colors.poison};
  `,
  ground: (theme: DefaultTheme) => css`
    background: ${theme.colors.ground};
  `,
  rock: (theme: DefaultTheme) => css`
    background: ${theme.colors.rock};
  `,
  bug: (theme: DefaultTheme) => css`
    background: ${theme.colors.bug};
  `,
  ghost: (theme: DefaultTheme) => css`
    background: ${theme.colors.ghost};
  `,
  steel: (theme: DefaultTheme) => css`
    background: ${theme.colors.steel};
  `,
  fire: (theme: DefaultTheme) => css`
    background: ${theme.colors.fire};
  `,
  water: (theme: DefaultTheme) => css`
    background: ${theme.colors.water};
  `,
  grass: (theme: DefaultTheme) => css`
    background: ${theme.colors.grass};
  `,
  electric: (theme: DefaultTheme) => css`
    background: ${theme.colors.electric};
  `,
  psychic: (theme: DefaultTheme) => css`
    background: ${theme.colors.psychic};
  `,
  ice: (theme: DefaultTheme) => css`
    background: ${theme.colors.ice};
  `,
  dragon: (theme: DefaultTheme) => css`
    background: ${theme.colors.dragon};
  `,
  dark: (theme: DefaultTheme) => css`
    background: ${theme.colors.dark};
  `,
  fairy: (theme: DefaultTheme) => css`
    background: ${theme.colors.fairy};
  `,
  unknown: (theme: DefaultTheme) => css`
    background: ${theme.colors.unknown};
  `,
  shadow: (theme: DefaultTheme) => css`
    background: ${theme.colors.shadow};
  `
}

export const Wrapper = styled.article<BackgroundColorProps>`
  ${({ theme, cor }) => css`
    overflow: hidden;
    position: relative;
    border-radius: 2rem;
    padding: 1.5rem 1.5rem 0 1.5rem;
    min-height: 24.4rem;

    ${!!cor && wrapperModifiers[cor](theme)};

    /* svg {
      width: 20rem;
      height: 20rem;
      position: absolute;
      right: -1rem;
      bottom: -1rem;

      path {
        fill: #fff;
        opacity: 0.25;
      }
    } */

    ${WLoader} {
      position: absolute;
    }

    ${Text} {
      margin: -3rem 0 0 0;
      font-size: 1.4rem;
    }

    ${WrapperPokeball} {
      transform: scale(0.5);
    }
  `}
`

export const WrapperPokebola = styled.div`
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

  ${WLoader} {
    position: absolute;
  }

  ${Text} {
    margin: -3rem 0 0 0;
    font-size: 1.4rem;
  }

  ${WrapperPokeball} {
    transform: scale(0.5);
  }
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

export const WrapperWishlistButton = styled.div`
  position: absolute;
  top: 1.5rem;
  left: 1.5rem;
  z-index: 3;
`
