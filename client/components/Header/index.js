
import React from 'react';
import { css } from 'aphrodite';
import styles from './style.js';

export default function Header() {
  return (
    <header className={css(styles.main)}>
      <div className={css(styles.logo)} />
    </header>
  );
}
