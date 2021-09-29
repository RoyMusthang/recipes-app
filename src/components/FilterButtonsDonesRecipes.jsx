import React from 'react';
import PropTypes from 'prop-types';

function FilterButtonsDonesRecipes({ finished, setFinished, doneRecipes }) {
  const onClick = ({ target: { name } }) => {
    const filtroDeReceitas = finished.filter((item) => item.type.includes(name));
    setFinished(filtroDeReceitas);
    if (name === 'All') return setFinished(doneRecipes);
  };
  return (
    <>
      <button
        type="button"
        data-testid="filter-by-all-btn"
        name="All"
        onClick={ onClick }
      >
        All
      </button>
      <button
        type="button"
        name="comida"
        data-testid="filter-by-food-btn"
        onClick={ onClick }
      >
        Food
      </button>
      <button
        type="button"
        name="bebida"
        data-testid="filter-by-drink-btn"
        onClick={ onClick }
      >
        Drinks
      </button>
    </>
  );
}

FilterButtonsDonesRecipes.propTypes = {
  finished: PropTypes.array,
  doneRecipes: PropTypes.array,
  setFinished: PropTypes.func,
}.isRequired;

export default FilterButtonsDonesRecipes;
