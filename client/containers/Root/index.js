
import React from 'react';
import Helmet from 'react-helmet';

import { Header } from '../../components';

import { helmetDefaults } from '../../config';
import './style.css';

export default function Root(props) {
  return (
    <div>
      <Helmet {...helmetDefaults} />

      <Header />
      {props.children}
    </div>
  );
}
