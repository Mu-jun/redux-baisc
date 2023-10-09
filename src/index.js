import { createSlice } from '@reduxjs/toolkit';
import { configureStore } from '@reduxjs/toolkit';

const add = document.getElementById('add');
const minus = document.getElementById('minus');
const number = document.querySelector('span');

number.innerText = 0;

const countSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
  },
  reducers: {
    ADD: (count) => {
      count.value += 1;
    },
    MINUS: (count) => {
      count.value -= 1;
    },
  },
});
const countStore = configureStore({
  reducer: countSlice.reducer,
});

const onChange = () => {
  console.log(countStore.getState().value);
  number.innerText = countStore.getState().value;
};
countStore.subscribe(onChange);

const { ADD, MINUS } = countSlice.actions;

const handleAdd = () => {
  countStore.dispatch(ADD());
};
const handleMinus = () => {
  countStore.dispatch(MINUS());
};
add.addEventListener('click', handleAdd);
minus.addEventListener('click', handleMinus);
