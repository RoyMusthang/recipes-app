import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouterAndRedux from './helpers/renderWithRouterAndRedux';

describe('Header', () => {
  const hasNoHeader = () => {
    const headerTitle = screen.queryByRole('heading', {
      name: 'xablau' });
    const profileInput = screen.queryByRole('img', {
      name: /profile icon/i });
    const searchInput = screen.queryByRole('button', {
      name: /buscar/i });

    expect(headerTitle).toBe(null);
    expect(profileInput).toBe(null);
    expect(searchInput).toBe(null);
  };

  const hasHeader = (title, hasSearch = true) => {
    const headerTitle = screen.getByRole('heading', {
      name: title });
    const profileInput = screen.getByRole('img', {
      name: /profile icon/i });
    const searchInput = hasSearch ? screen.getByRole('button', {
      name: /buscar/i }) : null;

    expect(headerTitle).toBeInTheDocument();
    expect(profileInput).toBeInTheDocument();

    if (!searchInput) {
      expect(searchInput).not.toBeInTheDocument();
    } else {
      expect(searchInput).toBeInTheDocument();
    }
  };

  describe('Exibe o header em cada página', () => {
    it('Deve ter os elementos em Comidas', () => {
      renderWithRouterAndRedux(<App />, { initialEntries: ['/comidas'] });

      hasHeader('Comidas');
    });

    it('Deve ter os elementos em Bebidas', () => {
      renderWithRouterAndRedux(<App />, { initialEntries: ['/bebidas'] });

      hasHeader('Bebidas');
    });

    it('Não deve ter o header nos detalhes de bebida', () => {
      renderWithRouterAndRedux(<App />, { initialEntries: ['/bebidas/178319'] });

      hasNoHeader();
    });

    it('Não deve ter o header nos detalhes de comida', () => {
      renderWithRouterAndRedux(<App />, { initialEntries: ['/comidas/52771'] });

      hasNoHeader();
    });

    it('Não tem header na tela de receita em processo de comida', () => {
      renderWithRouterAndRedux(<App />,
        { initialEntries: ['/comidas/52771/in-progress'] });

      hasNoHeader();
    });

    it('Não tem header na tela de receita em processo de bebida', () => {
      renderWithRouterAndRedux(<App />,
        { initialEntries: ['/bebidas/178319/in-progress'] });

      hasNoHeader();
    });

    it('Não tem header na tela de receita em processo de bebida', () => {
      renderWithRouterAndRedux(<App />, { initialEntries: ['/explorar'] });

      hasHeader('Explorar', false);
    });

    it('O header tem os ícones corretos na tela de explorar comidas', () => {
      renderWithRouterAndRedux(<App />, { initialEntries: ['/explorar/comidas'] });

      hasHeader('Explorar Comidas', false);
    });

    it('O header tem os ícones corretos na tela de explorar bebidas', () => {
      renderWithRouterAndRedux(<App />, { initialEntries: ['/explorar/bebidas'] });

      hasHeader('Explorar Bebidas', false);
    });

    it('O header tem os ícones corretos em explorar comidas por ingrediente', () => {
      renderWithRouterAndRedux(<App />,
        { initialEntries: ['/explorar/comidas/ingredientes'] });

      hasHeader('Explorar Ingredientes', false);
    });

    it('O header tem os ícones corretos em explorar bebidas por ingrediente', () => {
      renderWithRouterAndRedux(<App />,
        { initialEntries: ['/explorar/bebidas/ingredientes'] });

      hasHeader('Explorar Ingredientes', false);
    });

    it('Deve ter os ícones corretos em explorar comidas por local de origem', () => {
      renderWithRouterAndRedux(<App />,
        { initialEntries: ['/explorar/comidas/area'] });

      hasHeader('Explorar Origem', false);
    });

    it('O header tem os ícones corretos na tela de perfil', () => {
      renderWithRouterAndRedux(<App />,
        { initialEntries: ['/perfil'] });

      hasHeader('Perfil', false);
    });

    it('O header tem os ícones corretos na tela de receitas favoritas', () => {
      renderWithRouterAndRedux(<App />,
        { initialEntries: ['/receitas-favoritas'] });

      hasHeader('Receitas Favoritas', false);
    });
  });

  describe('Testa o funcionamento dos botões', () => {
    it('Deve redirecionar a pessoa usuária para a tela de perfil', () => {
      renderWithRouterAndRedux(<App />,
        { initialEntries: ['/comidas'] });

      userEvent.click(screen.getByTestId('profile-top-btn'));

      const headerTitle = screen.getByRole('heading', {
        name: 'Perfil' });

      expect(headerTitle).toBeInTheDocument();
    });
  });

  describe('Testa a barra de pesquisa', () => {
    it('Deve mostrar a barra de busca quando é clicado', () => {
      renderWithRouterAndRedux(<App />,
        { initialEntries: ['/comidas'] });

      const nullSearchInput = screen.queryByTestId('search-input');

      expect(nullSearchInput).toBeNull();

      userEvent.click(screen.getByTestId('search-top-btn'));

      const searchInput = screen.queryByTestId('search-input');

      expect(searchInput).toBeInTheDocument();
    });

    it('Deve sumir a barra de busca quando o botão é clicado novamente', () => {
      renderWithRouterAndRedux(<App />,
        { initialEntries: ['/comidas'] });

      userEvent.click(screen.getByTestId('search-top-btn'));

      const searchInput = screen.queryByTestId('search-input');

      expect(searchInput).toBeInTheDocument();

      userEvent.click(screen.getByTestId('search-top-btn'));

      const nullSearchInput = screen.queryByTestId('search-input');

      expect(nullSearchInput).toBeNull();
    });
  });
});

/*
  const hasHeader = (title, withSearchButton = true) => {
cy.get('[data-testid="profile-top-btn"]')
  .should('have.attr', 'src')
  .should('include', 'profileIcon');

cy.get('[data-testid="page-title"]').contains(title);

if (withSearchButton){
  cy.get('[data-testid="search-top-btn"]')
    .should('have.attr', 'src')
    .should('include', 'searchIcon');
} else {
  cy.get('[data-testid="search-top-btn"]').should('not.exist');
}
};
*/
