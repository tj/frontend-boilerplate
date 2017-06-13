
import React from 'react';
import Helmet from 'react-helmet';

import { Button } from '../../components';
import styles from './style.css';

export default function About() {
  return (
    <div className={styles.main}>
      <Helmet title="About" />

      <p>About</p>
      <Button to="/">{'Go back home'}</Button>
    </div>
  );
}
