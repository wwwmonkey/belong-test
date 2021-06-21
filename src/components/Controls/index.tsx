import { GameState } from '../../@types/board'
import { defaultBoard } from '../../constants'

import { evolveBoard } from '../../utils/evolve'

import { StyledCmp, ResetButton, EvolveButton } from './styled-cmp'

interface Props {
  gameState: GameState
  onGameStateChanged: (nextGameState: GameState) => void
}

const Controls: React.FC<Props> = (props: Props) => {
  const { gameState, onGameStateChanged } = props

  const handleResetClick = () => {
    onGameStateChanged(defaultBoard)
  }

  const handleEvolveClick = () => {
    const evolvedGameState = evolveBoard(gameState)
    onGameStateChanged(evolvedGameState)
  }

  return (
    <StyledCmp>
      <EvolveButton onClick={handleEvolveClick} className="btn-evolve">
        EVOLVE
      </EvolveButton>
      <ResetButton onClick={handleResetClick} className="btn-reset">
        RESET
      </ResetButton>
    </StyledCmp>
  )
}

export default Controls
