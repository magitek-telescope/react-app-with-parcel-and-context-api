import React from 'react'
import { Provider, actions, state as initialState } from './context/index'
import CountShow from './components/CountShow'
import CountButton from './components/CountButton'

class App extends React.Component {

  constructor () {
    super()
    this.state = {...initialState}
  }

  async dispatch ({ type, payload }) {
    console.log(type)
    const { state } = this
    await actions[type]({ state, ...payload })
    this.setState({...state})
  }

  render () {
    return (
      <Provider
        value={{
          state: this.state,
          dispatch: async (opts) => await this.dispatch(opts)
        }}
        >
        <div>
          <CountShow />
          <CountButton />
        </div>
      </Provider>
    )
  }
}

export default App
