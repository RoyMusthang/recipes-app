import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function DrinkCard({ drink, id }) {
  const { strDrinkThumb, strDrink } = drink;

  return (
    <Link to={ `/bebidas/${drink.idDrink}` }>
      <div data-testid={ `${id}-recipe-card` }>
        <img
          src={ strDrinkThumb }
          data-testid={ `${id}-card-img` }
          alt="Drink"
        />
        <h2 data-testid={ `${id}-card-name` }>{ strDrink }</h2>
      </div>
    </Link>
  );
}

DrinkCard.propTypes = {
  drink: PropTypes.object,
}.isRequired;

export default DrinkCard;
