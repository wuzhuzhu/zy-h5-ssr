import React from 'react'
import Link from 'next/link'

import MainLayout from '../layouts/main-layout'

export default (props) => (
  <MainLayout>
    <p>Double Counter: {props.doubleCounter}</p>
    <button type='button' onClick={() => props.actions.increment(1)}>Increment</button>
    <button type='button' onClick={() => props.actions.decrement(1)}>Decrement</button>
    <ul>
      <li><Link href='/a' as='/a'><a>a</a></Link></li>
      <li><Link href='/b' as='/b'><a>b</a></Link></li>
    </ul>
  </MainLayout>
)
