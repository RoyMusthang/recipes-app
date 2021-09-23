/* eslint-disable no-alert */

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { getDrinks } from '../services';

export default function SearchBarDrinks() {
  const [radioState, setRadioState] = useState('ingredient-search-radio');
  const [input, setInput] = useState();
  const dispatch = useDispatch();
  const history = useHistory();

  const getSearch = async () => {
    if (radioState === 'first-letter-radio' && input.length > 1) {
      alert('Sua busca deve conter somente 1 (um) caracter');
    } else {
      const payload = await getDrinks(input, radioState);
      if (payload.drinks !== null) {
        dispatch({ type: 'DRINKS_REQUESTS_SUCCESS', payload });
        if (payload.drinks.length === 1) {
          history.push(`/bebidas/${payload.drinks[0].idDrink}`);
        }
      } else {
        alert('Sinto muito, não encontramos nenhuma receita para esses filtros.');
        dispatch({ type: 'DRINKS_REQUESTS_ERROR', error: 'Não existe' });
      }
    }
  };

  return (
    <div>
      <input
        type="text"
        onChange={ ({ target }) => setInput(target.value) }
        data-testid="search-input"
      />
      <label htmlFor="ingredient-radio">
        <input
          value="ingredient-radio"
          type="radio"
          data-testid="ingredient-search-radio"
          id="ingredient-radio"
          name="radioSelect"
          onClick={ ({ target }) => setRadioState(target.value) }
        />
        Ingrediente
      </label>
      <label htmlFor="name-radio">
        <input
          value="name-radio"
          type="radio"
          data-testid="name-search-radio"
          id="name-radio"
          name="radioSelect"
          onClick={ ({ target }) => setRadioState(target.value) }
        />
        Nome
      </label>
      <label htmlFor="first-letter-radio">
        <input
          value="first-letter-radio"
          type="radio"
          data-testid="first-letter-search-radio"
          id="first-letter-radio"
          name="radioSelect"
          onClick={ ({ target }) => setRadioState(target.value) }
        />
        Primeira Letra
      </label>
      <button
        type="button"
        data-testid="exec-search-btn"
        onClick={ () => getSearch() }
      >
        Buscar
      </button>
    </div>
  );
}
