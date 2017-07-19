
import React, { Component, PropTypes } from 'react';
import styles from './<%= pascalEntityName %>.css';

class <%= pascalEntityName %> extends Component {
  render() {
    return (
      <div className={styles.main}><%= pascalEntityName %></div>
    );
  }
}

export default <%= pascalEntityName %>;
