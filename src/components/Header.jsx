import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';

function Header({ title, renderSearchButton = true }) {
  const [renderSearchBar, setRenderSearchBar] = useState(false);
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

  return (
    <div>
      <Link
        to="/perfil"
      >
        <img src={ profileIcon } alt="Profile Icon" data-testid="profile-top-btn" />
      </Link>
      <h1
        data-testid="page-title"
      >
        { title }
      </h1>
      { renderSearchButton && (
        <button
          type="button"
          data-testid="search-top-btn"
          src={ searchIcon }
          onClick={ () => setRenderSearchBar(!renderSearchBar) }
        >
          Buscar
        </button>
      )}
      { renderSearchBar && (
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
      )}
    </div>
  );
}

Header.propTypes = {
  renderSearchButton: PropTypes.bool,
}.isRequired;

export default Header;
