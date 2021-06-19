/*
  Index is the entry point for mounting this game's React application
  Global styles are also configured here
*/

import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './components/App'

// Check
try {
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root'),
  )
} catch (error) {
  console.log('Error mounting app: ', error)
}
