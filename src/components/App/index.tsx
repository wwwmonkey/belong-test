/*
  App is the wrapper and layout for the game's Board and Controls
  Context, State and other root-level components should be added here if required
*/

import logo from '../../assets/logo.svg'
import './App.css'

import Board from '../Board'
import Controls from '../Controls'

const App = (): JSX.Element => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="beyond-logo" />
        <h1>BELONG TECHNICAL TASK</h1>
      </header>
      <main className="App-main">
        <Board />
        <Controls />
      </main>
    </div>
  )
}

export default App
