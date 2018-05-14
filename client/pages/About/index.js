// @flow
import React from 'react'
import Helmet from 'react-helmet'
import { css } from 'aphrodite'

import { Button } from 'components'

import styles from './style'

export default function About(): React$Node {
  return (
    <div className={css(styles.main)}>
      <Helmet title="About" />

      <p>About</p>
      <Button to="/">Go back home</Button>
    </div>
  )
}
