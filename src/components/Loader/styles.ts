import styled, { css, keyframes } from 'styled-components'

const bounce = keyframes`
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 3;
  background: rgba(255, 255, 255, 0.8);
  flex-direction: column;
`

export const Text = styled.span`
  ${({ theme }) => css`
    display: block;
    font-size: 1.6rem;
    margin-top: 2rem;
    color: ${theme.colors.primary};
    font-weight: ${theme.font.bold};
    transition: all 0.2s;
    animation: ${bounce} 2s infinite;
    opacity: 1;
  `}
`
