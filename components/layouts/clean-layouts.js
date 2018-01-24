import React from 'react'
import Head from 'next/head'

import registerServiceWorker from '../../utils/registerServiceWorker'

export default class extends React.PureComponent {
  componentDidMount () {
    // 注册service worker
    if (process.env.NODE_ENV === 'production') {
      // registerServiceWorker()
    }
  }
  render () {
    return (
      <div>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no" />
        </Head>
        { this.props.children }
      </div>
    )
  }
}

