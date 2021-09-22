import React from 'react';
import PropTypes from 'prop-types';

function MealCard({ meal }) {
  const { strMealThumb, strMeal } = meal;

  const categoryFood = async () => {
    const api = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?c=list');
    const json = api.json();
    json.filter((_, index) => index < Number('5'));
    const desgraça = json.map((category, index) => (
      <button
        type="button"
        key={ index }
        data-testid={ `${category}-category-filter` }
      >
        {category}
      </button>
    ));
    return desgraça;
  };

  return (
    <div>
      <img src={ strMealThumb } alt="Meal" />
      <h2>{ strMeal }</h2>
      { () => categoryFood() }
    </div>
  );
}

MealCard.propTypes = {
  meal: PropTypes.object,
}.isRequired;

export default MealCard;
