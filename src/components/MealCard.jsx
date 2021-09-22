import React from 'react';
import PropTypes from 'prop-types';

function MealCard({ meal, id }) {
  const { strMealThumb, strMeal } = meal;
  console.log('oioioi');
  return (
    <div data-testid={ `${id}-recipe-card` }>
      <img
        src={ strMealThumb }
        data-testid={ `${id}-card-img` }
        alt="Meal"
      />
      <h2 data-testid={ `${id}-card-name` }>{ strMeal }</h2>
    </div>
  );
}

MealCard.propTypes = {
  meal: PropTypes.object,
}.isRequired;

export default MealCard;
