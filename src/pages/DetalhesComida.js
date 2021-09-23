import React, { useEffect, useState } from 'react';
import { useRouteMatch } from 'react-router';
import shareIcon from '../images/shareIcon.svg';
// import PropTypes from 'prop-types';

function DetalhesComida() {
  const match = useRouteMatch();
  const { id: idRequest } = match.params;
  const [mealDetail, setMealDetail] = useState([]);
  const [randoms, setRandoms] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idRequest}`;
      const urlRandom = 'https://www.themealdb.com/api/json/v1/1/random.php';
      const response = await fetch(url);
      const results = await response.json();
      const randomResponse1 = await fetch(urlRandom);
      const randomResults1 = await randomResponse1.json();
      const randomResponse2 = await fetch(urlRandom);
      const randomResults2 = await randomResponse2.json();
      setRandoms([randomResults1.meals[0], randomResults2.meals[0]]);
      setMealDetail(results.meals);
    };
    fetchApi();
  }, [idRequest]);

  const ingredients = [];

  if (mealDetail.length !== 0) {
    for (let i = 1; i <= Number('20'); i += 1) {
      if (mealDetail[0][`strIngredient${i}`].length !== 0) {
        ingredients.push(mealDetail[0][`strIngredient${i}`]);
      } else break;
    }
  }

  return (
    <div>
      { (mealDetail.length !== 0) && (
        <>
          <img
            style={ { width: '100px' } }
            src={ mealDetail[0].strMealThumb }
            alt="Foto de Comida"
            data-testid="recipe-photo"
          />
          <h2 data-testid="recipe-title">{ mealDetail[0].strMeal }</h2>
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
          <h4 data-testid="recipe-category">{ mealDetail[0].strCategory }</h4>

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
          <p data-testid="instructions">{ mealDetail[0].strInstructions }</p>
          <iframe title="Video" data-testid="video" src={ mealDetail[0].strYoutube } />
          {
            randoms.map((item, i) => (
              <div key={ `${i}-${item}` } data-testid={ `${i}-recomendation-card` }>
                <img src={ item.strMealThumb } alt="Comida Recomendada" width="250px" />
                <h2>{ item.strMeal }</h2>
              </div>
            ))
          }
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

// DetalhesComida.propTypes = {

// }.isRequired;

export default DetalhesComida;
