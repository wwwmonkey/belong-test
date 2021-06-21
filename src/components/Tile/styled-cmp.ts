import styled from 'styled-components'
import { TileTypes } from '../../@types/board'

export const TileButton = styled.button<{
  tile: TileTypes
}>`
  background-color: var(--blue);
  opacity: ${(props) => (props.tile === 0 ? 0.3 : 1)};
  transition: opacity 0.2s ease-out;
  border: 1px solid var(--white);

  &:hover {
    background-color: var(--blue);
    opacity: 1;
    cursor: crosshair;
  }
`
