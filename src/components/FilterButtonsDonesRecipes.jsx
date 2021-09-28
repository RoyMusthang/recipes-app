import React from 'react';
// import PropTypes from 'prop-types';

function FilterButtonsDonesRecipes() {
  return (
    <>
      <button
        data-testid="filter-by-all-btn"
        type="button"
      >
        All
      </button>
      <button
        data-testid="filter-by-food-btn"
        type="button"
      >
        Meals
      </button>
      <button
        data-testid="filter-by-drink-btn"
        type="button"
      >
        Drinks
      </button>
    </>
  );
}

// FilterButtonsDonesRecipes.propTypes = {

// };

export default FilterButtonsDonesRecipes;
