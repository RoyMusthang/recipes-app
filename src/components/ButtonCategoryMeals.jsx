import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

function ButtonCategoryMeals() {
  const [category, setCategory] = useState([]);
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

  async function buttonClick(categoryName) {
    const api = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryName}`);
    const json = await api.json();
    dispatch({ type: 'MEALS_REQUESTS_SUCCESS', payload: json });
  }

  return (
    <div>
      {category.map((cat, index) => (
        <button
          key={ index }
          type="button"
          data-testid={ `${cat.strCategory}-category-filter` }
          onClick={ () => { buttonClick(cat.strCategory); } }
        >
          {cat.strCategory}
        </button>
      ))}
    </div>
  );
}

export default ButtonCategoryMeals;
