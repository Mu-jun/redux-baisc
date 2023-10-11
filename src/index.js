import { createSlice } from '@reduxjs/toolkit';
import { configureStore } from '@reduxjs/toolkit';
// import { legacy_createStore as createStore } from '@reduxjs/toolkit';

const form = document.querySelector('form');
const input = document.querySelector('input');
const ul = document.querySelector('ul');

const toDoSlice = createSlice({
  name: 'ToDos',
  initialState: [],
  reducers: {
    ADD_TODO: (state, action) => {
      return [{ text: action.payload, id: Date.now() }, ...state];
    },
    DELETE_TODO: (state, action) => {
      const id = +action.payload;
      return state.filter((toDo) => toDo.id !== id);
    },
  },
});
const { ADD_TODO, DELETE_TODO } = toDoSlice.actions;
const store = configureStore({
  reducer: toDoSlice.reducer,
});

const dispatchAddToDo = (text) => {
  store.dispatch(ADD_TODO(text));
};

const dispatchDeleteToDo = (e) => {
  const li = e.target.parentNode;
  store.dispatch(DELETE_TODO(li.id));
};

const paintToDo = () => {
  const toDos = store.getState();
  ul.innerText = '';
  toDos.forEach((toDo) => {
    const li = document.createElement('li');
    li.id = toDo.id;
    li.innerText = toDo.text;

    const btn = document.createElement('button');
    btn.innerText = 'DEL';
    btn.addEventListener('click', dispatchDeleteToDo);

    li.appendChild(btn);
    ul.appendChild(li);
  });
};

store.subscribe(paintToDo);

const onSubmit = (e) => {
  e.preventDefault();
  const toDo = input.value;
  input.value = '';
  if (!toDo.trim()) return;
  dispatchAddToDo(toDo);
};

form.addEventListener('submit', onSubmit);
