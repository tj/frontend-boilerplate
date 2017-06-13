
import React from 'react';
import { Link } from 'react-router-dom';
import has from 'lodash/has';
import styles from './style.css';

export default function Button(props) {
  let Tag = 'button';

  if (has(props, 'to')) {
    Tag = Link;
  } else if (has(props, 'href')) {
    Tag = 'a';
  }

  return (
    <Tag
      className={styles.main}
      {...props}
    >
      {props.children}
    </Tag>
  );
}
