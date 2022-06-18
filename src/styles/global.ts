import { createGlobalStyle, css } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  a {
    text-decoration: none;
  }

  ${({ theme }) => css`
    html {
      font-size: 62.5%;
      overflow-x: hidden;
    }

    body {
      font-family: ${theme.font.family.roboto};
      font-size: ${theme.font.sizes.xsmall};
      overflow-x: hidden;
    }

    .grass {
      background: ${theme.colors.grass};
    }

    .normal {
      background: ${theme.colors.normal};
    }

    .shadow {
      background: ${theme.colors.shadow};
    }

    .unknown {
      background: ${theme.colors.unknown};
    }

    .fairy {
      background: ${theme.colors.fairy};
    }

    .dark: {
      background: ${theme.colors.dark};
    }

    .dragon {
      background: ${theme.colors.dragon};
    }

    .ice {
      background: ${theme.colors.ice};
    }

    .psychic {
      background: ${theme.colors.psychic};
    }

    .electric {
      background: ${theme.colors.electric};
    }

    .water {
      background: ${theme.colors.water};
    }

    .fire {
      background: ${theme.colors.fire};
    }

    .steel {
      background: ${theme.colors.steel};
    }

    .ghost {
      background: ${theme.colors.ghost};
    }

    .bug {
      background: ${theme.colors.bug};
    }

    .rock {
      background: ${theme.colors.rock};
    }

    .ground {
      background: ${theme.colors.ground};
    }

    .poison {
      background: ${theme.colors.poison};
    }

    .flying {
      background: ${theme.colors.flying};
    }

    .fighting {
      background: ${theme.colors.fighting};
    }
  `}
`

export default GlobalStyles
