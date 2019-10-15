import todoModel from '../todoModel';

describe('store TodoModel', () => {
  it('TodoModel model ', () => {
    expect(todoModel.create({
      id: 1,
      text: 'Nizar',
      completed: true,
      newDate: '22.22.2222',
    })).toBeTruthy();
  });
  it('setText', () => {
    // mocked initial state
    const initialState = {
      id: 1,
      text: 'Nizar',
      completed: true,
      newDate: '22.22.2222',
    };
    const store = todoModel.create(initialState);
    store.setText(1, 'test');
    expect(store.text).toBe('test');
  });
  it('toggle', () => {
    // mocked initial state
    const initialState = {
      id: 1,
      text: 'Nizar',
      completed: true,
      newDate: '22.22.2222',
    };
    const store = todoModel.create(initialState);
    store.toggle();
    expect(store.completed).toBe(false);
  });

});
