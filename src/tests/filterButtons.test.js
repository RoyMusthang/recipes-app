import React from 'react';
import renderWithRouter from './helpers/renderWithRouterAndRedux';
import App from '../App';

describe('Teste de filtro de receita principal comidas', () => {
  it('Testando se todo os botôes de filtro estão presente na tela principal de comidas',
    async () => {
      const { history, findByTestId } = renderWithRouter(<App />);
      history.push('/comidas');
      const filterAll = await findByTestId('All-category-filter');
      const filterBeef = await findByTestId('Beef-category-filter');
      const filterBreakfast = await findByTestId('Breakfast-category-filter');
      const filterChicken = await findByTestId('Chicken-category-filter');
      const filterDessert = await findByTestId('Dessert-category-filter');
      const FilterGoat = await findByTestId('Goat-category-filter');
      expect(filterBreakfast).toBeInTheDocument();
      expect(filterChicken).toBeInTheDocument();
      expect(filterDessert).toBeInTheDocument();
      expect(FilterGoat).toBeInTheDocument();
      expect(filterAll).toBeInTheDocument();
      expect(filterBeef).toBeInTheDocument();
    });
});

describe('Teste de filtro de receita principal bebidas', () => {
  it('Testando se todo os botôes de filtro estão presente na tela principal de bebidas',
    async () => {
      const { history, findByTestId } = renderWithRouter(<App />);
      history.push('/bebidas');
      const filterAll = await findByTestId('All-category-filter');
      const filterOrdinary = await findByTestId('Ordinary Drink-category-filter');
      const filterCoctail = await findByTestId('Cocktail-category-filter');
      const filterMilk = await findByTestId('Milk / Float / Shake-category-filter');
      const filterOther = await findByTestId('Other/Unknown-category-filter');
      const FilterCocoa = await findByTestId('Cocoa-category-filter');
      expect(filterCoctail).toBeInTheDocument();
      expect(filterMilk).toBeInTheDocument();
      expect(filterOther).toBeInTheDocument();
      expect(FilterCocoa).toBeInTheDocument();
      expect(filterAll).toBeInTheDocument();
      expect(filterOrdinary).toBeInTheDocument();
    });
});
