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
  const comidaURL = '/comidas/52771/in-progress';
  const bebidaURL = '/bebidas/178319/in-progress';

  it('Deve ter todos os elementos na página de uma receita de comida', async () => {
    renderWithRouterAndRedux(<App />,
      { initialEntries: [comidaURL] });

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
      { initialEntries: [bebidaURL] });

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

  it('Deve ter um checkbox para cada item dos ingredientes de comida', async () => {
    renderWithRouterAndRedux(<App />,
      { initialEntries: [comidaURL] });

    const ingredientsStep = await screen.findAllByRole('listitem');
    const checkbox = await screen.findAllByRole('checkbox');
    const EIGHT = 8;

    expect(ingredientsStep).toHaveLength(EIGHT);
    expect(checkbox).toHaveLength(EIGHT);
  });

  it('Deve ter um checkbox para cada item dos ingredientes de bebida', async () => {
    renderWithRouterAndRedux(<App />,
      { initialEntries: [bebidaURL] });

    const ingredientsStep = await screen.findAllByRole('listitem');
    const checkbox = await screen.findAllByRole('checkbox');
    const THREE = 3;

    expect(ingredientsStep).toHaveLength(THREE);
    expect(checkbox).toHaveLength(THREE);
  });

  it('Deve ser possível marcar o ingrediente quando clicado no checkbox', async () => {
    renderWithRouterAndRedux(<App />,
      { initialEntries: [comidaURL] });

    const firstIngredient = await screen.findByRole('checkbox', { name: /penne/i });

    expect(firstIngredient).not.toBeChecked();

    userEvent.click(firstIngredient);

    expect(firstIngredient).toBeChecked();
  });

  it('Deve ser possível marcar e desmarcar todos os ingredientes', async () => {
    renderWithRouterAndRedux(<App />,
      { initialEntries: [comidaURL] });

    const firstIngredient = await screen.findByRole('checkbox', { name: /penne/i });
    const lastIngredient = await screen.findByRole('checkbox', { name: /Parmigiano/i });

    userEvent.click(firstIngredient);
    userEvent.click(lastIngredient);
    userEvent.click(lastIngredient);

    expect(firstIngredient).toBeChecked();
    expect(lastIngredient).not.toBeChecked();
  });

  it('O botão de finalizar deve estar inicialmente desabilitado', async () => {
    renderWithRouterAndRedux(<App />,
      { initialEntries: [comidaURL] });

    const finishBtn = await screen.findByTestId(finishButtonTestId);

    expect(finishBtn).not.toBeEnabled();
  });

  it('Deve habilitar o botão de finalizar', async () => {
    renderWithRouterAndRedux(<App />,
      { initialEntries: [comidaURL] });

    const firstIngredient = await screen.findByRole('checkbox', { name: /penne/i });
    const secondIngredient = await screen.findByRole('checkbox', { name: /olive/i });
    const thirdIngredient = await screen.findByRole('checkbox', { name: /garlic/i });
    const fourthIngredient = await screen.findByRole('checkbox', { name: /chopped/i });
    const fifthIngredient = await screen.findByRole('checkbox', { name: /red chile/i });
    const sixthIngredient = await screen.findByRole('checkbox', { name: /italian/i });
    const seventhIngredient = await screen.findByRole('checkbox', { name: /basil/i });
    const lastIngredient = await screen.findByRole('checkbox', { name: /Parmigiano/i });
    const finishBtn = await screen.findByTestId(finishButtonTestId);

    expect(finishBtn).not.toBeEnabled();

    userEvent.click(firstIngredient);
    userEvent.click(secondIngredient);
    userEvent.click(thirdIngredient);
    userEvent.click(fourthIngredient);
    userEvent.click(fifthIngredient);
    userEvent.click(sixthIngredient);
    userEvent.click(seventhIngredient);
    userEvent.click(lastIngredient);

    expect(finishBtn).toBeEnabled();
  });

  it('Deve mudar pra Receita Feita quando Finalizado é clicado', async () => {
    const { history } = renderWithRouterAndRedux(<App />,
      { initialEntries: [comidaURL] });

    const firstIngredient = await screen.findByRole('checkbox', { name: /penne/i });
    const secondIngredient = await screen.findByRole('checkbox', { name: /olive/i });
    const thirdIngredient = await screen.findByRole('checkbox', { name: /garlic/i });
    const fourthIngredient = await screen.findByRole('checkbox', { name: /chopped/i });
    const fifthIngredient = await screen.findByRole('checkbox', { name: /red chile/i });
    const sixthIngredient = await screen.findByRole('checkbox', { name: /italian/i });
    const seventhIngredient = await screen.findByRole('checkbox', { name: /basil/i });
    const lastIngredient = await screen.findByRole('checkbox', { name: /Parmigiano/i });
    const finishBtn = await screen.findByTestId(finishButtonTestId);

    userEvent.click(firstIngredient);
    userEvent.click(secondIngredient);
    userEvent.click(thirdIngredient);
    userEvent.click(fourthIngredient);
    userEvent.click(fifthIngredient);
    userEvent.click(sixthIngredient);
    userEvent.click(seventhIngredient);
    userEvent.click(lastIngredient);

    expect(finishBtn).toBeEnabled();

    userEvent.click(finishBtn);

    const { pathname } = history.location;

    expect(pathname).toBe('/receitas-feitas');
  });
});
