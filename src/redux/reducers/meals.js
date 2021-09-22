const INITIAL_STATE = {
  allMeals: [],
  error: '',
};

const meals = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case 'MEALS_REQUESTS_SUCCESS':
    return { ...state, allMeals: action.payload };
  case 'MEALS_REQUESTS_ERROR':
    return { ...state, error: action.error };
  default:
    return state;
  }
};

export default meals;
