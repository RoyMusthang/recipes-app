export async function getMeals(inputValue, inputRadioValue) {
  try {
    if (inputRadioValue === 'name-radio') {
      const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${inputValue}`;
      return await (await fetch(url)).json();
    }
    if (inputRadioValue === 'first-letter-radio') {
      const url = `https://www.themealdb.com/api/json/v1/1/search.php?f=${inputValue}`;
      return await (await fetch(url)).json();
    }
    if (inputRadioValue === 'ingredient-radio') {
      const url = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${inputValue}`;
      return await (await fetch(url)).json();
    }
  } catch (error) {
    console.log(error);
  }
}

export async function getDrinks(inputValue, inputRadioValue) {
  try {
    if (inputRadioValue === 'name-radio') {
      const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${inputValue}`;
      return await (await fetch(url)).json();
    }
    if (inputRadioValue === 'first-letter-radio') {
      const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${inputValue}`;
      return await (await fetch(url)).json();
    }
    if (inputRadioValue === 'ingredient-radio') {
      const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${inputValue}`;
      return await (await fetch(url)).json();
    }
  } catch (error) {
    console.log(error);
  }
}
