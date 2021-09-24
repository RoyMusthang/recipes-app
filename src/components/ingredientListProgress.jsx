import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

function IngredientList({ eatableDetail, setEnableButton }) {
  const dispatch = useDispatch();
  const [ingredients] = useState([]);

  // const [count, setCount] = useState([]);

  if (eatableDetail && eatableDetail.length !== 0) {
    for (let i = 1; i <= Number('20'); i += 1) {
      if (eatableDetail[0][`strIngredient${i}`]) {
        const ing = `${eatableDetail[0][`strIngredient${i}`]}`;
        const mes = `${eatableDetail[0][`strMeasure${i}`]}`;
        ingredients.push(`${ing} ${(mes === 'null') ? '' : mes}`);
      } else break;
    }
  }

  useEffect(() => {
    dispatch({ type: 'CURRENT_INGREDIENTS', payload: ingredients });
  }, [dispatch, ingredients]);

  return (
    <ul>
      { ingredients.map((ingredient, i) => (
        <li
          key={ `${i}-${ingredient}` }
          data-testid="ingredient-step"
        >
          <input
            type="checkbox"
            id={ i }
            name={ i }
            onChange={ () => console.log('teste') }
          />
          <label htmlFor={ i }>{ ingredient }</label>
        </li>
      )) }
      {console.log(ingredients.length)}
    </ul>
  );
}

IngredientList.propTypes = {
  eatableDetail: PropTypes.array,
}.isRequired;

export default IngredientList;
