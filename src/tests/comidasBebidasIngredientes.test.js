import React from 'react';
import { screen } from '@testing-library/dom';
// import userEvent from '@testing-library/user-event';
import renderWithRouterAndRedux from './helpers/renderWithRouterAndRedux';
import App from '../App';

import meals from '../../cypress/mocks/meals';

describe('Página \'Comidas Por Ingredientes\'', () => {
  it('Testa os 12 cards iniciais', async () => {
    renderWithRouterAndRedux(<App />,
      { initialEntries: ['/explorar/comidas/ingredientes'] });
    const title = await screen.findByTestId('American-option');
    expect(title).toBeInTheDocument();

    meals.meals.forEach(async ({ strMeal }, index) => {
      const titleCard = await screen.findByTestId(`${index}-card-name`);
      expect(titleCard).toBe(strMeal);
    });
  });
});
