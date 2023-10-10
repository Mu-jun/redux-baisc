// import { createSlice } from '@reduxjs/toolkit';
// import { configureStore } from '@reduxjs/toolkit';
// import { legacy_createStore as createStore } from '@reduxjs/toolkit';

const form = document.querySelector('form');
const input = document.querySelector('input');
const ul = document.querySelector('ul');

const createTodo = (toDo) => {
  const li = document.createElement('li');
  li.innerText = toDo;
  ul.appendChild(li);
};

const onSubmit = (e) => {
  e.preventDefault();
  const toDo = input.value;
  input.value = '';
  createTodo(toDo);
};

form.addEventListener('submit', onSubmit);
