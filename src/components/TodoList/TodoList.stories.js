import React from 'react';
import TodoList from './TodoList';

export default { title: 'TodoList' };
export const todoList = () => <TodoList
  todos={[
    {id: 1, completed: false, text: 'text1'},
    {id: 2, completed: true, text: 'text2'},
    {id: 3, completed: true, text: 'text3'},
    {id: 4, completed: false, text: 'text4'}
  ]}
/>;

