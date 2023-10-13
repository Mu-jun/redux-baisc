import { createSlice, configureStore } from '@reduxjs/toolkit';

const toDoSlice = createSlice({
  name: 'ToDos',
  initialState: [],
  reducers: {
    addToDoAction: (state, action) => {
      const text = action.payload;
      return [{ text, id: Date.now() }, ...state];
    },
    deleteToDoAction: (state, action) => {
      const id = action.payload;
      return state.filter((toDo) => toDo.id === id);
    },
  },
});

const store = configureStore({
  reducer: toDoSlice.reducer,
});
export const { addToDoAction, deleteToDoAction } = toDoSlice.actions;
export default store;
