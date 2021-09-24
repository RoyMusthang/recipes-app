import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router';
import { useHistory } from 'react-router-dom';
import IngredientList from '../components/IngredientList';
import ShareAndFavoriteButtons from '../components/ShareAndFavoriteButtons';

// import PropTypes from 'prop-types';

function DetalhesBebida() {
  const match = useRouteMatch();
  const history = useHistory();
  const { id: idRequest } = match.params;
  const [drinkDetail, setDrinkDetail] = useState([]);
  const [randoms, setRandoms] = useState([]);
  const dispatch = useDispatch();
  const { inProgress: { drinks }, currentIngredients,
  } = useSelector((state) => state.user);

  useEffect(() => {
    const fetchApi = async () => {
      const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idRequest}`;
      const response = await fetch(url);
      const results = await response.json();
      setDrinkDetail(results.drinks);
      const urlRandom = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
      const randomResponse1 = await fetch(urlRandom);
      const randomResults1 = await randomResponse1.json();
      setRandoms(randomResults1.meals);
    };
    fetchApi();
  }, [idRequest]);

  function addInProgress() {
    const verify = drinks[drinkDetail[0].idDrink];
    if (!verify) {
      dispatch({ type: 'DRINK_IN_PROGRESS',
        payload: currentIngredients,
        id: drinkDetail[0].idDrink });
    }
    history.push(`/bebidas/${drinkDetail[0].idDrink}/in-progress`);
  }

  return (
    <div>
      { (drinkDetail && drinkDetail.length !== 0) && (
        <>
          <img
            style={ { width: '100px' } }
            src={ drinkDetail[0].strDrinkThumb }
            alt="Foto de Comida"
            data-testid="recipe-photo"
          />
          <h2 data-testid="recipe-title">{ drinkDetail[0].strDrink }</h2>
          <ShareAndFavoriteButtons
            id={ drinkDetail[0].idDrink }
            type="bebida"
            alcoholicOrNot={ drinkDetail[0].strAlcoholic }
            category={ drinkDetail[0].strCategory }
            name={ drinkDetail[0].strDrink }
            image={ drinkDetail[0].strDrinkThumb }
          />
          <h4 data-testid="recipe-category">{ drinkDetail[0].strAlcoholic }</h4>
          <IngredientList eatableDetail={ drinkDetail } />
          <p data-testid="instructions">{ drinkDetail[0].strInstructions }</p>
          <div className="recomendation-container">
            {randoms.filter((_, i2) => (i2 < Number('6'))).map((item, i) => (
              <div key={ `${i}-${item}` } data-testid={ `${i}-recomendation-card` }>
                <h4 data-testid={ `${i}-recomendation-title` }>{ item.strMeal }</h4>
                <img src={ item.strMealThumb } alt="Bebida Recomendada" width="150px" />
              </div>
            ))}
          </div>
          <button
            onClick={ addInProgress }
            type="button"
            className="start-recipe-btn"
            data-testid="start-recipe-btn"
          >
            { (!drinks[drinkDetail[0]
              .idDrink]) ? 'Iniciar Receita' : 'Continuar Receita' }
          </button>
        </>
      ) }
    </div>
  );
}

// DetalhesBebida.propTypes = {

// }.isRequired;

export default DetalhesBebida;
