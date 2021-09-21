import React from 'react';
import { render } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createMemoryHistory } from 'history';
import { createStore } from 'redux';
import rootReducer from '../../redux/reducers';

const renderWithRouterAndRedux = (component, {
  initialState = {},
  store = createStore(rootReducer, initialState),
  initialEntries = ['/'],
} = {}) => {
  const history = createMemoryHistory({ initialEntries });
  return ({
    ...render(
      <Router history={ history }>
        <Provider store={ store }>
          {component}
        </Provider>
      </Router>,
    ),
    store,
    history,
  });
};

export default renderWithRouterAndRedux;
