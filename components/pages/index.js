import React from 'react'
import Link from 'next/link'

import MainLayout from '../layouts/main-layout'
import Counter from '../gears/counter'

export default (props) => (
  <MainLayout>
    <Counter {...props} id="1" />
    <Counter {...props} id="2" />
    <ul>
      <li><Link href='/a' as='/a'><a>a</a></Link></li>
      <li><Link href='/b' as='/b'><a>b</a></Link></li>
    </ul>
  </MainLayout>
)
