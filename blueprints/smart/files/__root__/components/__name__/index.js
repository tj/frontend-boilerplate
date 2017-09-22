
import React, { Component, PropTypes } from 'react';
import { css } from 'aphrodite';
import styles from './<%= pascalEntityName %>';

class <%= pascalEntityName %> extends Component {
  render() {
    return (
      <div className={css(styles.main)}><%= pascalEntityName %></div>
    );
  }
}

export default <%= pascalEntityName %>;
