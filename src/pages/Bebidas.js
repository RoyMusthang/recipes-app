import React from 'react';
import { useSelector } from 'react-redux';
import DrinkCard from '../components/DrinkCard';
import Footer from '../components/Footer';
import Header from '../components/Header';
// import PropTypes from 'prop-types';

function Bebidas() {
  const { allDrinks } = useSelector((state) => state.drinks);
  return (
    <div>
      <Header title="Bebidas" mealOrDrink="drink" />
      <main>
        { (allDrinks.length !== 0) && allDrinks.drinks
          .filter((_, index) => index < Number('12'))
          .map((drink, i) => (<DrinkCard
            id={ i }
            key={ `${i}-${drink.idDrink}` }
            drink={ drink }
          />)) }
      </main>
      <Footer />
    </div>
  );
}

// Bebida.propTypes = {

// }.isRequired;

export default Bebidas;
