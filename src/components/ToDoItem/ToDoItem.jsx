import React from 'react'
import { useState } from 'react'
import Form from '../Form/Form'
import './ToDoItem.scss'

const ToDoItem = ({todos, completedTodo}) => {
  const [edit, setEdit] =useState({
    id: null,
    value:''
  })

  return todos.map((todo, index) => (
    <div className='todo__item' key={index}>
      <div 
        key={todo.id} 
        onClick={()=>completedTodo(todo.id)}>
        {todo.text}
      </div>
      <button className='todo__item--button'>x</button>
    </div>
  ))
}

export default ToDoItem