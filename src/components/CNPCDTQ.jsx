import copy from 'clipboard-copy';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

import blackHeartIcon from '../images/blackHeartIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import shareIcon from '../images/shareIcon.svg';

function CNPCDTQ({ id, type, area = '', category, name,
  image, alcoholicOrNot = '', index }) {
  const dispatch = useDispatch();
  const history = useHistory();
  const { favoriteRecipes } = useSelector((state) => state.user);
  const [copiedText, setCopiedText] = useState(false);

  const favoriteOrNot = favoriteRecipes.find(({ id: identify }) => identify === id);
  const dispatchFavorite = () => {
    const obj = { id, type, area, category, name, image, alcoholicOrNot };
    if (!favoriteOrNot) {
      dispatch({ type: 'FAVORITE', payload: obj });
    } else {
      const removeFavorite = favoriteRecipes
        .filter(({ id: identify }) => identify !== id);
      dispatch({ type: 'REMOVE_FAVORITE', payload: removeFavorite });
      history.go(0);
    }
  };

  return (
    <>
      { (copiedText) && (<h3>Link copiado!</h3>) }
      { console.log(type)}
      <button
        onClick={ () => {
          copy(`http://localhost:3000/${type}s/${id}`);
          setCopiedText(true);
        } }
        type="button"
      >
        <img
          data-testid={ `${index}-horizontal-share-btn` }
          src={ shareIcon }
          alt="Botão de Compartilhar"
        />
      </button>
        <button
          onClick={ dispatchFavorite }
          type="button"
        >
        <img
          data-testid={ `${index}-horizontal-favorite-btn` }
          src={ (!favoriteOrNot) ? whiteHeartIcon : blackHeartIcon }
          alt="Favorite heart icon"
        />
      </button>
    </>
  );
}

CNPCDTQ.propTypes = {
  id: PropTypes.string,
  area: PropTypes.string,
  category: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  image: PropTypes.string,
  alcoholicOrNot: PropTypes.string,
}.isRequired;

export default CNPCDTQ;
