import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../components/Header';
import Footer from '../components/Footer';
import MealCard from '../components/MealCard';
import AreaDropdown from '../components/AreaDropdown';
// import PropTypes from 'prop-types';

function ComidaOrigem() {
  const dispatch = useDispatch();
  const { allMeals, defaultURL } = useSelector((state) => state.meals);
  const [urlRequest, setUrlRequest] = useState(defaultURL);
  useEffect(() => {
    const fetchRequest = async () => {
      const request = await fetch(urlRequest);
      const json = await request.json();
      dispatch({ type: 'MEALS_REQUESTS_SUCCESS', payload: json });
    };
    fetchRequest();
  }, [dispatch, urlRequest]);

  return (
    <div>
      <Header title="Explorar Origem" mealOrDrink="meal" />
      <AreaDropdown setUrlRequest={ setUrlRequest } />
      { (allMeals.length !== 0) && allMeals.meals
        .filter((_, index) => index < Number('12'))
        .map((meal, i) => (<MealCard
          id={ i }
          key={ `${i}-${meal.idMeal}` }
          meal={ meal }
        />)) }
      <Footer />
    </div>
  );
}

// ComidaOrigem.propTypes = {

// }.isRequired;

export default ComidaOrigem;
