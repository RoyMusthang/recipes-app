import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

function ButtonCategoryDrinks() {
  const [category, setCategory] = useState([]);
  const [toggle, setToggle] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    const categoryDrink = async () => {
      const api = await fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list');
      const json = await api.json();
      const drink = json.drinks.filter((_, index) => index < Number('5'));
      setCategory(drink);
    };
    categoryDrink();
  }, []);

  async function clickButton(categoryName) {
    if (toggle === false) {
      const api = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${categoryName}`);
      const json = await api.json();
      dispatch({ type: 'DRINKS_REQUESTS_SUCCESS', payload: json });
      setToggle(true);
    } else {
      const api = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=');
      const json = await api.json();
      dispatch({ type: 'DRINKS_REQUESTS_SUCCESS', payload: json });
      setToggle(false);
    }
  }

  return (
    <div>
      {category.map((cat, index) => (
        <button
          key={ index }
          type="button"
          data-testid={ `${cat.strCategory}-category-filter` }
          onClick={ () => { clickButton(cat.strCategory); } }
        >
          {cat.strCategory}
        </button>
      ))}
    </div>
  );
}

export default ButtonCategoryDrinks;
