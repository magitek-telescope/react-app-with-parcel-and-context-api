import React from 'react'
import { Consumer } from '../context'

export default () => (
  <Consumer>
    {({ state }) => (
      <div>
        {state.count}
      </div>
    )}
  </Consumer>
)
