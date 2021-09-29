import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch, useHistory } from 'react-router';
import IngredientListProgress from '../components/ingredientListProgress';
import ShareAndFavoriteButtons from '../components/ShareAndFavoriteButtons';
// import PropTypes from 'prop-types';

function ComidaEmProcesso() {
  const [mealDetail, setMealDetail] = useState([]);
  const [enableButton, setEnableButton] = useState(true);
  const match = useRouteMatch();
  const history = useHistory();
  const dispatch = useDispatch();
  const { inProgress } = useSelector((state) => state.user);

  const { id: idRequest } = match.params;

  useEffect(() => {
    const fetchApi = async () => {
      const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idRequest}`;
      const response = await fetch(url);
      const results = await response.json();
      setMealDetail(results.meals);
    };
    fetchApi();
  }, [idRequest]);

  function saveRecipe() {
    const { idMeal, strMeal, strCategory, strArea,
      strMealThumb, strTags } = mealDetail[0];
    const tags = (!strTags) ? [] : strTags;
    const obj = { id: idMeal,
      name: strMeal,
      type: 'bebida',
      area: strArea,
      category: strCategory,
      alcoholicOrNot: '',
      image: strMealThumb,
      doneDate: 'Um dia qualquer (ou mais de um)',
      tags };
    dispatch({ type: 'DONE_RECIPE', payload: obj });
    history.push('/receitas-feitas');
  }

  return (
    <div>
      { (mealDetail && mealDetail.length !== 0) && (
        <>
          <img
            style={ { width: '100px' } }
            src={ mealDetail[0].strMealThumb }
            alt="Foto de Comida"
            data-testid="recipe-photo"
          />
          <h2 data-testid="recipe-title">{ mealDetail[0].strMeal }</h2>
          <ShareAndFavoriteButtons
            id={ mealDetail[0].idMeal }
            type="comida"
            area={ mealDetail[0].strArea }
            category={ mealDetail[0].strCategory }
            name={ mealDetail[0].strMeal }
            image={ mealDetail[0].strMealThumb }
          />
          <h4 data-testid="recipe-category">{ mealDetail[0].strCategory }</h4>
          <IngredientListProgress
            eatableDetail={ mealDetail }
            setEnableButton={ setEnableButton }
            inProgressIngredients={ inProgress.meals[mealDetail[0].idMeal] }
            idEatable={ mealDetail[0].idMeal }
            dispatchEatable="MEAL_IN_PROGRESS"
          />
          <p data-testid="instructions">{ mealDetail[0].strInstructions }</p>
          <button
            onClick={ saveRecipe }
            disabled={ enableButton }
            type="button"
            className="finish-recipe-btn"
            data-testid="finish-recipe-btn"
          >
            Finalizar
          </button>
        </>
      ) }
    </div>
  );
}

// ComidaEmProcesso.propTypes = {

// }.isRequired;

export default ComidaEmProcesso;
