# **Code Explained**

Here's a simple implementation of Redux where we use it to manage the state  of a counter. I've used `create-react-app` to spin this project up, so we're looking at Redux within the context of a React project, although Redux itself is agnostic and can be used in conjunction with plain JavaScript or any JavaScript framework or library.

Before we start, lets look at how we want our initial state to look. We want to bear this in mind while we're constructing our actions and reducers.

```javascript
{
    counter: 0,
    isLoggedIn: false
}
```
To provide some context for the code in this readme, here's to folder structure for our Redux app.

```
src/ ___ __ actions/ ___ index.js
        |
        |__ reducers/ __ counter.js
        |            |
        |            |__ isLogged.js
        |            |
        |            |__ index.js
        |
        |__ App.js
        |
        |__ idnex.js
```

## Action

**Actions** are plain JavaScript objects which send data from the application to the store (global state). Actions usually have a payload of data and always have a type. Actions represent the facts about "what happened".

Here are actions which represent adding or subtracting from a counter. When an action is held in a function, this is called an **action creator**, where we can pass in data and return an action.

```javascript
    export const increment = num => (
        type: 'INCREMENT',
        payload: num
    );

    export const decrement = num => (
        type: 'DECREMENT',
        payload: num
    );

    export const inOut = () => ({
        type: 'INOUT',
    });

```

<!-- To initiate our dispatch we need to pass the result to Redux' `dispatch()` function. In `react-redux` we can use the `useDispatch()` hook. -->


## Reducer

Now we need to define our **reducers**, which will specify how our state updates when we dispatch our actions. **The reducer is a pure function that takes the previous state and an action, and returns the next state**.

```javascript
    const reducer = (previousState, action) => newState;
```

We start building a reducer by first specfying our initial state. As we want to build a recucer to take care of our counter state, this will look like below.

```javascript
    const counterReducer = (state = 0, action) => {
        switch (action.type) {
            case 'INCREMENT':
                return state + action.payload;
            case 'DECREMENT':
                return state - action.payload;
            default:
                return state;
        }
    };
```

A second reducer to take care of the isLoggedIn state will look like...

```javascript
    const isLoggedInReducer = (state = false, action) => {
        switch (action.type) {
            case 'INOUT':
                return !state;
            default:
                return state;
        }
    };

```
    💡Note that each reducer is managing its own part of the global state. The `state` parameter is different for every reducer, and corresponds to the part of the state it manages.

Now we can use `combineReducers()` to call our reducers with the slices of state selected according to their keys, and combines their results into a single object again.

```javascript
    const allReducers = combineReducers({
        counter: counterReducer,
        isLoggedIn: isLoggedInReducer,
    });
```


## Store

The store is the object that brings our actions and reducers together and has the following responsibilities:
* Holds the application state.
* Allows access to state via `getState()`.
* Allows state to be updated via `dispatch(action)`.
* Registers listeners via `subscribe(listener)`.
* Handles the unregistering of lisetners via the function returned by `subscribe(listener)`.

We've already combined our separate reducers into one, so we will import that into our store when we use `createStore()`.

```javascript
    import { createStore } from 'redux';
    import allReducers from './reducers';

    const store = createStore(allReducers);
```


## Dispatch our Actions
