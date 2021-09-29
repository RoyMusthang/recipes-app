import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../components/Header';
import Footer from '../components/Footer';
import IngredientsMealCard from '../components/IngredientsMealCard';
// import PropTypes from 'prop-types';

function ComidasIngredientes() {
  const dispatch = useDispatch();
  const { mealIngredients } = useSelector((state) => state.meals);
  useEffect(() => {
    const fetchRequest = async () => {
      const request = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?i=list');
      const requestJson = await request.json();
      dispatch({ type: 'MEAL_INGREDIENTS', payload: requestJson.meals });
    };
    fetchRequest();
  }, [dispatch]);
  const loading = <span>Loading...</span>;
  return (
    <div>
      <Header title="Explorar Ingredientes" renderSearchButton={ false } />
      { (!mealIngredients) ? loading : (mealIngredients
        .filter((_, i) => i < Number('12'))
        .map(({ strIngredient: ingredient }, i) => (
          <IngredientsMealCard
            key={ `${i}-${ingredient}` }
            id={ i }
            ingredient={ ingredient }
          />
        ))
      ) }
      <Footer />
    </div>
  );
}

// ComidasIngredientes.propTypes = {

// }.isRequired;

export default ComidasIngredientes;
