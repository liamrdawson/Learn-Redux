export const increment = num => ({
  type: 'INCREMENT',
  payload: num,
});

export const decrement = num => ({
  type: 'DECREMENT',
  payload: num,
});

export const inOut = () => ({
  type: 'INOUT',
});
