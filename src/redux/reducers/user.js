const inProgress = (!JSON.parse(localStorage
  .getItem('inProgressRecipes'))) ? { meals: {}, cocktails: {} } : JSON
    .parse(localStorage.getItem('inProgressRecipes'));

const favoriteRecipes = (!JSON.parse(localStorage
  .getItem('favoriteRecipes'))) ? [] : JSON
    .parse(localStorage.getItem('favoriteRecipes'));

const INITIAL_STATE = {
  inProgress,
  favoriteRecipes,
  currentIngredients: [],
};

const user = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case 'MEAL_IN_PROGRESS':
    return { ...state,
      inProgress: {
        ...state.inProgress,
        meals: { ...state.inProgress.meals, [action.id]: [...action.payload] },
      } };
  case 'DRINK_IN_PROGRESS':
    return { ...state,
      inProgress: {
        ...state.inProgress,
        cocktails: { ...state.inProgress.cocktails, [action.id]: [...action.payload] },
      } };
  case 'CURRENT_INGREDIENTS':
    return { ...state, currentIngredients: action.payload };
  case 'FAVORITE':
    return { ...state, favoriteRecipes: [...state.favoriteRecipes, action.payload] };
  case 'REMOVE_FAVORITE':
    return { ...state, favoriteRecipes: action.payload };
  default:
    return state;
  }
};

export default user;
