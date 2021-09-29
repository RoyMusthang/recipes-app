import copy from 'clipboard-copy';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import shareIcon from '../images/shareIcon.svg';
import Header from '../components/Header';
import FilterButtonsDonesRecipes from '../components/FilterButtonsDonesRecipes';
// import PropTypes from 'prop-types';

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
  const doneRecipes = JSON.parse(localStorage.getItem('doneRecipes'));
  const [finished, setFinished] = useState(doneRecipes);

  return (
    <div>
      <Header title="Receitas Feitas" renderSearchButton={ false } />
      <div>
        <FilterButtonsDonesRecipes
          finished={ finished }
          setFinished={ setFinished }
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
            { (typeof item.tags === 'string') ? (<tags>{ item.tags }</tags>) : (
              item.tags.map((deregue, johnson) => (
                <tags
                  key={ johnson }
                  data-testid={ `${index}-${deregue}-horizontal-tag` }
                >
                  { deregue }
                </tags>
              ))) }
          </>
        ))}
      </div>
    </div>
  );
}

// ReceitasFeitas.propTypes = {

// }.isRequired;

export default ReceitasFeitas;
