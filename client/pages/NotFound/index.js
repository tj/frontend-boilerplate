// @flow
import React from 'react'
import Helmet from 'react-helmet'
import { css } from 'aphrodite'

import { Button } from 'components'

import styles from './style'

export default function NotFound(): React$Node {
  return (
    <div className={css(styles.main)}>
      <Helmet title="About" />

      <p>Not Found</p>
      <Button to="/">Go back home</Button>
    </div>
  )
}
