import { createSlice, configureStore } from '@reduxjs/toolkit';

const TODOS = 'ToDos';
const toDoInit = () => {
  const localToDo = localStorage.getItem(TODOS);
  if (!localToDo) return [];
  return JSON.parse(localToDo);
};
const toDoSlice = createSlice({
  name: TODOS,
  initialState: toDoInit(),
  reducers: {
    addToDoAction: (state, action) => {
      const text = action.payload;
      const newToDo = [{ text, id: Date.now() }, ...state];
      localStorage.setItem(TODOS, JSON.stringify(newToDo));
      return newToDo;
    },
    deleteToDoAction: (state, action) => {
      const id = action.payload;
      const newToDo = state.filter((toDo) => toDo.id !== id);
      localStorage.setItem(TODOS, JSON.stringify(newToDo));
      return newToDo;
    },
  },
});

const store = configureStore({
  reducer: toDoSlice.reducer,
});
export const { addToDoAction, deleteToDoAction } = toDoSlice.actions;
export default store;
