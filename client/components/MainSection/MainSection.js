
import React, { Component } from 'react'
import styles from './MainSection.css'

class MainSection extends Component {
  render() {
    return (
      <section>
        <div className={styles.logo}></div>
        This is the main content
      </section>
    )
  }
}

export default MainSection
