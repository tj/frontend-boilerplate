
import React, { PropTypes } from 'react';
import styles from './<%= pascalEntityName %>.css';

function <%= pascalEntityName %>(props) {
  return (
    <div className={styles.main}><%= pascalEntityName %></div>
  );
}

<%= pascalEntityName %>.displayName = '<%= pascalEntityName %>';

export default <%= pascalEntityName %>;
