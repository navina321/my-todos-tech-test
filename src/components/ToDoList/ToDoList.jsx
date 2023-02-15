import React from "react";
import { useState } from "react";
import Form from "../Form/Form";
import ToDoItem from "../ToDoItem/ToDoItem";

const ToDoList = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    const newTodos = [todo, ...todos];

    setTodos(newTodos);
    console.log(...todos);
  };

  const completeTodo = (id) => {
    let updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete
      }
      return todo
    })
    setTodos(updatedTodos)
  }

  return (
    <div>
      <Form onSubmit={addTodo} />
      <ToDoItem todos={todos} completeTodo={completeTodo} />
    </div>
  );
};

export default ToDoList;
