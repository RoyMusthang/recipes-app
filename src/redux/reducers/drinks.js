const INITIAL_STATE = {
  allDrinks: [],
  error: '',
};

const drinks = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case 'DRINKS_REQUESTS_SUCCESS':
    return { ...state, allDrinks: action.payload };
  case 'DRINKS_REQUESTS_ERROR':
    return { ...state, error: action.error };
  default:
    return state;
  }
};

export default drinks;
