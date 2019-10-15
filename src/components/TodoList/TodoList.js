import React from 'react';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react';
import List from '@material-ui/core/List';

import Todo from '../Todo/Todo';

const TodoList = ({ todos }) => {
  return (
    <List>
      {todos.map(todo => (
        <Todo key={todo.id} todo={todo} onClick={todo.toggle} />
      ))}
    </List>
  );
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool,
      text: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default observer(TodoList);
