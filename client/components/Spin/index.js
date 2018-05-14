// @flow
import React, { Component } from 'react'
import Spinner from 'spin.js'
import type { SpinnerType } from 'spin.js'

import type { Props } from './types'

export default class Spin extends Component<Props, void> {
  static defaultProps = {
    stopped: false,
  }

  componentDidMount() {
    this.spinner = new Spinner(this.props.config)
    if (!this.props.stopped) this.spinner.spin(this.container)
  }

  componentWillReceiveProps(newProps: Props) {
    if (newProps.stopped === true && !this.props.stopped) {
      this.spinner.stop()
    } else if (!newProps.stopped && this.props.stopped === true) {
      this.spinner.spin(this.container)
    }
  }

  componentWillUnmount() {
    this.spinner.stop()
  }

  container: ?HTMLElement
  spinner: SpinnerType

  render(): React$Node {
    return (
      <span
        ref={ref => {
          this.container = ref
        }}
      />
    )
  }
}
