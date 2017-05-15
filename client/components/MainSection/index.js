
import React, { Component } from 'react';
import styles from './style.css';

class MainSection extends Component {
  render() {
    return (
      <section>
        <div className={styles.logo} />
        This is the main content
      </section>
    );
  }
}

export default MainSection;
