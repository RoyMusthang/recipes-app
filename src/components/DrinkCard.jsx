import React from 'react';
import PropTypes from 'prop-types';

function DrinkCard({ drink }) {
  const { strDrinkThumb, strDrink } = drink;
  return (
    <div>
      <img src={ strDrinkThumb } alt="Drink" />
      <h2>{ strDrink }</h2>
    </div>
  );
}

DrinkCard.propTypes = {
  drink: PropTypes.object,
}.isRequired;

export default DrinkCard;
