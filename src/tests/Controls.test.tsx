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

  // @ts-ignore // unresolvable TS error
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

  // @ts-ignore // unresolvable TS error
  const testInstance = testRenderer.root
  const evolveBtn = testInstance.findByProps({ className: 'btn-evolve' })
  // TODO: evolvedBoard should be a known state different from default
  const evolvedBoard = [
    1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0,
  ]

  // TODO: Probably need to add and click more buttons to get an interesting evolution
  const firstTile = testInstance.findByProps({ className: 'btn-0' })

  act(() => {
    // Click the first tileButton to trigger update of the gameState
    firstTile.props.onClick()

    // click the evolve button and gameState should equal defaultBoard
    evolveBtn.props.onClick()
  })

  // TODO: this test will fail until evolution logic is implemented
  expect(testInstance.findByType(Board).props.gameState).toEqual(evolvedBoard)
})
