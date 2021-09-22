import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';
import SearchBarDrinks from './SearchBarDrinks';
import SearchBarMeals from './SearchBarMeals';

function Header({ title, renderSearchButton = true, mealOrDrink = false }) {
  const [renderSearchBar, setRenderSearchBar] = useState(false);

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
          onClick={ () => setRenderSearchBar(!renderSearchBar) }
        >
          <img src={ searchIcon } data-testid="search-top-btn" alt="Botão de busca" />
        </button>
      )}
      { (renderSearchBar && mealOrDrink === 'meal') && (
        <SearchBarMeals />
      )}
      { (renderSearchBar && mealOrDrink === 'drink') && (
        <SearchBarDrinks />
      )}
    </div>
  );
}

Header.propTypes = {
  renderSearchButton: PropTypes.bool,
}.isRequired;

export default Header;
