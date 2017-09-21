
import React from 'react';
import Helmet from 'react-helmet';
import { StyleSheet, css } from 'aphrodite';

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

const styles = StyleSheet.create({
  red: {
    textAlign: 'center',
  },
});
