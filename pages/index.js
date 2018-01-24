import {reduxPage} from '../conf/redux'
import React from 'react'
import PropTypes from 'prop-types'
import { kea } from 'kea'

import Index from '../components/pages/index'

@kea({
  path: () => ['kea'],
  actions: () => ({
    increment: amount => ({ amount }),
    decrement: amount => ({ amount })
  }),
  reducers: ({ actions }) => ({
    counter: [
      0,
      PropTypes.number,
      {
        [actions.increment]: (state, payload) => state + payload.amount,
        [actions.decrement]: (state, payload) => state - payload.amount
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
class Container extends React.Component {
  render () {
    return (
      <Index  {...this.props} actions={this.actions} />
    )
  }
}

export default reduxPage(Container)


