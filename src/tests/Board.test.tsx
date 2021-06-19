import React from 'react'
import { render, screen } from '@testing-library/react'
import Board from '../components/Board'

test('At initial state, User should see an empty board.', () => {
  // TODO: Import the board with no cells set and test
  render(<Board />)
  // Expect the rendering of a board with mock array to equal a default (empty) board
  // expect(currentBoard).toEqual(defaultBoardArray)
})

test('User can make Cells "alive".', () => {
  // TODO: Trigger an event "addCell" on board and test
  render(<Board />)
})

test('User can make Cells "dead".', () => {
  // TODO: Trigger and event "removeCell" on an existing live cell
  render(<Board />)
})

test('User can trigger "next generation".', () => {
  // TODO: Trigger event "evolve" on board
  render(<Board />)
})

test('User can trigger a "reset" to the initial state.', () => {
  // TODO: Trigger event "resetBoard" on board
})
