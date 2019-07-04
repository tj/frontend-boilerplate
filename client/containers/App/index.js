
import React, { Component } from 'react'
import Header from '../../components/Header'
import MainSection from '../../components/MainSection'
import style from './style.css'
import {DeclareReducer, TWRCreateFront} from 'two-way-rest'

export default class App extends Component {
  render() {
    //const { todos, actions, children } = this.props
    
    return (
      <DeclareReducer reducer='todos'> 
        <div className={style.normal}>
          <Header/>
          <MainSection />
        </div>
      </DeclareReducer>
    )
  }
}