import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

const listDetails = (eatableDetail, setIngredients) => {
  if (eatableDetail && eatableDetail.length !== 0) {
    const arrayPush = [];
    for (let i = 1; i <= Number('15'); i += 1) {
      if (eatableDetail[0][`strIngredient${i}`]) {
        const ing = `${eatableDetail[0][`strIngredient${i}`]}`;
        const mes = `${eatableDetail[0][`strMeasure${i}`]}`;
        arrayPush.push(`${ing} ${(mes === 'null') ? '' : mes}`);
      } else break;
    }
    setIngredients(arrayPush);
  }
};

function IngredientListProgress({ eatableDetail, setEnableButton,
  inProgressIngredients, dispatchEatable, idEatable }) {
  const dispatch = useDispatch();
  const [ingredients, setIngredients] = useState([]);

  if (ingredients.length === 0) listDetails(eatableDetail, setIngredients);

  if (inProgressIngredients && inProgressIngredients.length === 0) {
    setEnableButton(false);
    // comparador que habilita o botão
  } else {
    setEnableButton(true);
  }

  useEffect(() => {
    if (!inProgressIngredients) {
      dispatch({ type: dispatchEatable, id: idEatable, payload: ingredients });
    }
  }, [dispatch, inProgressIngredients, ingredients, dispatchEatable, idEatable]);

  const loading = <li>Loading...</li>;
  return (
    <ul>
      { (!inProgressIngredients) ? loading : ingredients.map((ingredient, i) => {
        const isChecked = !(inProgressIngredients.includes(ingredient));
        return (
          <li
            key={ `${i}-${ingredient}` }
            data-testid={ `${i}-ingredient-step` }
          >
            <input
              checked={ isChecked }
              type="checkbox"
              id={ ingredient }
              name={ i }
              onChange={ ({ target: { checked, id } }) => {
                // logica para saber a quantidade de inputs checkados
                // e alterar os ingredientes inProgress no redux e,
                // consequentemente, no localStorage
                if (checked) {
                  const filteredIngredients = inProgressIngredients
                    .filter((ing) => ing !== id);
                  dispatch({ type: dispatchEatable,
                    id: idEatable,
                    payload: filteredIngredients });
                } else {
                  const filteredIngredients = inProgressIngredients.concat(id);
                  dispatch({ type: dispatchEatable,
                    id: idEatable,
                    payload: filteredIngredients });
                }
              } }
            />
            <label htmlFor={ i }>{ ingredient }</label>
          </li>

        );
      }) }
    </ul>
  );
}

IngredientListProgress.propTypes = {
  eatableDetail: PropTypes.array,
}.isRequired;

export default IngredientListProgress;
