import makeInspectable from 'mobx-devtools-mst';
import { storeModel } from "./store";

export function createStore(snapshot) {
  const store = storeModel.create(snapshot);
  makeInspectable(store);
  return store;
}

export const initialState = {
  searchFilerFlag: false,
  todos: [],
  filterTodos: [],
};
