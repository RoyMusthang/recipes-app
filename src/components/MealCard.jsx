import React from 'react';
import PropTypes from 'prop-types';

function MealCard({ meal }) {
  const { strMealThumb, strMeal } = meal;
  return (
    <div>
      <img src={ strMealThumb } alt="Meal" />
      <h2>{ strMeal }</h2>
    </div>
  );
}

MealCard.propTypes = {
  meal: PropTypes.object,
}.isRequired;

export default MealCard;
