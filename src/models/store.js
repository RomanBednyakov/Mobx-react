import { types } from 'mobx-state-tree';
import { values } from 'mobx';
import Todo from './todoModel'

export const storeModel = types
  .model({
    todos: types.optional(types.array(Todo), []),
    filterTodos: types.optional(types.array(Todo), []),
    searchFilerFlag: types.optional(types.boolean, false),
  })
  .actions(self => ({
    addTodo(id, text) {
      const d = new Date();
      const curr_date = d.getDate();
      const curr_month = d.getMonth() + 1;
      const curr_year = d.getFullYear();
      const newDate = `${curr_year}-${curr_month}-${curr_date}`;
      self.todos.push(Todo.create({ id, text, newDate }));
    },
    searchTodo(flag, searchText) {
      self.searchFilerFlag = flag;
      if(flag) {
        self.filterTodos = [];
        values(self.todos).forEach(itemTodo => {
          if(itemTodo.text.toLowerCase().indexOf(searchText.toLowerCase()) > -1) {
            const {id, text, newDate} = itemTodo;
            self.filterTodos.push(Todo.create({ id, text, newDate }));
          }
        });
      }
    },
  }));
