export async function getMeals(inputValue/* , inputRadioValue */) {
  try {
    const url = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${inputValue}`;
    return (await fetch(url)).json();
  } catch (error) {
    console.log(error);
  }
}

export async function getDrinks(inputValue/* , inputRadioValue */) {
  try {
    const url2 = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${inputValue}`;
    return (await fetch(url2)).json();
  } catch (error) {
    console.log(error);
  }
}

// https://www.themealdb.com/api/json/v1/1/filter.php?i={ingrediente}
