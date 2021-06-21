import * as React from 'react'

import { StyledCmp } from './styled-cmp'
import { GameState } from '../../@types/board'

import Tile from '../Tile'

interface Props {
  gameState: GameState
  onGameStateChanged: (nextGameState: GameState) => void
}

const Board: React.FC<Props> = (props: Props) => {
  const { gameState, onGameStateChanged } = props

  const handleTileClick = (index: number) => {
    console.log(index)
    // TODO: update gameState here
    onGameStateChanged(gameState)
  }
  return (
    <StyledCmp>
      {/* Iterate over the current game state and display off/on tiles */}
      {gameState.map((tile, index: number) => (
        <Tile
          key={index}
          onClick={handleTileClick.bind(null, index)}
          tile={tile}
        />
      ))}
    </StyledCmp>
  )
}

export default Board
