import React from 'react';
import Todo from './Todo';

export default { title: 'Todo' };

export const todoTrue = () => <Todo
  onClick={() => {}}
  todo={{id: 1, completed: true, text: 'text'}}
/>;
export const todoFalse = () => <Todo
  onClick={() => {}}
  todo={{id: 1, completed: false, text: 'text'}}
/>;

