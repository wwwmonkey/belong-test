/*
  App is the wrapper and layout for the game's Board and Controls
  Context, State and other root-level components should be added here if required
*/

import logo from '../../assets/logo.svg'
import { AppWrapper, AppHeader, AppLogo } from './styled-cmp'

import Board from '../Board'
import Controls from '../Controls'

const App = (): JSX.Element => {
  return (
    <AppWrapper>
      <AppHeader>
        <AppLogo src={logo} alt="beyond-logo" />
        <h1>BELONG TECHNICAL TASK</h1>
      </AppHeader>
      <main className="App-main">
        <Board />
        <Controls />
      </main>
    </AppWrapper>
  )
}

export default App
