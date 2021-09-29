import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

function IngredientsDrinkCard({ id, ingredient }) {
  const dispatch = useDispatch();
  const history = useHistory();
  function redirectClick() {
    const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}`;
    dispatch({ type: 'DRINK_URL', payload: url });
    history.push('/bebidas');
  }
  return (
    <button
      onClick={ redirectClick }
      type="button"
      data-testid={ `${id}-ingredient-card` }
    >
      <img
        data-testid={ `${id}-card-img` }
        src={ `https://www.thecocktaildb.com/images/ingredients/${ingredient}-Small.png` }
        alt="Ingredient"
      />
      <h3 data-testid={ `${id}-card-name` }>{ ingredient }</h3>
    </button>
  );
}

IngredientsDrinkCard.propTypes = {
  id: PropTypes.string,
  ingredient: PropTypes.string,
}.isRequired;

export default IngredientsDrinkCard;
