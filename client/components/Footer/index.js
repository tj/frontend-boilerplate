
import React, { Component } from 'react'
import { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } from '../../constants/filters'
import classnames from 'classnames'
import style from './style.css'
import {TWRCreateFront, TWRShowFront} from 'two-way-rest'

const FILTER_TITLES = {
  [SHOW_ALL]: 'All',
  [SHOW_ACTIVE]: 'Active',
  [SHOW_COMPLETED]: 'Completed'
}

class Footer extends Component {
  renderTodoCount() {
    const { activeCount } = this.props
    const itemWord = activeCount === 1 ? 'item' : 'items'

    return (
      <span className={style.count}>
        <strong>{activeCount || 'No'}</strong> {itemWord} left
      </span>
    )
  }

  renderFilterLink(filter, createFilter, filterInstance) {
    const title = FILTER_TITLES[filter]
    const selectedFilter = filterInstance ? filterInstance.get('type') : 'SHOW_ALL'
    return (
      <a className={classnames({ [style.selected]: filter === selectedFilter })}
         style={{ cursor: 'pointer' }}
         onClick={() => createFilter.submitContent({type: filter})}>
        {title}
      </a>
    )
  }

  renderClearButton(filter) {
    const { completedCount } = this.props
    if (completedCount > 0) {
      return (
        <button className={style.clearCompleted} onClick={
          ()=>filter.custom(state=>
            state.get('tasks')
            .toSeq()
            .filter(v=>v.get('completed'))
            .reduce((nextState, task)=>
              nextState.deleteIn(['tasks', task.get('id').toString()]), state
            )
          )} >
          Clear completed
        </button>
      )
    }
  }

  render() {
    return (
      <TWRShowFront forceRender tree='filters' id='1' replace={filter=>
        <footer className={style.normal}>
          {this.renderTodoCount()}
          <TWRCreateFront tree='filters' filter={filter} id='1' replace={createFilter=>
            <ul className={style.filters}>
              {[SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED].map(filterName =>
                <li>
                  {this.renderFilterLink(filterName, createFilter, createFilter.props.filter.instance())}
                </li>
              )}
            </ul>
          } />
          {this.renderClearButton(filter)}
        </footer>
      } />
    )
  }
}

export default Footer