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

  const removeTodo = (id) => {
    const removeArr = [...todos].filter(todo => todo.id !== id)

    setTodos(removeArr)
  }

  return (
    <div>
      <Form onSubmit={addTodo} />
      <ToDoItem todos={todos} removeTodo={removeTodo}/>
    </div>
  );
};

export default ToDoList;
