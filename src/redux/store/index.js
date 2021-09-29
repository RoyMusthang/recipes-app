import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducers from '../reducers';

const store = createStore(rootReducers, composeWithDevTools());

store.subscribe(() => {
  localStorage.inProgressRecipes = JSON.stringify(store.getState().user.inProgress);
  localStorage.favoriteRecipes = JSON.stringify(store.getState().user.favoriteRecipes);
  localStorage.doneRecipes = JSON.stringify(store.getState().user.doneRecipes);
});

export default store;
