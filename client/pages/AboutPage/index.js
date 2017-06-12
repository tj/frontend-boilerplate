
import React from 'react';
import { Link } from 'react-router-dom';
import Helmet from 'react-helmet';

import styles from './style.css';

export default function About() {
  return (
    <div className={styles.main}>
      <Helmet title="About" />

      <p>About</p>
      <Link to="/">{'← Go Back'}</Link>
    </div>
  );
}
