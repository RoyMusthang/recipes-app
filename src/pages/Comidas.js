import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Header from '../components/Header';
import Footer from '../components/Footer';
import MealCard from '../components/MealCard';
import ButtonCategoryMeals from '../components/ButtonCategoryMeals';

// import PropTypes from 'prop-types';

function Comidas() {
  const dispatch = useDispatch();
  const { allMeals, defaultURL } = useSelector((state) => state.meals);
  useEffect(() => {
    async function fetchApi() {
      const api = await fetch(defaultURL);
      const json = await api.json();
      dispatch({ type: 'MEALS_REQUESTS_SUCCESS', payload: json });
    }
    fetchApi();
    return () => {
      const url = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
      dispatch({ type: 'MEAL_URL', payload: url });
    };
  }, [dispatch, defaultURL]);

  return (
    <div>
      <Header title="Comidas" mealOrDrink="meal" />
      <main>
        <ButtonCategoryMeals />
        { (allMeals.length !== 0) && allMeals.meals
          .filter((_, index) => index < Number('12'))
          .map((meal, i) => (<MealCard
            id={ i }
            key={ `${i}-${meal.idMeal}` }
            meal={ meal }
          />)) }
      </main>
      <Footer />
    </div>
  );
}

// Comidas.propTypes = {

// }.isRequired;

export default Comidas;
