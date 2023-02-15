import React from 'react'
import { useState } from 'react'
import Form from '../Form/Form'

const ToDoItem = ({todos, completedTodo}) => {
  const [edit, setEdit] =useState({
    id: null,
    value:''
  })

  return todos.map((todo, index) => (
    <div className='' key={index}>
      <div 
        key={todo.id} 
        onClick={()=>completedTodo(todo.id)}>
        {todo.text}
      </div>

    </div>
  ))
}

export default ToDoItem