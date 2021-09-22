import React from 'react';
import PropTypes from 'prop-types';

function DrinkCard({ drink }) {
  const { strDrinkThumb, strDrink, strCategory } = drink;
  return (
    <div data-testid={ `${id}-recipe-card` }>
      <img
        src={ strDrinkThumb }
        data-testid={ `${id}-card-img` }
        alt="Drink"
      />
      <h2 data-testid={ `${id}-card-name` }>{ strDrink }</h2>
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
