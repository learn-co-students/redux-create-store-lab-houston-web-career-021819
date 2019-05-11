function countReducer(state = 0, action) {
  switch (action.type) {
    case 'INCREMENT_COUNT':
      return state + 1;
    case 'DECREMENT_COUNT':
      return state - 1;
    default:
      console.log(state)
      return state;
  }
}

export default countReducer;
