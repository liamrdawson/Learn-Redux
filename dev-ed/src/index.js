import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore } from 'redux';
import App from './App';
import * as serviceWorker from './serviceWorker';

//  STORE -> GLOBALIZED STATE

//  ACTION INCREMENT
const increment = () => ({
  type: 'INCREMENT',
});

const decrement = () => ({
  type: 'DECREMENT',
});

//  REDUCER
const counter = (state = 0, action) => {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
  }
};

const store = createStore(counter);

//  Display this in console...
store.subscribe(() => console.log(store.getState()));

//  DISPATCH
store.dispatch(increment());
store.dispatch(decrement());
store.dispatch(decrement());

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
