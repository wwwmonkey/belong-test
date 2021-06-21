import styled from 'styled-components'

import { maxBoardSize } from '../../constants'

export const StyledCmp = styled.div`
  align-items: center;
  background-color: var(--white);
  display: flex;
  justify-content: space-around;
  margin: 0 auto 20px;
  max-width: calc(${maxBoardSize}px + 30px);
  min-height: 50px;
  width: calc(60vw + 30px);
`

export const ResetButton = styled.button`
  background-color: var(--white);

  &:hover,
  &:focus {
    background-color: var(--blue);
    opacity: 1;
  }
`

export const EvolveButton = styled.button`
  background-color: var(--blue);

  &:hover,
  &:focus {
    background-color: var(--white);
    opacity: 1;
  }
`
