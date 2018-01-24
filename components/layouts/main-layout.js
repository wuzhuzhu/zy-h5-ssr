import CleanLayout from './clean-layouts'
import React from 'react';


class Mainlayout extends React.Component {
  componentDidMount () {

  }
  render () {
    return (
      <CleanLayout>
        {/*<p>这个来自于main-layout</p>*/}
        { this.props.children }
      </CleanLayout>
    )
  }
}

export default Mainlayout