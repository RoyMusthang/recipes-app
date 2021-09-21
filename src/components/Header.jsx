import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';

function Header({ title, renderSearchButton = true }) {
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
          data-testid="search-top-btn"
          src={ searchIcon }
          onClick={ () => setRenderSearchBar(!renderSearchBar) }
        >
          Buscar
        </button>
      )}
      { renderSearchBar && (
        <input
          type="text"
          data-testid="search-input"
        />
      )}
    </div>
  );
}

Header.propTypes = {
  renderSearchButton: PropTypes.bool,
}.isRequired;

export default Header;
