import styled from 'styled-components'

import { boardSize, maxBoardSize } from '../../constants'

export const StyledCmp = styled.div`
  background-color: var(--black);
  border: 15px solid var(--white);
  margin: 0 auto;
  width: 60vw;
  height: 60vw;
  max-height: ${maxBoardSize}px;
  max-width: ${maxBoardSize}px;

  /* columns */
  display: grid;
  grid-template-rows: repeat(${boardSize}, ${boardSize}fr);
  grid-template-columns: repeat(${boardSize}, ${boardSize}fr);
  grid-gap: 5px;
`
