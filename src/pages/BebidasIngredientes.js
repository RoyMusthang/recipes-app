import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../components/Header';
import Footer from '../components/Footer';
import IngredientsDrinkCard from '../components/IngredientsDrinkCard';
// import PropTypes from 'prop-types';

function BebidasIngredientes() {
  const dispatch = useDispatch();
  const { drinkIngredients } = useSelector((state) => state.drinks);
  useEffect(() => {
    const fetchRequest = async () => {
      const request = await fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list');
      const json = await request.json();
      dispatch({ type: 'DRINK_INGREDIENTS', payload: json.drinks });
    };
    fetchRequest();
  }, [dispatch]);
  const loading = <span>Loading...</span>;
  return (
    <div>
      <Header title="Explorar Ingredientes" renderSearchButton={ false } />
      { (!drinkIngredients) ? loading : (drinkIngredients
        .filter((_, i) => i < Number('12'))
        .map(({ strIngredient1: ingredient }, i) => (
          <IngredientsDrinkCard
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

// BebidasIngredientes.propTypes = {

// }.isRequired;

export default BebidasIngredientes;
