/* eslint-disable @typescript-eslint/ban-ts-comment */
import { create, act } from 'react-test-renderer'
import App from '../components/App'

import { defaultBoard } from '../constants'
import Board from '../components/Board'

test('User can trigger a "reset" to the initial state.', () => {
  let testRenderer
  act(() => {
    testRenderer = create(<App />)
  })

  // @ts-ignore // unresolvable TS error in ext pkg
  const testInstance = testRenderer.root
  const resetBtn = testInstance.findByProps({ className: 'btn-reset' })

  act(() => {
    // click the reset button and gameState should equal defaultBoard
    resetBtn.props.onClick()
  })

  expect(testInstance.findByType(Board).props.gameState).toEqual(defaultBoard)
})

test('User can trigger "next generation".', () => {
  let testRenderer
  act(() => {
    testRenderer = create(<App />)
  })

  // @ts-ignore // unresolvable TS error in ext pkg
  const testInstance = testRenderer.root
  const evolveBtn = testInstance.findByProps({ className: 'btn-evolve' })
  // TODO: evolvedBoard should be a known state different from default
  const evolvedBoard = [
    0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  ]

  // TODO: create a method for clicking as this would become tedious
  const firstTile = testInstance.findByProps({ className: 'btn-0' })
  const secondTile = testInstance.findByProps({ className: 'btn-1' })
  const thirdTile = testInstance.findByProps({ className: 'btn-2' })

  act(() => {
    // Click the First tileButton to trigger update of the gameState
    firstTile.props.onClick()
  })
  act(() => {
    // Click the Second tileButton to trigger update of the gameState

    secondTile.props.onClick()
  })
  act(() => {
    // Click the Third tileButton to trigger update of the gameState
    thirdTile.props.onClick()
  })

  act(() => {
    // click the evolve button and gameState should equal evolvedBoard
    evolveBtn.props.onClick()
  })

  expect(testInstance.findByType(Board).props.gameState).toEqual(evolvedBoard)
})
