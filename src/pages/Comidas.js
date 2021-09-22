import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Header from '../components/Header';
import Footer from '../components/Footer';
import MealCard from '../components/MealCard';

// import PropTypes from 'prop-types';

function Comidas() {
  const dispatch = useDispatch();
  useEffect(() => {
    async function fetchApi() {
      const api = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=');
      const json = await api.json();
      dispatch({ type: 'MEALS_REQUESTS_SUCCESS', payload: json });
    }
    fetchApi();
  }, []);
  const { allMeals } = useSelector((state) => state.meals);
  return (
    <div>
      <Header title="Comidas" mealOrDrink="meal" />
      <main>
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
