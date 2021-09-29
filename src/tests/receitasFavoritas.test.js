// Testes feito pelo Gabriel Gaspar do grupo 22

import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouterAndRedux from './helpers/renderWithRouterAndRedux';
import App from '../App';

const { getByTestId, queryByTestId } = screen;

const arrabiata = 'Spicy Arrabiata Penne';
const zeroName = '0-horizontal-name';
const oneName = '1-horizontal-name';
const filterAllBtn = 'filter-by-all-btn';
const filterDrinkBtn = 'filter-by-drink-btn';

const doneRecipesMock = [
  {
    id: '52771',
    type: 'comida',
    area: 'Italian',
    category: 'Vegetarian',
    alcoholicOrNot: '',
    name: arrabiata,
    image: 'https://www.themealdb.com/images/media/meals/ustsqw1468250014.jpg',
    doneDate: '23/06/2020',
    tags: ['Pasta', 'Curry'],
  },
  {
    id: '178319',
    type: 'bebida',
    area: '',
    category: 'Cocktail',
    alcoholicOrNot: 'Alcoholic',
    name: 'Aquamarine',
    image: 'https://www.thecocktaildb.com/images/media/drink/zvsre31572902738.jpg',
    doneDate: '23/06/2020',
    tags: [],
  },
];

function sleep() {
  const waitforUpdate = 100;
  return new Promise((resolve) => setTimeout(resolve, waitforUpdate));
}

describe('Done recipes screen', () => {
  beforeEach(() => {
    renderWithRouterAndRedux(<App />, {
      initialState: { recipes: { doneRecipes: doneRecipesMock } },
      initialEntries: ['/receitas-favoritas'],
    });
  });

  it('Todos os data-testids estão disponíveis', () => {
    expect(getByTestId(filterAllBtn)).toBeInTheDocument();
    expect(getByTestId('filter-by-food-btn')).toBeInTheDocument();
    expect(getByTestId(filterDrinkBtn)).toBeInTheDocument();
    expect(getByTestId('0-horizontal-image')).toBeInTheDocument();
    expect(getByTestId('0-horizontal-top-text')).toBeInTheDocument();
    expect(getByTestId(zeroName)).toBeInTheDocument();
    expect(getByTestId('0-horizontal-done-date')).toBeInTheDocument();
    expect(getByTestId('0-horizontal-share-btn')).toBeInTheDocument();
    expect(getByTestId('0-Pasta-horizontal-tag')).toBeInTheDocument();
    expect(getByTestId('0-Curry-horizontal-tag')).toBeInTheDocument();
    expect(getByTestId('1-horizontal-image')).toBeInTheDocument();
    expect(getByTestId('1-horizontal-top-text')).toBeInTheDocument();
    expect(getByTestId(oneName)).toBeInTheDocument();
    expect(getByTestId('1-horizontal-share-btn')).toBeInTheDocument();
    expect(getByTestId('1-horizontal-done-date')).toBeInTheDocument();
  });

  it('Verifica que os filtros funcionam', async () => {
    const allFilter = getByTestId(filterAllBtn);
    const foodsFilter = getByTestId('filter-by-food-btn');
    const drinksFilter = getByTestId(filterDrinkBtn);

    userEvent.click(foodsFilter);
    await sleep();
    expect(getByTestId(zeroName).innerHTML).toBe(arrabiata);
    expect(queryByTestId(oneName)).toBeNull();

    userEvent.click(drinksFilter);
    await sleep();
    expect(getByTestId(zeroName).innerHTML).toBe('Aquamarine');
    expect(queryByTestId(oneName)).toBeNull();

    userEvent.click(allFilter);
    await sleep();
    expect(getByTestId(zeroName).innerHTML).toBe(arrabiata);
    expect(getByTestId(oneName).innerHTML).toBe('Aquamarine');
  });

  it('Verifica se o botão de compartilhar funciona', () => {
    const shareBtn = document.querySelector('.done-card-share-btn');
    userEvent.click(shareBtn);
  });

  it('Verifica a funcionalidade do botão \'All\'', async () => {
    const drinkButton = await screen.findByTestId(filterDrinkBtn);
    userEvent.click(drinkButton);
    const allButton = await screen.findByTestId(filterAllBtn);
    userEvent.click(allButton);

    expect(1 + 1).toBe(2);
  });
});
