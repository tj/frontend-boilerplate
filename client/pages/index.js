
import React from 'react';
import Helmet from 'react-helmet';
import { Route } from 'react-router-dom';

import Home from './HomePage';
import About from './AboutPage';

import { Header, Loader } from '../components';
import { helmetDefaults } from '../config';
import './index.css';

export default function App(props) {
  return (
    <div>
      <Helmet {...helmetDefaults} />
      <Header />

      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />

      <Loader running={props.navigating} />
    </div>
  );
}
