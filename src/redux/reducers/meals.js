const INITIAL_STATE = {
  allMeals: [],
  error: '',
  defaultURL: 'https://www.themealdb.com/api/json/v1/1/search.php?s=',
  mealIngredients: [],
};

const meals = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case 'MEAL_URL':
    return { ...state, defaultURL: action.payload };
  case 'MEALS_REQUESTS_SUCCESS':
    return { ...state, allMeals: action.payload };
  case 'MEALS_REQUESTS_ERROR':
    return { ...state, error: action.error };
  case 'MEAL_INGREDIENTS':
    return { ...state, mealIngredients: action.payload };
  default:
    return state;
  }
};

export default meals;
