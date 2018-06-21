import React from 'react'
import * as types from '../types/'

const state = {
  count: 0
}

const actions = {
  [types.INCREMENT]({ state }) {
    state.count ++
  },
  [types.DECREMENT] ({ state }) {
    state.count --
  }
}

const Context = React.createContext(state)
const { Provider, Consumer } = Context

export {
  Provider,
  Consumer,
  actions,
  state
}
