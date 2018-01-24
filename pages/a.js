import {reduxPage} from '../conf/redux'
import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'kea'

// @connect({
//   props: [
//     kea, [
//       'counter',
//       'doubleCounter',
//     ]
//   ]
// })
class Container extends React.Component {
  render () {
    return (
      <div>
        <p>来自首页的计数器是{this.props.counter}, x2后是{this.props.doubleCounter}</p>
      </div>
    )
  }
}

export default reduxPage(Container)
