import React from 'react';
import { screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
// import copy from 'clipboard-copy';
import renderWithRouterAndRedux from './helpers/renderWithRouterAndRedux';
import App from '../App';
import shareButton from '../images/shareIcon.svg';

jest.mock('clipboard-copy', () => jest.fn());

const filterAll = 'filter-by-all-btn';
const filterFood = 'filter-by-food-btn';
const filterDrink = 'filter-by-drink-btn';
const firstCardImage = '0-horizontal-image';
const firstCardText = '0-horizontal-top-text';
const firstCardName = '0-horizontal-name';
const firstCardDate = '0-horizontal-done-date';
const firstCardShareButton = '0-horizontal-share-btn';
const firstCardTag1 = '0-Pasta-horizontal-tag';
const firstCardTag2 = '0-Curry-horizontal-tag';
const secondCardImage = '1-horizontal-image';
const secondCardText = '1-horizontal-top-text';
const secondCardName = '1-horizontal-name';
const secondCardDate = '1-horizontal-done-date';
const secondCardShareButton = '1-horizontal-share-btn';

const doneRecipesPage = '/receitas-feitas';

const doneRecipes = [
  {
    id: '52771',
    type: 'comida',
    area: 'Italian',
    category: 'Vegetarian',
    alcoholicOrNot: '',
    name: 'Spicy Arrabiata Penne',
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

describe('54 - Verifica se os elementos foram criados', () => {
  beforeEach(() => localStorage.setItem('doneRecipes', JSON.stringify(doneRecipes)));
  afterEach(() => localStorage.clear());

  it('Verifica elementos de card de comida e bebida', () => {
    renderWithRouterAndRedux(<App />, { initialEntries: [doneRecipesPage] });

    expect(screen.getByTestId(filterAll)).toBeInTheDocument();
    expect(screen.getByTestId(filterFood)).toBeInTheDocument();
    expect(screen.getByTestId(filterDrink)).toBeInTheDocument();

    expect(screen.getByTestId(firstCardImage)).toBeInTheDocument();
    expect(screen.getByTestId(firstCardText)).toBeInTheDocument();
    expect(screen.getByTestId(firstCardName)).toBeInTheDocument();
    expect(screen.getByTestId(firstCardDate)).toBeInTheDocument();
    expect(screen.getByTestId(firstCardShareButton)).toBeInTheDocument();
    expect(screen.getByTestId(firstCardTag1)).toBeInTheDocument();
    expect(screen.getByTestId(firstCardTag2)).toBeInTheDocument();

    expect(screen.getByTestId(secondCardImage)).toBeInTheDocument();
    expect(screen.getByTestId(secondCardText)).toBeInTheDocument();
    expect(screen.getByTestId(secondCardName)).toBeInTheDocument();
    expect(screen.getByTestId(secondCardDate)).toBeInTheDocument();
    expect(screen.getByTestId(secondCardShareButton)).toBeInTheDocument();
  });
});

describe('55 - Verifica contéudo elementos de comida', () => {
  beforeEach(() => localStorage.setItem('doneRecipes', JSON.stringify(doneRecipes)));
  afterEach(() => localStorage.clear());

  it('Verifica elementos de card de comida', () => {
    renderWithRouterAndRedux(<App />, { initialEntries: [doneRecipesPage] });

    expect(screen.getByTestId(firstCardImage))
      .toHaveProperty('src', doneRecipes[0].image);
    expect(screen.getByTestId(firstCardText))
      .toHaveTextContent(`${doneRecipes[0].area} - ${doneRecipes[0].category}`);
    expect(screen.getByTestId(firstCardName)).toHaveTextContent(doneRecipes[0].name);
    expect(screen.getByTestId(firstCardDate)).toHaveTextContent(doneRecipes[0].doneDate);
    expect(screen.getByTestId(firstCardShareButton).firstChild)
      .toHaveProperty('src', `http://localhost/${shareButton}`);
    expect(screen.getByTestId(firstCardTag1)).toHaveTextContent(doneRecipes[0].tags[0]);
    expect(screen.getByTestId(firstCardTag2)).toHaveTextContent(doneRecipes[0].tags[1]);
  });
});
