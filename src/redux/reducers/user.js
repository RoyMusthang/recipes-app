const inProgress = (!JSON.parse(localStorage
  .getItem('inProgressRecipes'))) ? { meals: {}, drinks: {} } : JSON
    .parse(localStorage.getItem('inProgressRecipes'));

const INITIAL_STATE = {
  inProgress,
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
        drinks: { ...state.inProgress.drinks, [action.id]: [...action.payload] },
      } };
  default:
    return state;
  }
};

export default user;
