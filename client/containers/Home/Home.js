
import React, { Component } from 'react'
import Helmet from 'react-helmet'
import { MainSection } from 'components'

import styles from './Home.css'

const Home = () => (
  <div className={styles.main}>
    <Helmet title="Home" />

    <MainSection />
  </div>
)

export default Home
