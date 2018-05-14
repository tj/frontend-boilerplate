// @flow
import React from 'react'
import { css } from 'aphrodite'

import styles from './style'

export default function Header(): React$Element<'header'> {
  return (
    <header className={css(styles.main)}>
      <div className={css(styles.logo)} />
    </header>
  )
}
