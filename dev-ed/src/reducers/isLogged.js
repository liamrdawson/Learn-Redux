const isLoggedInReducer = (state = false, action) => {
  switch (action.type) {
    case 'INOUT':
      return !state;
    default:
      return state;
  }
};

export default isLoggedInReducer;
