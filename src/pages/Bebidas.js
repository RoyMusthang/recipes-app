import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import DrinkCard from '../components/DrinkCard';
import Footer from '../components/Footer';
import Header from '../components/Header';
import ButtonCategoryDrinks from '../components/ButtonCategoryDrinks';
// import PropTypes from 'prop-types';

function Bebidas() {
  const dispatch = useDispatch();
  const { allDrinks, defaultURL } = useSelector((state) => state.drinks);
  useEffect(() => {
    async function fetchApi() {
      const api = await fetch(defaultURL);
      const json = await api.json();
      dispatch({ type: 'DRINKS_REQUESTS_SUCCESS', payload: json.drinks });
    }
    fetchApi();
    return () => {
      const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
      dispatch({ type: 'DRINK_URL', payload: url });
    };
  }, [dispatch, defaultURL]);

  return (
    <div>
      <Header title="Bebidas" mealOrDrink="drink" />
      <main>
        <ButtonCategoryDrinks />
        { (allDrinks.length !== 0) && allDrinks
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
