import { types } from 'mobx-state-tree';

const Todo = types
  .model({
    id: types.identifierNumber,
    text: types.optional(types.string, ''),
    completed: types.optional(types.boolean, false),
    newDate: types.optional(types.string, ''),
  })
  .actions(self => ({
    setText(id, newText) {
      self.text = newText;
    },
    toggle() {
      self.completed = !self.completed;
    },

  }));

export default Todo;
