# **Code Explained**

Here's a simple implementation of Redux where we use it to manage the state  of a counter (integer). I've used `npx create-react-app` to spin this project up, so we're looking at Redux within the context of a React project, although Redux itself is agnostic and can be used in conjunction with plain JavaScript or any JavaScript framework or library.

Before we start, lets look at how we want our initial state to look. We want to bear this in mind while we're constructing our actions and reducers.
```javascript
{
    counter: 0,
    isLoggedIn: false
}
```

## Action
**Actions** are plain JavaScript objects which send data from the application to the store (global state). Actions usually have a payload of data and always have a type. 

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
```

<!-- To initiate our dispatch we need to pass the result to Redux' `dispatch()` function. In `react-redux` we can use the `useDispatch()` hook. -->

## Reducer
Now we need to define our **reducers**, which will specify how our state updates when we dispatch our actions. **The reducer is a pure function that takes the previous state and an action, and returns the next state**.
```javascript
    const reducer = (previousState, action) => newState;
```
We start building a reducer by first specfying our initial state. As we want to build a recucer to take care of our counter state, this will look like...
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