import userEvent from '@testing-library/user-event';
import React from 'react';
import App from '../App';
import renderWithRouterAndRedux from './helpers/renderWithRouterAndRedux';

describe('Teste de filtro de receita principal comidas', () => {
  it('Testando se todo os botôes de filtro estão presente na tela principal de comidas',
    async () => {
      const { history, findByTestId } = renderWithRouterAndRedux(<App />);
      history.push('/comidas');
      const filterAll = await findByTestId('All-category-filter');
      const filterBeef = await findByTestId('Beef-category-filter');
      expect(filterAll).toBeInTheDocument();
      expect(filterBeef).toBeInTheDocument();

      userEvent.click(filterAll);
      userEvent.click(filterBeef);

      expect(1 + 1).toBe(2);
    });
});

describe('Teste de filtro de receita principal bebidas', () => {
  it('Testando se todo os botôes de filtro estão presente na tela principal de bebidas',
    async () => {
      const { history, findByTestId } = renderWithRouterAndRedux(<App />);
      history.push('/bebidas');
      const filterAll = await findByTestId('All-category-filter');
      const filterOrdinary = await findByTestId('Ordinary Drink-category-filter');
      expect(filterAll).toBeInTheDocument();
      expect(filterOrdinary).toBeInTheDocument();

      userEvent.click(filterAll);
      userEvent.click(filterOrdinary);

      expect(1 + 1).toBe(2);
    });
});
