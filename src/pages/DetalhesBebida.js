import React, { useEffect, useState } from 'react';
import { useRouteMatch } from 'react-router';
import shareIcon from '../images/shareIcon.svg';
// import PropTypes from 'prop-types';

function DetalhesBebida() {
  const match = useRouteMatch();
  const { id: idRequest } = match.params;
  const [drinkDetail, setDrinkDetail] = useState([]);
  const [randoms, setRandoms] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idRequest}`;
      const urlRandom = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
      const response = await fetch(url);
      const results = await response.json();
      const randomResponse1 = await fetch(urlRandom);
      const randomResults1 = await randomResponse1.json();
      setRandoms(randomResults1.meals);
      setDrinkDetail(results.drinks);
    };
    fetchApi();
  }, [idRequest]);

  const ingredients = [];
  const limitCards = 6;

  if (drinkDetail.length !== 0) {
    for (let i = 1; i <= Number('15'); i += 1) {
      if (drinkDetail[0][`strIngredient${i}`].length !== 0) {
        const ing = `${drinkDetail[0][`strIngredient${i}`]}`;
        const mes = `${drinkDetail[0][`strMeasure${i}`]}`;
        ingredients.push(`${ing} ${(!mes) ? '' : mes}`);
      } else break;
    }
  }

  return (
    <div>
      { (drinkDetail.length !== 0) && (
        <>
          <img
            style={ { width: '100px' } }
            src={ drinkDetail[0].strDrinkThumb }
            alt="Foto de Comida"
            data-testid="recipe-photo"
          />
          <h2 data-testid="recipe-title">{ drinkDetail[0].strDrink }</h2>
          <button
            type="button"
            data-testid="share-btn"
          >
            <img src={ shareIcon } alt="Botão de Compartilhar" />
          </button>
          <button
            type="button"
            data-testid="favorite-btn"
          >
            Favoritar
          </button>
          <h4 data-testid="recipe-category">{ drinkDetail[0].strAlcoholic }</h4>
          <ul>
            { ingredients.map((ingredient, i) => (
              <li
                key={ `${i}-${ingredient}` }
                data-testid={ `${i}-ingredient-name-and-measure` }
              >
                { ingredient }
              </li>
            )) }
          </ul>
          <p data-testid="instructions">{ drinkDetail[0].strInstructions }</p>
          <div className="recomendation-container">
            {randoms.filter((_, i2) => (i2 < limitCards)).map((item, i) => (
              <div key={ `${i}-${item}` } data-testid={ `${i}-recomendation-card` }>
                <h4 data-testid={ `${i}-recomendation-title` }>{ item.strMeal }</h4>
                <img src={ item.strMealThumb } alt="Bebida Recomendada" width="150px" />
              </div>
            ))}
          </div>
          <button
            type="button"
            data-testid="start-recipe-btn"
          >
            Iniciar Receita
          </button>
        </>
      ) }
    </div>
  );
}

// DetalhesBebida.propTypes = {

// }.isRequired;

export default DetalhesBebida;
