import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducers from '../reducers';

const store = createStore(rootReducers, composeWithDevTools());

store.subscribe(() => {
  localStorage.inProgressRecipes = JSON.stringify(store.getState().user.inProgress);
});

export default store;
