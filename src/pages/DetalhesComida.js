import React, { useEffect, useState } from 'react';
import { useRouteMatch } from 'react-router';
import shareIcon from '../images/shareIcon.svg';
// import PropTypes from 'prop-types';

function DetalhesComida() {
  const match = useRouteMatch();
  const { id: idRequest } = match.params;
  const [mealDetail, setMealDetail] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idRequest}`;
      const response = await fetch(url);
      const results = await response.json();
      console.log(results.meals);
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
        </>
      ) }

    </div>
  );
}

// DetalhesComida.propTypes = {

// }.isRequired;

export default DetalhesComida;

// Os ingredientes devem possuir o atributo ;
// O texto de instruções deve possuir o atributo data-testid="instructions";
// O vídeo, presente somente na tela de comidas, deve possuir o atributo data-testid="video";
// O card de receitas recomendadas deve possuir o atributo data-testid="${index}-recomendation-card";
// O botão de iniciar receita deve possuir o atributo data-testid="start-recipe-btn";
