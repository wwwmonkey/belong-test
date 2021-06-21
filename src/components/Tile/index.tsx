import * as React from 'react'

import { TileButton } from './styled-cmp'
import { TileTypes } from '../../@types/board'

interface Props {
  tile: TileTypes
  onClick: (e: React.MouseEvent) => void
}

const Tile: React.FC<Props> = (props: Props) => {
  const { tile, onClick } = props
  return <TileButton tile={tile} onClick={onClick} />
}

export default Tile
