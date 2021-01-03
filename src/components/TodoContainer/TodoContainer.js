import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { v4 as uuidv4} from 'uuid';
import TodosList from '../TodosList/TodosList';
import InputTodo from '../InputTodo/InputTodo';
import Header from '../Header/Header';
import './TodoContainer.css';

const TodoContainer = (props) => {
  const [todos, setTodos] = useState([]);
  const [show, setShow] = useState(false);

  const handleChange = id => {
    setTodos(
      todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo
      })
    )
    setShow(!show)
  }

  const deleteTodo = id => {
    setTodos([
      ...todos.filter(todo => {
        return todo.id !== id
      }),
    ])
  }

  const addTodo = title => {
    const newTodo = {
      id: uuidv4(),
      title: title,
      completed: false,
    }
    setTodos([...todos, newTodo])
  }

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos?_limit=10")
      .then(response => setTodos(response.data))
  }, [])

  return (
    <div className="container">
      <Header headerSpan={show} />
      <InputTodo addTodo={addTodo} />
      <TodosList
        todos={todos}
        handleChange={handleChange}
        deleteTodo={deleteTodo}
      />
    </div>
  );
}

export default TodoContainer;
