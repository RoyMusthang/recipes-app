import React, { useEffect, useState } from 'react';

function ButtonCategoryDrinks() {
  const [category, setCategory] = useState([]);
  useEffect(() => {
    const categoryFood = async () => {
      const api = await fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list');
      const json = await api.json();
      const drink = json.drinks.filter((_, index) => index < Number('5'));
      setCategory(drink);
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

export default ButtonCategoryDrinks;
