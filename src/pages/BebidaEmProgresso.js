import React, { useState, useEffect } from 'react';
import { useRouteMatch } from 'react-router';
import IngredientListProgress from '../components/ingredientListProgress';
import ShareAndFavoriteButtons from '../components/ShareAndFavoriteButtons';
// import PropTypes from 'prop-types';

function BebidaEmProgresso() {
  const [drinkDetail, setDrinkDetail] = useState();
  const match = useRouteMatch();

  const { id: idRequest } = match.params;

  useEffect(() => {
    const fetchApi = async () => {
      const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idRequest}`;
      const response = await fetch(url);
      const results = await response.json();
      setDrinkDetail(results.drinks);
    };
    fetchApi();
  }, [idRequest]);

  return (
    <div>
      { (drinkDetail && drinkDetail.length !== 0) && (
        <>
          <img
            style={ { width: '100px' } }
            src={ drinkDetail[0].strdrinkThumb }
            alt="Foto de Comida"
            data-testid="recipe-photo"
          />
          <h2 data-testid="recipe-title">{ drinkDetail[0].strdrink }</h2>
          <ShareAndFavoriteButtons
            id={ drinkDetail[0].iddrink }
            type="comida"
            area={ drinkDetail[0].strArea }
            category={ drinkDetail[0].strCategory }
            name={ drinkDetail[0].strdrink }
            image={ drinkDetail[0].strdrinkThumb }
          />
          <h4 data-testid="recipe-category">{ drinkDetail[0].strCategory }</h4>
          <IngredientListProgress eatableDetail={ drinkDetail } />
          <p data-testid="instructions">{ drinkDetail[0].strInstructions }</p>
          <button
            onClick={ () => console.log('a') }
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

// BebidaEmProgresso.propTypes = {

// }.isRequired;

export default BebidaEmProgresso;
