// @flow

import React from 'react';
import PropTypes from 'prop-types';
import Spin from 'react-spin';
import { Link } from 'react-router-dom';
import has from 'lodash/has';
import invariant from 'invariant';
import classnames from 'classnames/bind';

import { spinConfig as defaultSpinConfig } from '../../config.js';
import styles from './style.css';

const cx = classnames.bind(styles);

export default function Button({ loading, spinConfig, ...props }: Object) {
  let Tag = 'button';

  if (has(props, 'to')) {
    Tag = Link;

    delete props.href;
    delete props.onClick;
  } else if (has(props, 'href')) {
    Tag = 'a';

    delete props.to;
    delete props.onClick;
  }

  return (
    <Tag
      disabled={loading}
      className={cx('main', { 'main--loading': loading })}
      {...props}
    >
      {/* Implement the spinner for loading activity */}
      <span className={styles.main__spinner}>
        <Spin stopped={!loading} config={{ ...defaultSpinConfig, ...spinConfig }} />
      </span>

      {/* Implement the children (content) of the button */}
      <span className={styles.main__content}>
        {props.children}
      </span>
    </Tag>
  );
}

Button.defaultProps = {
  spinConfig: defaultSpinConfig,
  loading: false,
  to: null,
  href: null,
  onClick: () =>
    invariant(false, 'No `onClick`, `to` or `href` was defined. Used fallback, with a noop.'),
};

Button.propTypes = {
  to: PropTypes.string,
  loading: PropTypes.bool,
  href: PropTypes.string,
  onClick: PropTypes.func,
  spinConfig: PropTypes.object,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
