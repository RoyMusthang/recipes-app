const INITIAL_STATE = {
  allDrinks: [],
  error: '',
  defaultURL: 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=',
  drinkIngredients: [],
};

const drinks = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case 'DRINK_URL':
    return { ...state, defaultURL: action.payload };
  case 'DRINKS_REQUESTS_SUCCESS':
    return { ...state, allDrinks: action.payload };
  case 'DRINKS_REQUESTS_ERROR':
    return { ...state, error: action.error };
  case 'DRINK_INGREDIENTS':
    return { ...state, drinkIngredients: action.payload };
  default:
    return state;
  }
};

export default drinks;
