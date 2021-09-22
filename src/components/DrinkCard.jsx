import React from 'react';
import PropTypes from 'prop-types';

function DrinkCard({ drink, id }) {
  const { strDrinkThumb, strDrink } = drink;
  return (
    <div data-testid={ `${id}-recipe-card` }>
      <img
        src={ strDrinkThumb }
        data-testid={ `${id}-card-img` }
        alt="Drink"
      />
      <h2 data-testid={ `${id}-card-name` }>{ strDrink }</h2>
    </div>
  );
}

DrinkCard.propTypes = {
  drink: PropTypes.object,
}.isRequired;

export default DrinkCard;
