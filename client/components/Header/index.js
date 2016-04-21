
import React, { Component } from 'react'
import {TWRCreateFront} from 'two-way-rest'
import TodoTextInput from './../TodoTextInput/'


class Header extends Component {
  handleSave(text) {
    if (text.length) {
      this.props.addTodo(text)
    }
  }

  render() {
    return (
      <header>
        <h1>Todos</h1>
        <TWRCreateFront tree='tasks' replace={createTask=>
            <form>
              <TodoTextInput newTodo placeholder='What needs to be done?' onSave={createTask.submitForm} />
            </form>
        } />
      </header>
    )
  }
}

export default Header
