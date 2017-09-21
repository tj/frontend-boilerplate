// @flow

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { StyleSheet, css } from 'aphrodite';
import has from 'lodash/has';
import invariant from 'invariant';

import { spinConfig as defaultSpinConfig } from '@root/config.js';
import Spin from '@components/Spin';

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
      className={css(styles.main, loading && styles.main__loading )}
      {...props}
    >
      {/* Implement the spinner for loading activity */}
      <span className={css(styles.main__spinner, loading && styles.main__loading__active)}>
        <Spin stopped={!loading} config={{ ...defaultSpinConfig, ...spinConfig }} />
      </span>

      {/* Implement the children (content) of the button */}
      <span className={css(styles.main__content, loading && styles.main__loading__active)}>
        {props.children}
      </span>
    </Tag>
  );
}

const styles = StyleSheet.create({
  main: {
    backgroundColor: '#808080',
    color: 'white',
    textDecoration: 'none',
    border: '1px solid #707070',
    fontSize: '1rem',
    lineHeight: '1rem',
    padding: '.75rem 1.5rem',
    borderRadius: '3px',
    transitionDuration: '250ms',
    transitionProperty: 'background-color',
    overflow: 'hidden',
    position: 'relative',
    display: 'inline-block',
    transitionDuration: '250ms',
    boxShadow: '0 2px 4px rgba(0, 0, 0, .1)',

    '@media (max-width: 600px)': {
      backgroundColor: 'red',
    },

    ':not([disabled]):hover': {
      backgroundColor: '#707070',
    },

    '[disabled]': {
      opacity: 0.7,
      cursor: 'not-allowed',
    },
  },
  main__spinner: {
    display: 'inline-block',
    width: '100%',
    transitionDuration: '250ms',
    position: 'absolute',
    top: '-2.5rem',
    height: '2.5rem',
    left: 0,
    transform: 'translate3d(0, 0, 0)',
  },
  main__content: {
    display: 'inline-block',
    width: '100%',
    transitionDuration: '250ms',
    transform: 'translate3d(0, 0, 0)',
  },
  main__loading__active: {
    transform: 'translate3d(0, 2.5rem, 0)',
  },
});

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
