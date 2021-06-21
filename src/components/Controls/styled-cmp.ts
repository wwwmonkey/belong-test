import styled from 'styled-components'

import { maxBoardSize } from '../../constants'

export const StyledCmp = styled.div`
  background-color: var(--white);
  min-height: 20px;
  width: calc(60vw + 30px);
  max-width: calc(${maxBoardSize}px + 30px);
  margin: 0 auto 20px;
`
