import React from 'react';
import { screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouterAndRedux from './helpers/renderWithRouterAndRedux';
import App from '../App';

// import meals from '../../cypress/mocks/meals';

describe('Página \'Comidas Por Ingredientes\'', () => {
  it('Testa se existe pelo menos 1 card de ingrediente', async () => {
    renderWithRouterAndRedux(<App />,
      { initialEntries: ['/explorar/comidas/ingredientes'] });

    const titleCard = await screen.findByText('Avocado');
    expect(titleCard).toBeInTheDocument();

    userEvent.click(titleCard);
    const foodTitle = await screen.findByText(/comidas/i);
    expect(foodTitle).toBeInTheDocument();
  });
});

describe('Página \'Bebidas Por Ingredientes\'', () => {
  it('Testa se existe pelo menos 1 card de ingrediente', async () => {
    renderWithRouterAndRedux(<App />,
      { initialEntries: ['/explorar/bebidas/ingredientes'] });

    const titleCard = await screen.findByText('Gin');
    expect(titleCard).toBeInTheDocument();

    userEvent.click(titleCard);
    const drinkTitle = await screen.findByText(/bebidas/i);
    expect(drinkTitle).toBeInTheDocument();
  });
});

describe('Página \'Comidas Por Local de Origem\'', () => {
  it('Testa se os cards são alterados ao trocar uma option do dropdown', async () => {
    renderWithRouterAndRedux(<App />,
      { initialEntries: ['/explorar/comidas/area'] });

    const { innerHTML: initialCardTitle } = await screen.findByTestId('0-card-name');
    const mockInitialTitle = 'Corba';
    expect(initialCardTitle).toBe(mockInitialTitle);

    const select = await screen.findByTestId('explore-by-area-dropdown');
    fireEvent.change(select, { target: { value: 'Canadian' } });

    const cardTitle = await screen.findByText('BeaverTails');
    expect(cardTitle).toBeInTheDocument();
  });
});
