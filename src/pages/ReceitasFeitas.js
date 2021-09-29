import copy from 'clipboard-copy';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import shareIcon from '../images/shareIcon.svg';
import Header from '../components/Header';
import FilterButtonsDonesRecipes from '../components/FilterButtonsDonesRecipes';
// import PropTypes from 'prop-types';

const doneRecipes = [
  {
    id: '52771',
    type: 'comida',
    area: 'Italian',
    category: 'Vegetarian',
    alcoholicOrNot: '',
    name: 'Spicy Arrabiata Penne',
    image: 'https://www.themealdb.com/images/media/meals/ustsqw1468250014.jpg',
    doneDate: '23/06/2020',
    tags: ['Pasta', 'Curry'],
  },
  {
    id: '178319',
    type: 'bebida',
    area: '',
    category: 'Cocktail',
    alcoholicOrNot: 'Alcoholic',
    name: 'Aquamarine',
    image: 'https://www.thecocktaildb.com/images/media/drink/zvsre31572902738.jpg',
    doneDate: '23/06/2020',
    tags: [],
  },
];

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

function ReceitasFeitas() {
  const [copiedText, setCopiedText] = useState(false);
  const [finished, setFinished] = useState(doneRecipes);
  // useEffect(() => {
  //   localStorage.getItem(doneRecipes);
  // }, []);
  // const onClick = ({ target: { name } }) => {
  //   const filtroDeReceitas = finished.filter((item) => item.type.includes(name));
  //   setFinished(filtroDeReceitas);
  //   if (name === 'All') return setFinished(doneRecipes);
  // };

  return (
    <div>
      <Header title="Receitas Feitas" renderSearchButton={ false } />
      <div>
        {/* <button
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
        </button> */}
        <FilterButtonsDonesRecipes
          finished={ finished }
          setFinished={ setFinished }
          doneRecipes={ doneRecipes }
        />
        {finished.map((item, index) => (
          <>
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
            { (copiedText) && (<h3>Link copiado!</h3>) }
            <button
              type="button"
              onClick={ () => {
                copy(`http://localhost:3000/${item.type}s/${item.id}`);
                setCopiedText(true);
              } }
            >
              <img
                src={ shareIcon }
                alt="Botão de compartilhar"
                data-testid={ `${index}-horizontal-share-btn` }
              />
            </button>
            {item.tags.map((deregue, johnson) => (
              <tags
                key={ johnson }
                data-testid={ `${index}-${deregue}-horizontal-tag` }
              >
                { deregue }
              </tags>
            ))}
          </>
        ))}
      </div>
    </div>
  );
}

// ReceitasFeitas.propTypes = {

// }.isRequired;

export default ReceitasFeitas;
