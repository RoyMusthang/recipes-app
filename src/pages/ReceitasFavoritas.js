import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Header from '../components/Header';
import CNPCDTQ from '../components/CNPCDTQ';

const ifTypeComida = (index, area, category) => (
  <p
    data-testid={ `${index}-horizontal-top-text` }
  >
    { `${area} - ${category}` }
  </p>
);

const ifTypeBebida = (index, category, alcoholicOrNot) => (
  <p
    data-testid={ `${index}-horizontal-top-text` }
  >
    { category }
    <br />
    { alcoholicOrNot }
  </p>
);

function ReceitasFavoritas() {
  const { favoriteRecipes } = useSelector((state) => state.user);
  const [finished, setFinished] = useState(favoriteRecipes);

  const onClick = ({ target: { name } }) => {
    const filtroDeReceitas = finished.filter((item) => item.type.includes(name));
    setFinished(filtroDeReceitas);
    if (name === 'All') return setFinished(favoriteRecipes);
  };

  return (
    <div>
      <Header title="Receitas Favoritas" renderSearchButton={ false } />
      <div>
        <button
          type="button"
          data-testid="filter-by-all-btn"
          name="All"
          onClick={ onClick }
        >
          All
        </button>
        <button
          type="button"
          name="comida"
          data-testid="filter-by-food-btn"
          onClick={ onClick }
        >
          Food
        </button>
        <button
          type="button"
          name="bebida"
          data-testid="filter-by-drink-btn"
          onClick={ onClick }
        >
          Drinks
        </button>
        <br />
        {finished.map((item, index) => (
          <>
            {console.log(item)}
            <CNPCDTQ
              id={ item.id }
              index={ index }
              type={ item.type }
              name={ item.name }
              image={ item.image }
            />
            <Link to={ `/${item.type}s/${item.id}` }>
              <img
                style={ { width: '100px' } }
                alt="Imagem da receita"
                src={ item.image }
                data-testid={ `${index}-horizontal-image` }
              />
            </Link>
            { item.type === 'comida' && ifTypeComida(index, item.area, item.category) }
            { item.type === 'bebida'
              && ifTypeBebida(index, item.category, item.alcoholicOrNot) }
            <Link to={ `/${item.type}s/${item.id}` }>
              <p data-testid={ `${index}-horizontal-name` }>{ item.name }</p>
            </Link>
            <p
              data-testid={ `${index}-horizontal-done-date` }
            >
              { item.doneDate }
            </p>
          </>
        ))}
      </div>
    </div>
  );
}

// }.isRequired;
// favoriteRecipes:"[{"id":"15346","type":"bebida","area":"","category":"Cocktail","name":"155 Belmont","image":"https://www.thecocktaildb.com/images/media/drink/yqvvqs1475667388.jpg","alcoholicOrNot":"Alcoholic"},{"id":"13501","type":"bebida","area":"","category":"Shot","name":"ABC","image":"https://www.thecocktaildb.com/images/media/drink/tqpvqp1472668328.jpg","alcoholicOrNot":"Alcoholic"},{"id":"52977","type":"comida","area":"Turkish","category":"Side","name":"Corba","image":"https://www.themealdb.com/images/media/meals/58oia61564916529.jpg","alcoholicOrNot":""}]"

export default ReceitasFavoritas;
