import React from 'react';
import './TodoItem.css';


const TodoItem = (props) => {
  const { completed, id, title } = props.todo;

  return (
    <li className="todo-item">
      <input 
        type="checkbox"
        checked={completed}
        onChange={() => props.handleChangeProps(id)}
      />
      <button onClick={() => props.deleteTodoProps(id)}>
        Delete
      </button>
      <span className={completed ? "completedStyle" : null}>
        {title}
      </span>
    </li>
  );
};

export default TodoItem;
