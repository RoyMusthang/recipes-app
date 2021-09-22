import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import MealCard from '../components/MealCard';
// import PropTypes from 'prop-types';

function Comidas() {
  const { allMeals } = useSelector((state) => state.meals);
  return (
    <div>
      <Header title="Comidas" />
      <main>
        { (allMeals.length) && allMeals
          .filter((_, index) => index < Number('12'))
          .map((meal, i) => (<MealCard
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
