
import React, { Component } from 'react'
import TodoItem from '../TodoItem'
import Footer from '../Footer'
import style from './style.css'
import {TWRIndexFront, TWRShowFront, TWRUpdateFront, mapIf} from 'two-way-rest'
import classnames from 'classnames'
import {SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED} from './../../constants/filters'

function filterTasks(filter, tasks){
  const filterType = filter ? filter.get('type') : '';

  switch(filterType){
    case SHOW_COMPLETED:
      return tasks.toSeq().filter(v=>v.get('completed')).toMap()
    case SHOW_ACTIVE:
      return tasks.toSeq().filter(v=>!v.get('completed')).toMap()
  }
  return tasks
}
class MainSection extends Component {
  constructor(props, context) {
    super(props, context)
  }

  handleClearCompleted() {
    const atLeastOneCompleted = this.props.todos.some(todo => todo.completed)
    if (atLeastOneCompleted) {
      this.props.actions.clearCompleted()
    }
  }

  handleShow(filter) {
    this.setState({ filter })
  }
  renderToggleAll(tasks, allCompleted) {
    if (tasks.instance().size > 0) {
      return <input
        className={style.toggleAll}
        type="checkbox"
        checked={allCompleted}
        onChange={
          ()=>tasks.custom( state=>state.set( 'tasks', 
            state.get('tasks').toSeq().map(v=>v.set('completed', !allCompleted)).toMap()
          ))
        }    
      />
    }
  }

  renderFooter(tasks) {
    if (tasks.instances.size) {
      return (
        <Footer completedCount={completedCount}
          activeCount={activeCount}
          filter={filter}
          onClearCompleted={::this.handleClearCompleted}
          onShow={::this.handleShow} />
      )
    }
  }
  render() {
    return (
      <TWRIndexFront tree='tasks' replace={(tasks)=>{
        const allTasks = tasks.instance().size;
        const completed = tasks.instance().toSeq().filter(v=>v.get('completed')).count()
        const active = allTasks - completed
        const allCompleted = allTasks === completed
        return <section className={style.main}>  
          {this.renderToggleAll(tasks, allCompleted)}
          <TWRShowFront forceRender tasks={tasks} tree='filters/1' replace={filter=>{
            return <ul className={style.normal}>
              {mapIf(filterTasks(filter.instance(), filter.props.tasks.instances()), task => 
                <TWRUpdateFront instance={task} replace={(updateTask)=>{
                  return <TodoItem updateTask={updateTask} task={updateTask.props.instance}/>
                }} />
              )}
            </ul>
          }} />
          {
          
          <Footer completedCount={completed}
            activeCount={active} 
          />
            
          }
          
        </section>  
      }} />
    )
  }
}

export default MainSection
