import React from 'react';
import PropTypes from 'prop-types';

function DrinkCard({ drink }) {
  const { strDrinkThumb, strDrink, strCategory } = drink;
  return (
    <div>
      <img src={ strDrinkThumb } alt="Drink" />
      <h2>{ strDrink }</h2>
      { (strCategory.length) && strCategory
        .filter((_, index) => index < Number('5'))
        .map((category, index) => (
          <button
            type="button"
            key={ index }
            data-testid={ `${category}-category-filter` }
          >
            {category}
          </button>)) }
    </div>
  );
}

DrinkCard.propTypes = {
  drink: PropTypes.object,
}.isRequired;

export default DrinkCard;
