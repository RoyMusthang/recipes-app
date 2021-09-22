import React, { useEffect, useState } from 'react';
import { useRouteMatch } from 'react-router';
import shareIcon from '../images/shareIcon.svg';
// import PropTypes from 'prop-types';

function DetalhesComida() {
  const match = useRouteMatch();
  const { id: idRequest } = match.params;
  const [mealDetail, setMealDetail] = useState();

  useEffect(() => {
    const fetchApi = async () => {
      const url = `http://www.themealdb.com/api/json/v1/1/lookup.php?i=${idRequest}`;
      const response = await fetch(url);
      const results = await response.json();
      console.log(results[0]);
      setMealDetail(results);
    };
    fetchApi();
  }, [idRequest]);

  // const ingredients = [];

  // for (let i = 1; i <= Number('20'); i += 1) {
  //   if (mealDetail.strIngredient`${i}`.length !== 0) {
  //     ingredients.push(mealDetail.strIngredient`${i}`);
  //   }
  // }

  // console.log(ingredients);

  if (mealDetail.length === 0) return <p>Loading...</p>;
  return (
    <div>
      <img
        src={ mealDetail.strMealThumb }
        alt="Foto de Comida"
        data-testid="recipe-photo"
      />
      <h2 data-testid="recipe-title">{ mealDetail.strMeal }</h2>
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
      <h4 data-testid="recipe-category">{ mealDetail.strCategory }</h4>

      <p data-testid={ `${mealDetail.idMeal}-ingredient-name-and-measure{` }>a</p>

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
