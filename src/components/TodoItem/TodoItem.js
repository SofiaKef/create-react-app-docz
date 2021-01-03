import React from 'react';
import PropTypes from 'prop-types';
import './TodoItem.css';


const TodoItem = (props) => {
  if (props.todo === null) {
    return '';
  }

  const { completed, id, title } = props.todo;

  return (
    <li className="todo-item">
      <input 
        type="checkbox"
        checked={completed}
        onChange={() => props.handleChange(id)}
      />
      <button onClick={() => props.deleteTodo(id)}>
        Delete
      </button>
      <span className={completed ? "completedStyle" : null}>
        {title}
      </span>
    </li>
  );
};

TodoItem.propTypes = {
  /** Info about id, title and completion status of todo */
  todo: PropTypes.object,
  handleChange: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
};

export default (TodoItem);
