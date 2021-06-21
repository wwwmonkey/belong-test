import { GameState, TileTypes, Cardinals } from '../@types/board'
import { boardSize } from '../constants'

// Calculate the cardinal adjacent tiles
const getCardinalValues = (gameState: GameState, index: number): Cardinals => {
  const N = gameState[index - boardSize]
  const E = gameState[index + 1]
  const S = gameState[index + boardSize]
  const W = gameState[index - 1]

  return {
    N,
    E,
    S,
    W,
  }
}

export const evolveBoard = (gameState: GameState): GameState => {
  return gameState.map((tile, index) => {
    // Get the cardinals for each tile
    const cardinalValues = getCardinalValues(gameState, index)
    // Filter out any undefined values (border tiles) etc and count
    const validCardinalTiles =
      Object.values(cardinalValues).filter(Boolean).length

    switch (validCardinalTiles) {
      // A Cell with fewer than two live neighbours dies of under-population.
      case 0:
      case 1:
        return TileTypes.Off
      // A Cell with 2 or 3 live neighbours lives on to the next generation. (if it's on)
      case 2:
        return tile
      // An empty Cell with exactly 3 live neighbours "comes to life".
      case 3:
        return TileTypes.On
      // A Cell with more than 3 live neighbours dies of overcrowding.
      default:
        return TileTypes.Off
      // A Cell who "comes to life" outside the board should wrap at the other side of the board.
      // TODO: I don't think my implementation currently wrap cells, I need to re-think and refactor the code to achieve this
    }
  })
}
