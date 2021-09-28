import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouterAndRedux from './helpers/renderWithRouterAndRedux';

describe('Página de detalhes das receitas', () => {
  const recipePhotoTestId = 'recipe-photo';
  const recipeTitleTestId = 'recipe-title';
  const shareBtnTestId = 'share-btn';
  const favoriteBtnTestId = 'favorite-btn';
  const recipeCategoryTestId = 'recipe-category';
  const ingredientNameMeasureTestId = '0-ingredient-name-and-measure';
  const instructionsTestId = 'instructions';
  const videoTestId = 'video';
  const recomendationCardTestId = '0-recomendation-card';
  const startRecipeBtnTestId = 'start-recipe-btn';
  const comidasURL = '/comidas/52771';
  const bebidasURL = '/bebidas/178319';

  describe('Tela de comidas ', () => {
    it('Deve possuir todos os atributos data-testid', async () => {
      const { history } = renderWithRouterAndRedux(<App />);

      history.push(comidasURL);

      const recipePhoto = await screen.findByTestId(recipePhotoTestId);
      const title = await screen.findByTestId(recipeTitleTestId);
      const shareBtn = await screen.findByTestId(shareBtnTestId);
      const favoritesBtn = await screen.findByTestId(favoriteBtnTestId);
      const recipesCategory = await screen.findByTestId(recipeCategoryTestId);
      const ingredients = await screen.findByTestId(ingredientNameMeasureTestId);
      const video = await screen.findByTestId(videoTestId);
      const instructions = await screen.findByTestId(instructionsTestId);
      const recomendations = await screen.findByTestId(recomendationCardTestId);
      const startRecipeBtn = await screen.findByTestId(startRecipeBtnTestId);

      expect(recipePhoto).toBeInTheDocument();
      expect(title).toBeInTheDocument();
      expect(shareBtn).toBeInTheDocument();
      expect(favoritesBtn).toBeInTheDocument();
      expect(recipesCategory).toBeInTheDocument();
      expect(ingredients).toBeInTheDocument();
      expect(instructions).toBeInTheDocument();
      expect(recomendations).toBeInTheDocument();
      expect(startRecipeBtn).toBeInTheDocument();
      expect(video).toBeInTheDocument();
    });

    it('Deve ir para In Progress quando clicar em Iniciar Receita', async () => {
      const { history } = renderWithRouterAndRedux(<App />);

      history.push(comidasURL);

      const startRecipeBtn = await screen.findByTestId(startRecipeBtnTestId);

      expect(startRecipeBtn).toBeInTheDocument();
      expect(startRecipeBtn).toHaveTextContent('Iniciar Receita');

      userEvent.click(startRecipeBtn);

      const { pathname } = history.location;

      expect(pathname).toBe('/comidas/52771/in-progress');

      history.push(comidasURL);

      const continueBtn = await screen.findByRole('button',
        { name: 'Continuar Receita' });

      expect(continueBtn).toBeInTheDocument();
    });
  });

  describe('Tela de bebidas ', () => {
    it('Deve possuir todos os atributos data-testid', async () => {
      const { history } = renderWithRouterAndRedux(<App />);

      history.push(bebidasURL);

      const recipePhoto = await screen.findByTestId(recipePhotoTestId);
      const title = await screen.findByTestId(recipeTitleTestId);
      const shareBtn = await screen.findByTestId(shareBtnTestId);
      const favoritesBtn = await screen.findByTestId(favoriteBtnTestId);
      const recipesCategory = await screen.findByTestId(recipeCategoryTestId);
      const ingredients = await screen.findByTestId(ingredientNameMeasureTestId);
      const instructions = await screen.findByTestId(instructionsTestId);
      const recomendations = await screen.findByTestId(recomendationCardTestId);
      const startRecipeBtn = await screen.findByTestId(startRecipeBtnTestId);

      expect(recipePhoto).toBeInTheDocument();
      expect(title).toBeInTheDocument();
      expect(shareBtn).toBeInTheDocument();
      expect(favoritesBtn).toBeInTheDocument();
      expect(recipesCategory).toBeInTheDocument();
      expect(ingredients).toBeInTheDocument();
      expect(instructions).toBeInTheDocument();
      expect(recomendations).toBeInTheDocument();
      expect(startRecipeBtn).toBeInTheDocument();
    });

    it('Deve ir para In Progress quando clicar em Iniciar Receita', async () => {
      const { history } = renderWithRouterAndRedux(<App />);

      history.push(bebidasURL);

      const startRecipeBtn = await screen.findByTestId(startRecipeBtnTestId);

      expect(startRecipeBtn).toBeInTheDocument();
      expect(startRecipeBtn).toHaveTextContent('Iniciar Receita');

      userEvent.click(startRecipeBtn);

      const { pathname } = history.location;

      expect(pathname).toBe('/bebidas/178319/in-progress');

      history.push(bebidasURL);

      const continueBtn = await screen.findByRole('button',
        { name: 'Continuar Receita' });

      expect(continueBtn).toBeInTheDocument();
    });

    /*
    Tentativa de cobrir a linha 36 dos arquivos de detalhe:

    it('Deve ter os ingredientes e medidas', async () => {
      //  https://www.leighhalliday.com/mock-fetch-jest
      global.fetch = jest.fn(() => Promise.resolve({
        json: () => Promise.resolve(oneMeal),
      }));
      const { history } = renderWithRouterAndRedux(<App />);

      history.push(comidasURL);

      const firstIngredient = await screen.findByTestId(ingredientNameMeasureTestId);

      expect(firstIngredient).toBeInTheDocument();
      expect(firstIngredient).toHaveTextContent('penne rigate 1 pound');

    });

    */
  });
});
