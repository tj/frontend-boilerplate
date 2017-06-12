
import React from 'react';
import Helmet from 'react-helmet';
import { Link } from 'react-router-dom';

import styles from './style.css';

export default function Home() {
  return (
    <div className={styles.main}>
      <Helmet title="Home" />

      <p>Home</p>
      <Link to="/about">{'Go to `/about`'}</Link>
    </div>
  );
}
