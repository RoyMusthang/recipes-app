import React from 'react';
// import { getMeals } from '../services';

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

export default function SearchBarMeals() {
  return (
    <div>
      <input
        type="text"
        data-testid="search-input"
      />
      {
        inputs.map((item, index) => (
          <label key={ index } htmlFor={ item }>
            <input type="radio" data-testid={ item } id={ item } name="radioSelect" />
            { inputsNames[index] }
          </label>
        ))
      }
      <button
        type="button"
        data-testid="exec-search-btn"
      >
        Buscar
      </button>
    </div>
  );
}
