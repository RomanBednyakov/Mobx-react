import {storeModel} from '../store';

describe('store Table', () => {
  it('store ', () => {
    expect(storeModel.create(
      {todos: [
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
        searchFilerFlag: true
      }
    )).toBeTruthy();
  });
  it('addTodo', () => {
    // mocked initial state
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
    const store = storeModel.create(initialState);
    store.addTodo(22, 'test');
    expect(store.todos.length).toBe(2);
  });
  it('searchTodo false search', () => {
    // mocked initial state
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
    const store = storeModel.create(initialState);
    store.searchTodo(false, 'test');
    expect(store.filterTodos.length).toBe(1);
  });
  it('searchTodo true search', () => {
    // mocked initial state
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
    const store = storeModel.create(initialState);
    store.searchTodo(true, 'Nizar');
    expect(store.filterTodos.length).toBe(1);
  });
});
