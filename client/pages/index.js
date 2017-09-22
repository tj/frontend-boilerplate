// @flow

import React from 'react';
import Helmet from 'react-helmet';
import { Route } from 'react-router-dom';

import Home from './HomePage';
import About from './AboutPage';

import { Header } from '../components';
import { helmetDefaults } from '../config';
import './globals.js';

export default function App() {
  return (
    <div>
      <Helmet {...helmetDefaults} />
      <Header />

      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
    </div>
  );
}
