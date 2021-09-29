import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouterAndRedux from './helpers/renderWithRouterAndRedux';
import App from '../App';

describe('Página \'Not Found\'', () => {
  it('Testa se a página existe', () => {
    renderWithRouterAndRedux(<App />, { initialEntries: ['/notfoundpage'] });
    const notFountTitle = screen.getByText(/not found/i);
    expect(notFountTitle).toBeInTheDocument();
  });
});
