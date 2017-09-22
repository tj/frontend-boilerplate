
import React, { PropTypes } from 'react';
import { css } from 'aphrodite';
import styles from './style';

function <%= pascalEntityName %>(props) {
  return (
    <div className={css(styles.main)}><%= pascalEntityName %></div>
  );
}

<%= pascalEntityName %>.displayName = '<%= pascalEntityName %>';

export default <%= pascalEntityName %>;
