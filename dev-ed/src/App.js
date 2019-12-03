import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './actions';

function App() {
  const counter = useSelector(state => state.counter);
  const isLoggedIn = useSelector(state => state.isLoggedIn);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>Learn Redux</h1>
      <p>Counter: {counter}</p>
      <button type="button" onClick={() => dispatch(increment(5))}>
        +
      </button>
      <button type="button" onClick={() => dispatch(decrement(5))}>
        -
      </button>
      {isLoggedIn ? <p>You're logged in!</p> : <p>You're logged out :(</p>}
    </div>
  );
}

export default App;
