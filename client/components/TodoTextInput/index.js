
import React, { Component } from 'react'
import classnames from 'classnames'
import style from './style.css'

class TodoTextInput extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      text: this.props.text || ''
    }
  }

  handleSubmit(e) {
    const text = e.target.value.trim()
    if (e.which === 13) {
      this.props.onSave(e)
    }
  }

  handleBlur(e) {
    const text = e.target.value.trim()
    if (!this.props.newTodo) {
      this.props.onSave(e)
    }
  }

  render() {
    const classes = classnames({
      [style.edit]: this.props.editing,
      [style.new]: this.props.newTodo
    }, style.normal)

    return (
      <input className={classes}
        type="text"
        autoFocus="true"
        name="name"
        placeholder={this.props.placeholder}
        defaultValue={this.props.value}
        onBlur={::this.handleBlur}
        onKeyDown={::this.handleSubmit} />
    )
  }
}

export default TodoTextInput
