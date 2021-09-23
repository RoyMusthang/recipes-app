import React, { useEffect, useState } from 'react';

function ButtonCategoryMeals() {
  const [category, setCategory] = useState([]);
  useEffect(() => {
    const categoryFood = async () => {
      const api = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?c=list');
      const json = await api.json();
      const meals = json.meals.filter((_, index) => index < Number('5'));
      setCategory(meals);
    };
    categoryFood();
  }, []);
  return (
    <div>
      {category.map((cat, index) => (
        <button
          key={ index }
          type="button"
          data-testid={ `${cat.strCategory}-category-filter` }
        >
          {cat.strCategory}
        </button>
      ))}
    </div>
  );
}

export default ButtonCategoryMeals;
