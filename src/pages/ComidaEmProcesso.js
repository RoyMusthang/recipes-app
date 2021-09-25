import React, { useState, useEffect } from 'react';
import { useRouteMatch, useHistory } from 'react-router';
import IngredientListProgress from '../components/ingredientListProgress';
import ShareAndFavoriteButtons from '../components/ShareAndFavoriteButtons';
// import PropTypes from 'prop-types';

function ComidaEmProcesso() {
  const [mealDetail, setMealDetail] = useState();
  const [enableButton, setEnableButton] = useState(true);
  const match = useRouteMatch();
  const history = useHistory();

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
          />
          <p data-testid="instructions">{ mealDetail[0].strInstructions }</p>
          <button
            onClick={ () => history.push('/receitas-feitas')  }
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
