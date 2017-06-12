
import React from 'react';
import classnames from 'classnames/bind';

import styles from './styles.css';

const cx = classnames.bind(styles);

export default function Loader({ running }) {
  return (
    <div className={cx('loader', { 'loader--running': running })} />
  );
}
