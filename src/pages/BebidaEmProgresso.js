import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useRouteMatch, useHistory } from 'react-router';
import IngredientListProgress from '../components/ingredientListProgress';
import ShareAndFavoriteButtons from '../components/ShareAndFavoriteButtons';
// import PropTypes from 'prop-types';

function BebidaEmProgresso() {
  const [drinkDetail, setDrinkDetail] = useState();
  const [enableButton, setEnableButton] = useState(true);
  const match = useRouteMatch();
  const history = useHistory();
  const { inProgress } = useSelector((state) => state.user);

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
            id={ drinkDetail[0].idDrink }
            type="bebida"
            alcoholicOrNot={ drinkDetail[0].strAlcoholic }
            category={ drinkDetail[0].strCategory }
            name={ drinkDetail[0].strDrink }
            image={ drinkDetail[0].strDrinkThumb }
          />
          <h4 data-testid="recipe-category">{ drinkDetail[0].strCategory }</h4>
          <IngredientListProgress
            eatableDetail={ drinkDetail }
            setEnableButton={ setEnableButton }
            inProgressIngredients={ inProgress.cocktails[drinkDetail[0].idDrink] }
            idEatable={ drinkDetail[0].idDrink }
            dispatchEatable="DRINK_IN_PROGRESS"
          />
          <p data-testid="instructions">{ drinkDetail[0].strInstructions }</p>
          <button
            onClick={ () => history.push('/receitas-feitas') }
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

// BebidaEmProgresso.propTypes = {

// }.isRequired;

export default BebidaEmProgresso;
