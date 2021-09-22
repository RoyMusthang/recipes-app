import React, { useState } from 'react';
import { getDrinks } from '../services/index';

const inputs = [
  'ingredient-search-radio',
  'name-search-radio',
  'first-letter-search-radio',
];
const inputsNames = [
  'Ingrediente',
  'Nome',
  'Primeira Letra',
];

export default function SearchBarDrinks() {
  const [radioState, setRadioState] = useState('ingredient-search-radio');

  return (
    <div>
      <input
        type="text"
        data-testid="search-input"
      />
      {
        inputs.map((item, index) => (
          <label key={ index } htmlFor={ item }>
            <input
              defaultchecked
              value={ item }
              type="radio"
              data-testid={ item }
              id={ item }
              name="radioSelect"
              onClick={ ({ target }) => setRadioState(target.value) }
            />
            { inputsNames[index] }
          </label>
        ))
      }
      <button
        type="button"
        data-testid="exec-search-btn"
        onClick={ getDrinks(radioState) }
      >
        Buscar
      </button>
    </div>
  );
}
