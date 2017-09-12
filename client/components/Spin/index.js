import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Spinner from 'spin.js';

export default class Spin extends Component {
  componentDidMount() {
    this.spinner = new Spinner(this.props.config);
    if (!this.props.stopped) this.spinner.spin(this.container);
  }

  componentWillReceiveProps(newProps) {
    if (newProps.stopped === true && !this.props.stopped) {
      this.spinner.stop();
    } else if (!newProps.stopped && this.props.stopped === true) {
      this.spinner.spin(this.container);
    }
  }

  componentWillUnmount() {
    this.spinner.stop();
  }

  render() {
    return <span ref={(ref) => { this.container = ref; }} />;
  }
}

Spin.defaultProps = {
  config: {},
  stopped: false,
};

Spin.propTypes = {
  config: PropTypes.object, // eslint-disable-line
  stopped: PropTypes.bool,
};
