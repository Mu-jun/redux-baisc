// import { createSlice } from '@reduxjs/toolkit';
// import { configureStore } from '@reduxjs/toolkit';
import { legacy_createStore as createStore } from '@reduxjs/toolkit';

const form = document.querySelector('form');
const input = document.querySelector('input');
const ul = document.querySelector('ul');

const ADD_TODO = 'ADD_TODO';
const addToDoAction = (text) => {
  return { type: ADD_TODO, text: text };
};
const DELETE_TODO = 'DELETE_TODO';
const deleteToDoAction = (id) => {
  return { type: DELETE_TODO, id: +id };
};

const reducer = (state = [], action) => {
  console.log(action);
  switch (action.type) {
    case ADD_TODO:
      return [{ text: action.text, id: Date.now() }, ...state];
    case DELETE_TODO:
      return state.filter((toDo) => toDo.id !== action.id);
    default:
      return state;
  }
};
const store = createStore(reducer);

const dispatchAddToDo = (text) => {
  store.dispatch(addToDoAction(text));
};

const dispatchDeleteToDo = (e) => {
  const li = e.target.parentNode;
  store.dispatch(deleteToDoAction(li.id));
};

store.subscribe(() => {
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
});

const onSubmit = (e) => {
  e.preventDefault();
  const toDo = input.value;
  input.value = '';
  if (!toDo.trim()) return;
  dispatchAddToDo(toDo);
};

form.addEventListener('submit', onSubmit);
