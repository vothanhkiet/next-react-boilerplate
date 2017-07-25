import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import {connect} from 'react-redux'
import { createStructuredSelector } from 'reselect';
import { selectLight, selectLastUpdate, selectPlaceholderData } from '../selectors';

import AddCount from './add-count'
import Clock from './clock'

const Title = styled.h1`
  color: blue;
  font-size: 50px;
`

function Page ({error, lastUpdate, light, linkTo, placeholderData, title}) {
  return (
    <div>
      <Title>
        {title}
      </Title>
      <Clock lastUpdate={lastUpdate} light={light} />
      <AddCount />
      <nav>
        <Link href={linkTo}>
          <a>Navigate</a>
        </Link>
      </nav>
      {placeholderData &&
        <pre>
          <code>
            {JSON.stringify(placeholderData, null, 2)}
          </code>
        </pre>}
      {error &&
        <p style={{color: 'red'}}>
          Error: {error.message}
        </p>}
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  lastUpdate: selectLastUpdate(),
  light: selectLight(),
  placeholderData: selectPlaceholderData(),
})

export default connect(mapStateToProps)(Page)