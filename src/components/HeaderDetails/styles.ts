import { Wrapper } from 'components/Type/styles'
import styled, { css } from 'styled-components'

export const HeaderWrapper = styled.header`
  display: flex;
  width: 100%;
  position: relative;
  padding-top: 2rem;

  svg:not(.back-icon) {
    width: 20rem;
    height: 20rem;
    position: absolute;
    left: 45%;
    bottom: 0;
    transform: translateX(-50%);

    path {
      fill: #fff;
      opacity: 0.25;
    }

    @media (max-width: 767px) {
      left: auto;
      right: -1rem;
      bottom: -1rem;
      transform: initial;
    }
  }
`

export const WrapperContainer = styled.div`
  position: relative;
`

export const WrapperContainerInfos = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`

export const TopAbas = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.white};
    border-top-left-radius: 4rem;
    border-top-right-radius: 4rem;
    min-height: 4rem;
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
  `}
`

export const Image = styled.img`
  max-width: 25rem;
  position: relative;
  z-index: 2;

  @media (max-width: 767px) {
    order: 2;
  }
`

export const HeaderInfos = styled.div`
  margin-left: 8rem;

  @media (max-width: 767px) {
    margin-left: 0;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`

export const WrapperTypes = styled.div`
  ${Wrapper} {
    margin-right: 1rem;
  }
`

export const WrapperTitle = styled.div``

export const Number = styled.span`
  ${({ theme }) => css`
    display: block;
    color: ${theme.colors.white};
    font-size: 2.1rem;
    font-weight: ${theme.font.bold};
    margin: 0;

    @media (max-width: 767px) {
      order: 2;
    }
  `}
`

export const Title = styled.h1`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: 4rem;
    font-weight: ${theme.font.bold};

    @media (max-width: 767px) {
      font-size: 3.5rem;
    }
  `}
`

export const Back = styled.div`
  ${({ theme }) => css`
    svg {
      width: 2.5rem;
      stroke: ${theme.colors.white};
    }

    @media (max-width: 767px) {
      margin: 1rem 0 2rem 0;
    }
  `}
`
