import styled, { css } from 'styled-components'
import * as TabsPrimitive from '@radix-ui/react-tabs'

type StatsProps = {
  percent: number
}

export const Wrapper = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.white};
    padding: 0 3rem 5rem 3rem;
  `}
`

export const WrapperContent = styled.div`
  padding-top: 2.5rem;
`

export const Item = styled.div`
  ${({ theme }) => css`
    display: flex;
    font-size: 1.5rem;
    font-weight: ${theme.font.medium};
    margin-bottom: 1.7rem;
  `}
`

export const ItemTitle = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.gray200};
    width: 12rem;
  `}
`

export const ItemContent = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.gray300};
    width: 100%;
  `}
`

export const WrapperItemContent = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`

export const WrapperItem = styled.div`
  width: 8%;

  @media (max-width: 767px) {
    width: 20%;
  }
`

export const Status = styled.div<StatsProps>`
  ${({ theme, percent }) => css`
    width: 92%;
    height: 0.2rem;
    background: ${theme.colors.ligthGray};
    position: relative;

    &::after {
      content: '';
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      width: ${percent}%;
      background: ${percent <= 49 ? theme.colors.red : theme.colors.green};
      max-width: 100%;
    }

    @media (max-width: 767px) {
      width: 80%;
    }
  `}
`

export const TitleEvolves = styled.p`
  ${({ theme }) => css`
    margin: 0;
    font-size: 1.5rem;
    font-weight: ${theme.font.medium};
    color: ${theme.colors.gray300};
    margin-bottom: 1.7rem;
  `}
`

export const WrapperEvolves = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @media (max-width: 767px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`

export const EvolvesItem = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 767px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`

export const EvolvesItemContent = styled.div`
  text-align: center;

  img {
    max-width: 12rem;
  }
`

export const EvolvesName = styled.h4`
  ${({ theme }) => css`
    margin: 0;
    font-size: 1.5rem;
    font-weight: ${theme.font.medium};
    color: ${theme.colors.gray300};
  `}
`

export const EvolvesLevel = styled.div`
  ${({ theme }) => css`
    margin: 0;
    font-size: 1.5rem;
    font-weight: ${theme.font.medium};
    color: ${theme.colors.gray300};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    svg {
      fill: ${theme.colors.gray200};
      width: 3rem;
    }

    @media (max-width: 767px) {
      margin: 4rem 0;
    }
  `}
`

const StyledTabs = styled(TabsPrimitive.Root)``

const StyledList = styled(TabsPrimitive.List)`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    border-bottom: 0.2rem solid ${theme.colors.ligthGray};
  `}
`

const StyledTrigger = styled(TabsPrimitive.Trigger)`
  ${({ theme }) => css`
    border: 0;
    background: transparent;
    cursor: pointer;
    color: ${theme.colors.gray200};
    font-size: 1.5rem;
    font-weight: ${theme.font.bold};
    padding: 0 0.7rem 1.7rem 0.7rem;
    transition: all 0.2s ease-in;
    margin-bottom: -0.2rem;
    border-bottom: 0.2rem solid transparent;

    &[data-state='active'] {
      color: ${theme.colors.gray300};
      border-color: ${theme.colors.lilas};
    }
  `}
`

export const Tabs = StyledTabs
export const TabsList = StyledList
export const TabsTrigger = StyledTrigger
