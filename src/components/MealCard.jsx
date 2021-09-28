import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function MealCard({ meal, id }) {
  const { strMealThumb, strMeal } = meal;

  return (
    <Link to={ `/comidas/${meal.idMeal}` }>
      <div data-testid={ `${id}-recipe-card` }>
        <img
          src={ strMealThumb }
          data-testid={ `${id}-card-img` }
          alt="Meal"
        />
        <h2 data-testid={ `${id}-card-name` }>{ strMeal }</h2>
      </div>
    </Link>
  );
}

MealCard.propTypes = {
  meal: PropTypes.object,
}.isRequired;

export default MealCard;
