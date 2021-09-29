import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

function IngredientsMealCard({ id, ingredient }) {
  const dispatch = useDispatch();
  const history = useHistory();
  function redirectClick() {
    const url = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`;
    dispatch({ type: 'MEAL_URL', payload: url });
    history.push('/comidas');
  }
  return (
    <button
      onClick={ redirectClick }
      type="button"
      data-testid={ `${id}-ingredient-card` }
    >
      <img
        data-testid={ `${id}-card-img` }
        src={ `https://www.themealdb.com/images/ingredients/${ingredient}-Small.png` }
        alt="Ingredient"
      />
      <h3 data-testid={ `${id}-card-name` }>{ ingredient }</h3>
    </button>
  );
}

IngredientsMealCard.propTypes = {
  id: PropTypes.string,
  ingredient: PropTypes.string,
}.isRequired;

export default IngredientsMealCard;
