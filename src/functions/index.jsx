export const createIngredientsList = (eatableDetail, ingredients) => {
  if (eatableDetail && eatableDetail.length !== 0) {
    for (let i = 1; i <= Number('20'); i += 1) {
      if (eatableDetail[0][`strIngredient${i}`]) {
        const ing = `${eatableDetail[0][`strIngredient${i}`]}`;
        const mes = `${eatableDetail[0][`strMeasure${i}`]}`;
        ingredients[i - 1] = `${ing} ${(mes === 'null') ? '' : mes}`;
      } else break;
    }
  }

  return ingredients;
};

export const whatever = () => {};
