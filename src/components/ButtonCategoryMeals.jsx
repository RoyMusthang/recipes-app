import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

function ButtonCategoryMeals() {
  const [category, setCategory] = useState([]);
  const [toggle, setToggle] = useState(false);
  const [currentCategory, setCurrentCategory] = useState('');
  const dispatch = useDispatch();
  useEffect(() => {
    const categoryFood = async () => {
      const api = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?c=list');
      const json = await api.json();
      const meals = json.meals.filter((_, index) => index < Number('5'));
      setCategory(meals);
    };
    categoryFood();
  }, []);

  async function requestDefault() {
    const api = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=');
    const json = await api.json();
    dispatch({ type: 'MEALS_REQUESTS_SUCCESS', payload: json });
  }

  async function onClickCategory(categoryName) {
    setCurrentCategory(categoryName);
    if (!toggle || categoryName !== currentCategory) {
      const api = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryName}`);
      const json = await api.json();
      dispatch({ type: 'MEALS_REQUESTS_SUCCESS', payload: json });
      setToggle(true);
    } else {
      requestDefault();
      setToggle(false);
    }
  }

  return (
    <div>
      <button
        onClick={ () => {
          requestDefault();
          setToggle(false);
        } }
        type="button"
        data-testid="All-category-filter"
      >
        All
      </button>
      {category.map((cat, index) => (
        <button
          key={ index }
          type="button"
          data-testid={ `${cat.strCategory}-category-filter` }
          onClick={ () => { onClickCategory(cat.strCategory); } }
        >
          {cat.strCategory}
        </button>
      ))}
    </div>
  );
}

export default ButtonCategoryMeals;
