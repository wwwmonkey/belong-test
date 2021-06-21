/*
  App is the wrapper and layout for the game's Board and Controls
  Context, State and other root-level components should be added here if required
*/

import { useState } from 'react'

import { GameState } from '../../@types/board'
import { defaultBoard } from '../../constants'

import logo from '../../assets/logo.svg'
import { AppWrapper, AppHeader, AppLogo } from './styled-cmp'

import Board from '../Board'
import Controls from '../Controls'

const App: React.FC = () => {
  // App level state for the game board, defaults to 6x6 off tiles
  const [gameState, setGameState] = useState<GameState>(defaultBoard)

  return (
    <AppWrapper>
      <AppHeader>
        <AppLogo src={logo} alt="beyond-logo" />
        <h1>BELONG TECHNICAL TASK</h1>
      </AppHeader>
      <main>
        {/* Import our game board with State */}
        <Board gameState={gameState} onGameStateChanged={setGameState} />
        <Controls />
      </main>
    </AppWrapper>
  )
}

export default App
