import * as React from 'react'

import { TileButton } from './styled-cmp'
import { TileTypes } from '../../@types/board'

interface Props {
  tile: TileTypes
  index: number
  onClick: (e: React.MouseEvent) => void
}

const Tile: React.FC<Props> = (props: Props) => {
  const { tile, onClick, index } = props
  const targetClass = `btn-${index}`
  return <TileButton tile={tile} onClick={onClick} className={targetClass} />
}

export default Tile
