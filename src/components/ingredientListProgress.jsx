import React, { useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

const listDetails = (eatableDetail, ingredients) => {
  if (eatableDetail && eatableDetail.length !== 0) {
    for (let i = 1; i <= Number('15'); i += 1) {
      if (eatableDetail[0][`strIngredient${i}`]) {
        const ing = `${eatableDetail[0][`strIngredient${i}`]}`;
        const mes = `${eatableDetail[0][`strMeasure${i}`]}`;
        ingredients.push(`${ing} ${(mes === 'null') ? '' : mes}`);
      } else break;
    }
  }
};

function IngredientListProgress({ eatableDetail, setEnableButton }) {
  const dispatch = useDispatch();
  const ingredients = [];
  const [count, setCount] = useState(0);

  listDetails(eatableDetail, ingredients);

  if (ingredients.length === count) {
    setEnableButton(false);
    // comparador que habilita o botão
  } else {
    setEnableButton(true);
  }

  useMemo(() => {
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
            onChange={ ({ target }) => {
              // logica para saber a quantidade de inputs checkados
              if (target.checked) {
                console.log('aumentou');
                setCount((prev) => prev + 1);
              } else {
                console.log('diminuiu');
                setCount((prev) => prev - 1);
              }
            } }
          />
          <label htmlFor={ i }>{ ingredient }</label>
        </li>
      )) }
    </ul>
  );
}

IngredientListProgress.propTypes = {
  eatableDetail: PropTypes.array,
}.isRequired;

export default IngredientListProgress;
