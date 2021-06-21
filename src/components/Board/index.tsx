import * as React from 'react'

import { StyledCmp } from './styled-cmp'
import { GameState } from '../../@types/board'

import Tile from '../Tile'

import xorGameState from '../../utils/xorGameState'

interface Props {
  gameState: GameState
  onGameStateChanged: (nextGameState: GameState) => void
}

const Board: React.FC<Props> = (props: Props) => {
  const { gameState, onGameStateChanged } = props

  const handleTileClick = (index: number) => {
    onGameStateChanged(xorGameState(gameState, index))
  }

  return (
    <StyledCmp>
      {/* Iterate over the current game state and display off/on tiles */}
      {gameState.map((tile, index: number) => (
        <Tile
          index={index}
          key={index}
          onClick={handleTileClick.bind(null, index)}
          tile={tile}
        />
      ))}
    </StyledCmp>
  )
}

export default Board
