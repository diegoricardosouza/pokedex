import styled, { keyframes } from 'styled-components'

const bounce = keyframes`
  10% {
    transform: translateY(-35px);
  }
  15% {
    transform: translateY(0px);
  }
  25% {
    transform: translateY(-15px);
  }
  30% {
    transform: translateY(0px);
  }
  50% {
    transform: rotateZ(10deg);
  }
  60% {
    transform: rotateZ(-10deg);
  }
  70% {
    transform: rotateZ(10deg);
  }
  100% {
    transform: rotateZ(0deg);
  }
`

const movingShadow = keyframes`
  10% {
    transform: scaleX(0.6);
  }
  15% {
    transform: scaleX(1);
  }
  25% {
    transform: scaleX(0.8);
  }
  30% {
    transform: scaleX(1);
  }
  50% {
    transform: translateX(6px);
  }
  60% {
    transform: translateX(-6px);
  }
  70% {
    transform: translateX(6px);
  }
  100% {
    transform: translateX(-6px);
  }
`

export const WrapperPokeball = styled.div`
  width: 150px;
  height: 150px;
  position: relative;
  z-index: 1;

  &::after {
    content: '';
    width: 90px;
    height: 10px;
    position: absolute;
    left: 30px;
    bottom: -5px;
    background-color: rgb(50, 10, 10);
    border-radius: 50%;
    animation: ${movingShadow} 2s ease-in-out infinite;
    z-index: -1;
  }
`

export const Pokeball = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(
    180deg,
    red 0%,
    red 47.5%,
    rgba(0, 0, 0, 0.7) 47.5%,
    rgba(0, 0, 0, 0.7) 52.5%,
    white 52.5%,
    white 100%
  );
  border-radius: 50%;
  border: 2px solid rgba(0, 0, 0, 0.7);
  position: relative;
  transform-origin: bottom center;
  overflow: hidden;
  animation: ${bounce} 2s ease-in-out infinite;

  &::before {
    content: '';
    width: 20px;
    height: 20px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #fff;
    border: 1px solid rgba(0, 0, 0, 0.5);
    border-radius: 50%;
    box-shadow: 2px 0 0 0 rgba(0, 0, 0, 0.2), 0 0 0 5px rgb(255, 255, 255),
      0 0 0 10px rgba(0, 0, 0, 0.7);
    z-index: 1;
  }

  &::after {
    content: '';
    width: 150px;
    height: 150px;
    position: absolute;
    top: -45px;
    left: -35px;
    border-radius: 50%;
    background: radial-gradient(
      circle at center,
      rgba(255, 255, 255, 0.8),
      rgba(255, 255, 255, 0) 50%
    );
    transform: skew(-10deg, -10deg);
  }
`
