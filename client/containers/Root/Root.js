
import React, { Component } from 'react'
import Helmet from 'react-helmet'

import { Header, Footer } from 'components'

import styles from './Root.css'
import { helmetDefaults } from '../../config'

const Root = props => (
  <div>
    <Helmet {...helmetDefaults} />

    <Header />
    {props.children}
    <Footer />
  </div>
)

export default Root
