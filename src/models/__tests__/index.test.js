import {createStore} from "../";

describe('index store model', () => {
  it('initialState', () => {
    const initialState = {
      searchFilerFlag: false,
      todos: [
        {
          id: 1,
          text: 'Nizar',
          completed: true,
          newDate: '22.22.2222',
        }
      ],
      filterTodos: [
        {
          id: 2,
          text: 'Nizar',
          completed: true,
          newDate: '22.22.2222',
        }
      ],
    };

    const todoListStore = createStore(initialState);

    expect(todoListStore.todos.length).toBe(1);
  });
});
