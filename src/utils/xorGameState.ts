import { GameState } from '../@types/board'

const xorGameState = (gameState: GameState, index: number): GameState => {
  const newGameStateArray = [...gameState]
  // Bitwise XOR the updated tile
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_XOR
  newGameStateArray[index] = newGameStateArray[index] ^ 1
  return newGameStateArray
}
export default xorGameState
