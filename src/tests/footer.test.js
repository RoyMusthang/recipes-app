import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouterAndRedux from './helpers/renderWithRouterAndRedux';

describe('Footer', () => {
  const drinkPathname = 'drinks-bottom-btn';
  const foodPathname = 'food-bottom-btn';
  const explorePathname = 'explore-bottom-btn';
  const pageTitleDataTestId = 'page-title';
  const hasFooter = () => {
    const drinkLink = screen.queryByTestId(drinkPathname);
    const mealLink = screen.queryByTestId(foodPathname);
    const exploreLink = screen.queryByTestId(explorePathname);

    expect(drinkLink).toBeInTheDocument();
    expect(mealLink).toBeInTheDocument();
    expect(exploreLink).toBeInTheDocument();
  };
  const hasNoFooter = () => {
    const drinkLink = screen.queryByTestId(drinkPathname);
    const mealLink = screen.queryByTestId(foodPathname);
    const exploreLink = screen.queryByTestId(explorePathname);

    expect(drinkLink).toBe(null);
    expect(mealLink).toBe(null);
    expect(exploreLink).toBe(null);
  };

  describe('Exibe o \'Footer\' em cada página', () => {
    it('Deve ter o \'footer\' em Comidas', () => {
      renderWithRouterAndRedux(<App />, { initialEntries: ['/comidas'] });

      hasFooter();
    });

    it('Deve ter o \'footer\' em Bebidas', () => {
      renderWithRouterAndRedux(<App />, { initialEntries: ['/bebidas'] });

      hasFooter();
    });

    it('Não deve ter o \'footer\' nos detalhes de bebida', () => {
      renderWithRouterAndRedux(<App />, { initialEntries: ['/bebidas/178319'] });

      hasNoFooter();
    });

    it('Não deve ter o \'footer\' nos detalhes de comida', () => {
      renderWithRouterAndRedux(<App />, { initialEntries: ['/comidas/52771'] });

      hasNoFooter();
    });

    it('Não tem o \'footer\' na tela de receita em processo de comida', () => {
      renderWithRouterAndRedux(<App />,
        { initialEntries: ['/comidas/52771/in-progress'] });

      hasNoFooter();
    });

    it('Não tem o \'footer\' na tela de receita em processo de bebida', () => {
      renderWithRouterAndRedux(<App />,
        { initialEntries: ['/bebidas/178319/in-progress'] });

      hasNoFooter();
    });

    it('Tem o \'footer\' na tela de explorar', () => {
      renderWithRouterAndRedux(<App />, { initialEntries: ['/explorar'] });

      hasFooter();
    });

    it('Tem o \'footer\' na tela de explorar comidas', () => {
      renderWithRouterAndRedux(<App />, { initialEntries: ['/explorar/comidas'] });

      hasFooter();
    });

    it('Tem o \'footer\' na tela de explorar bebidas', () => {
      renderWithRouterAndRedux(<App />, { initialEntries: ['/explorar/bebidas'] });

      hasFooter();
    });

    it('Tem o \'footer\' em explorar comidas por ingrediente', () => {
      renderWithRouterAndRedux(<App />,
        { initialEntries: ['/explorar/comidas/ingredientes'] });

      hasFooter();
    });

    it('Tem o \'footer\' em explorar bebidas por ingrediente', () => {
      renderWithRouterAndRedux(<App />,
        { initialEntries: ['/explorar/bebidas/ingredientes'] });

      hasFooter();
    });

    it('Tem o \'footer\' em explorar comidas por local de origem', () => {
      renderWithRouterAndRedux(<App />,
        { initialEntries: ['/explorar/comidas/area'] });

      hasFooter();
    });

    it('Tem o \'footer\' na tela de perfil', () => {
      renderWithRouterAndRedux(<App />,
        { initialEntries: ['/perfil'] });

      hasFooter();
    });

    it('Não tem o \'footer\' na tela de receitas favoritas', () => {
      renderWithRouterAndRedux(<App />,
        { initialEntries: ['/receitas-favoritas'] });

      hasNoFooter();
    });

    it('Não tem o \'footer\' na tela de receitas favoritas', () => {
      renderWithRouterAndRedux(<App />,
        { initialEntries: ['/receitas-feitas'] });

      hasNoFooter();
    });
  });

  describe('Os Links no \'Footer\' levam para os lugares corretos', () => {
    it('Leva para a tela de comidas', () => {
      renderWithRouterAndRedux(<App />,
        { initialEntries: ['/bebidas'] });

      const mealLink = screen.queryByTestId(foodPathname);
      userEvent.click(mealLink);

      const { innerHTML } = screen.getByTestId(pageTitleDataTestId);
      expect(innerHTML).toBe('Comidas');
    });
    it('Leva para a tela de bebidas', () => {
      renderWithRouterAndRedux(<App />,
        { initialEntries: ['/comidas'] });

      const drinkLink = screen.queryByTestId(drinkPathname);
      userEvent.click(drinkLink);

      const { innerHTML } = screen.getByTestId(pageTitleDataTestId);
      expect(innerHTML).toBe('Bebidas');
    });
    it('Leva para a tela de explorar', () => {
      renderWithRouterAndRedux(<App />,
        { initialEntries: ['/perfil'] });

      const exploreLink = screen.queryByTestId(explorePathname);
      userEvent.click(exploreLink);

      const { innerHTML } = screen.getByTestId(pageTitleDataTestId);
      expect(innerHTML).toBe('Explorar');
    });
  });
});
