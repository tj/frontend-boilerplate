
import React from 'react';
import Helmet from 'react-helmet';
import { css } from 'aphrodite';
import styles from './style.js';

import { Button } from '../../components';

export default function About() {
  return (
    <div className={css(styles.main)}>
      <Helmet title="About" />

      <p>About</p>
      <Button to="/">{'Go back home'}</Button>
    </div>
  );
}
