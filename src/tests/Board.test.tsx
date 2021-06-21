/* eslint-disable @typescript-eslint/ban-ts-comment */
import { create, act } from 'react-test-renderer'
import App from '../components/App'

import { defaultBoard } from '../constants'
import Board from '../components/Board'

test('At initial state, User should see an empty board.', () => {
  // Expect the rendering of a board with mock array to equal a default (empty) board
  let testRenderer
  act(() => {
    testRenderer = create(<App />)
  })

  // @ts-ignore // unresolvable TS error in ext pkg
  const testInstance = testRenderer.root

  expect(testInstance.findByType(Board).props.gameState).toEqual(defaultBoard)
})

test('User can make Cells "alive".', () => {
  let testRenderer
  act(() => {
    testRenderer = create(<App />)
  })

  // @ts-ignore // unresolvable TS error in ext pkg
  const testInstance = testRenderer.root
  const firstTile = testInstance.findByProps({ className: 'btn-0' })

  act(() => {
    // Click the first tileButton to trigger update of the gameState
    firstTile.props.onClick()
  })

  expect(testInstance.findByType(Board).props.gameState).not.toEqual(
    defaultBoard,
  )
})

test('User can make Cells "dead".', () => {
  let testRenderer
  act(() => {
    testRenderer = create(<App />)
  })

  // @ts-ignore // unresolvable TS error in ext pkg
  const testInstance = testRenderer.root
  const firstTile = testInstance.findByProps({ className: 'btn-0' })

  act(() => {
    // Click the first tileButton to trigger update of the gameState
    firstTile.props.onClick()
  })
  act(() => {
    // Click it again, to reset the gameState to default
    firstTile.props.onClick()
  })

  expect(testInstance.findByType(Board).props.gameState).toEqual(defaultBoard)
})
