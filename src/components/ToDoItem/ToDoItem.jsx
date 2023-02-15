import React from 'react'
import './ToDoItem.scss'

const ToDoItem = ({todos, removeTodo}) => {


  return todos.map((todo, index) => (
    <div className='todo__item' key={index}>
      <div key={todo.id}>
        {todo.text}
      </div>
      <button className='todo__item--delete'
      onClick = {()=>removeTodo(todo.id)}>x</button>
    </div>
  ))
}

export default ToDoItem