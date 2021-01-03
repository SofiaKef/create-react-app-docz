import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from '../TodoItem/TodoItem';

const TodosList = (props) => {
  return(
    <div>
      {props.todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          handleChange={props.handleChange}
          deleteTodo={props.deleteTodo}
        />
      ))}
    </div>
  )
};

TodosList.propTypes = {
  todos: PropTypes.array.isRequired,
  handleChange: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
};

export default TodosList;
