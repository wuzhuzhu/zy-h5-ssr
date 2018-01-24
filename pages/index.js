import {reduxPage} from '../conf/redux'
import React from 'react'
import PropTypes from 'prop-types'
import { kea } from 'kea'

import Index from '../components/pages/index'

class Container extends React.Component {
  render () {
    return (
      <Index  {...this.props} />
    )
  }
}

export default reduxPage(Container)


