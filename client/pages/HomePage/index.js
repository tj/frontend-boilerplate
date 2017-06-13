
import React from 'react';
import Helmet from 'react-helmet';

import { Button } from '../../components';
import styles from './style.css';

export default function Home() {
  return (
    <div className={styles.main}>
      <Helmet title="Home" />

      <p>Home</p>
      <Button to="/about">{'Go to `/about`'}</Button>
    </div>
  );
}
