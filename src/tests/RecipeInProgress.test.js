import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouterAndRedux from './helpers/renderWithRouterAndRedux';

describe('Página de receitas em progresso', () => {
  const recipePhotoTestId = 'recipe-photo';
  const recipeTitleTestId = 'recipe-title';
  const shareBtnTestId = 'share-btn';
  const favoriteBtnTestId = 'favorite-btn';
  const recipeCategoryTestId = 'recipe-category';
  const instructionsTestId = 'instructions';
  const finishButtonTestId = 'finish-recipe-btn';

  it('Deve ter todos os elementos na página de uma receita de comida', async () => {
    renderWithRouterAndRedux(<App />, { initialEntries: ['/comidas/52771/in-progress'] });

    const recipePhoto = await screen.findByTestId(recipePhotoTestId);
    const recipeTitle = await screen.findByTestId(recipeTitleTestId);
    const shareBtn = await screen.findByTestId(shareBtnTestId);
    const favoriteBtn = await screen.findByTestId(favoriteBtnTestId);
    const recipeCategory = await screen.findByTestId(recipeCategoryTestId);
    const ingredientStep = await screen.findByLabelText(/olive oil/i);
    const instructions = await screen.findByTestId(instructionsTestId);
    const finishBtn = await screen.findByTestId(finishButtonTestId);

    expect(recipePhoto).toBeInTheDocument();
    expect(recipeTitle).toBeInTheDocument();
    expect(shareBtn).toBeInTheDocument();
    expect(favoriteBtn).toBeInTheDocument();
    expect(recipeCategory).toBeInTheDocument();
    expect(ingredientStep).toBeInTheDocument();
    expect(instructions).toBeInTheDocument();
    expect(finishBtn).toBeInTheDocument();
  });

  it('Deve ter todos os elementos na página de uma receita de bebida', async () => {
    renderWithRouterAndRedux(<App />,
      { initialEntries: ['/bebidas/178319/in-progress'] });

    const recipePhoto = await screen.findByTestId(recipePhotoTestId);
    const recipeTitle = await screen.findByTestId(recipeTitleTestId);
    const shareBtn = await screen.findByTestId(shareBtnTestId);
    const favoriteBtn = await screen.findByTestId(favoriteBtnTestId);
    const recipeCategory = await screen.findByTestId(recipeCategoryTestId);
    const ingredientStep = await screen.findByLabelText(/Hpnotiq/i);
    const instructions = await screen.findByTestId(instructionsTestId);
    const finishBtn = await screen.findByTestId(finishButtonTestId);

    expect(recipePhoto).toBeInTheDocument();
    expect(recipeTitle).toBeInTheDocument();
    expect(shareBtn).toBeInTheDocument();
    expect(favoriteBtn).toBeInTheDocument();
    expect(recipeCategory).toBeInTheDocument();
    expect(ingredientStep).toBeInTheDocument();
    expect(instructions).toBeInTheDocument();
    expect(finishBtn).toBeInTheDocument();
  });
});
