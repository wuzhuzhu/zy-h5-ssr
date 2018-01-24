import React from 'react'
import Link from 'next/link'

import MainLayout from '../layouts/main-layout'

export default (props) => (
  <MainLayout>
    {/*<p>Double Counter: {props.doubleCounter}</p>*/}
    <button type='button' onClick={props.addString}>增加example值</button>
    {/*<button type='button' onClick={() => props.actions.decrement(1)}>Decrement</button>*/}
    <ul>
      <li><Link href='/a' as='/a'><a>a</a></Link></li>
      <li><Link href='/b' as='/b'><a>跨页面共享store</a></Link></li>
      <li><a>{props.example}</a></li>
    </ul>
  </MainLayout>
)
