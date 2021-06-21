import { GameState } from '../../@types/board'
import { defaultBoard } from '../../constants'

import { StyledCmp, ResetButton, EvolveButton } from './styled-cmp'

interface Props {
  onGameStateChanged: (nextGameState: GameState) => void
}

const Controls: React.FC<Props> = (props: Props) => {
  const { onGameStateChanged } = props

  const handleResetClick = () => {
    onGameStateChanged(defaultBoard)
  }

  const handleEvolveClick = () => {
    // TODO: Trigger update of gameState based on rules and cardinality
    onGameStateChanged(defaultBoard)
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
