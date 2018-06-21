import React from 'react'
import { Consumer } from '../context'
import { INCREMENT, DECREMENT } from '../types/'

export default () => (
  <Consumer>
    {({ dispatch }) => (
      <div>
        <button onClick={() => dispatch({ type: INCREMENT })}>+</button>
        <button onClick={() => dispatch({ type: DECREMENT })}>-</button>
      </div>
    )}
  </Consumer>
)
