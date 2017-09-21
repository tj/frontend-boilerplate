
import React from 'react';
import { StyleSheet, css } from 'aphrodite';

export default function Header() {
  return (
    <header className={css(styles.main)}>
      <div className={css(styles.logo)} />
    </header>
  );
}

const styles = StyleSheet.create({
  main: {
    marginTop: 53,
    marginBottom: 50,
  },
  logo: {
    margin: '0 auto',
    width: 51,
    height: 45,
    backgroundImage: 'url(../../assets/logo.png)',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: '51px 45px',
  },
});
