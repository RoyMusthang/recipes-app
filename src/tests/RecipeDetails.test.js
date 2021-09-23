import React from 'react';
import { screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouterAndRedux from './helpers/renderWithRouterAndRedux';

const oneMeal = require('../../cypress/mocks/oneMeal');

describe('Página de detalhes das receitas', () => {
  const recipePhoto = 'recipe-photo';
  // const recipeTitle = 'recipe-title';
  // const shareBtnTestId = 'share-btn';
  // const favoriteBtnTestId = 'favorite-btn';
  // const recipeCategoryTestId = 'recipe-category';
  // const ingredientNameMeasureTestId = '0-ingredient-name-and-measure';
  // const instructionsTestId = 'instructions';
  // const videoTestId = 'video';
  // const recomendationCardTestId = 'recomendation-card';
  // const startRecipeBtnTestId = 'start-recipe-btn';

  describe('', () => {
    it('Deve possuir todos os atributos data-testid', async () => {
      const config = {
        initialState:
          { meals:
            { allMeals: oneMeal.meals } },
        initialEntries: ['comidas/52771'] };
      const { store } = renderWithRouterAndRedux(<App />, config);

      console.log(store.getState().meals.allMeals.length);
      const photo = await screen.findByTestId(recipePhoto);

      console.log(photo);
      expect(photo).toBeInTheDocument();
    });

    // it('', () => {

    // });
  });
});
