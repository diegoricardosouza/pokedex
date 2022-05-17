import styled, { css, keyframes } from 'styled-components'

const blink = keyframes`
  from { background: #eee; }
  to { background: #e74c3c; }
`

const shake = keyframes`
  0% { transform: translate(0, 0) rotate(0); }
  20% { transform: translate(-10px, 0) rotate(-20deg);}
  30% { transform: translate(10px, 0) rotate(20deg); }
  50% { transform: translate(-10px, 0) rotate(-10deg); }
  60% { transform: translate(10px, 0) rotate(10deg); }
  100% { transform: translate(0, 0) rotate(0); }
`

export const Wrapper = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  background: transparent;
  width: 100%;
  text-align: left;
  border: 0;

  &:focus-visible {
    outline: 0;
  }
`

export const Text = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
    font-weight: ${theme.font.bold};
    font-size: 1.6rem;
    display: block;
    margin-top: 1rem;
  `}
`

export const Pokeball = styled.div`
  position: relative;
  width: 100px;
  height: 100px;
  background: #fff;
  border: 5px solid #000;
  border-radius: 50%;
  overflow: hidden;
  box-shadow: inset -5px 5px 0 5px #ccc;
  animation: ${shake} 1.25s cubic-bezier(0.36, 0.07, 0.19, 0.97) infinite;

  &::before,
  &::after {
    content: '';
    position: absolute;
  }

  &::before {
    background: red;
    width: 100%;
    height: 50%;
  }

  &::after {
    top: calc(50% - 10px);
    width: 100%;
    height: 10px;
    background: #000;
  }
`

export const Button = styled.div`
  position: absolute;
  top: calc(50% - 15px);
  left: calc(50% - 15px);
  width: 30px;
  height: 30px;
  background: #7f8c8d;
  border: 5px solid #fff;
  border-radius: 50%;
  z-index: 10;
  box-shadow: 0 0 0 5px black;
  animation: ${blink} 0.5s alternate infinite;
`
