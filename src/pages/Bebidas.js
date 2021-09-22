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
      <Header title="Bebidas" />
      <main>
        { (allDrinks.length) && allDrinks
          .filter((_, index) => index < Number('12'))
          .map((drink, i) => (<DrinkCard
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
