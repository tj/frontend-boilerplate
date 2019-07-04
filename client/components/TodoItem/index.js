
import React, { Component } from 'react'
import TodoTextInput from '../TodoTextInput/'
import classnames from 'classnames'
import style from './style.css'
import {TWRDestroyFront} from 'two-way-rest'
class TodoItem extends Component {
  constructor(props, context) {
    super(props, context)
  }
  render() {
    const task = this.props.task
    const updateTask = this.props.updateTask;
    let element
    if (task.get('editing')) {
      element = (
        <TodoTextInput 
          value={task.get('name')}
          editing
          onSave={(text) => updateTask.submitContent({editing: false})} />
      )
    } else {

      element = (
        <div className={style.view}>
          <input className={style.toggle}
             type="checkbox"
             checked={task.get('completed')}
             onChange={() => updateTask.submitContent({completed: !task.get('completed')})} />
          <label onDoubleClick={()=>updateTask.submitContent({editing: true})} >
            {task.get('name')}
          </label>
          <TWRDestroyFront noPrompt instance={task}>
            <button className={style.destroy} />
          </TWRDestroyFront>
        </div>
      )
    }

    // TODO: compose
    const classes = classnames({
      [style.completed]: task.get('completed'),
      [style.editing]: task.get('editing'),
      [style.normal]: !task.get('editing')
    })

    return (
      <li className={classes}>
        {element}
      </li>
    )
  }
}

export default TodoItem
