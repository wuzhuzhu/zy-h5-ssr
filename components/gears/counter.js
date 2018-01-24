import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { kea } from 'kea'

@kea({
  key: props => props.id,
  path: (key) => ['kea', 'counter', key],
  actions: () => ({
    increment: (amount)=> ({ amount }),
    decrement: (amount)=> ({ amount })
  }),
  reducers: ({ actions, key, props }) => ({
    counter: [
      0,
      PropTypes.number,
      {
        [actions.increment]: (state, payload) => payload.key === key ? state + payload.amount : state,
        [actions.decrement]: (state, payload) => payload.key === key ? state - payload.amount : state
      }
    ]
  }),
  selectors: ({ selectors }) => ({
    doubleCounter: [
      () => [selectors.counter],
      counter => counter * 2,
      PropTypes.number
    ]
  })
})
class Counter extends React.Component {
  componentDidMount () {

  }
  render () {
    const { counter, doubleCounter } = this.props
    const { increment, decrement } = this.actions
    return (
      <div>
        Count: {counter}
        <br />
        Doublecount: {doubleCounter}
        <br />
        <button onClick={() => increment(1)}>Increment</button>
        <button onClick={() => decrement(1)}>Decrement</button>
      </div>
    )
  }
}

export default Counter