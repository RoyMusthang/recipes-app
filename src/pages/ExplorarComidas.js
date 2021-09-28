import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
// import PropTypes from 'prop-types';

function ExplorarComidas() {
  return (
    <div>
      <Header title="Explorar Comidas" renderSearchButton={ false } />
      <section>
        <Link
          data-testid="explore-by-ingredient"
          to="/explorar/comidas/ingredientes"
        >
          Por Ingredientes
        </Link>
        <Link
          data-testid="explore-by-area"
          to="/explorar/comidas/area"
        >
          Por Local de Origem
        </Link>
        <Link data-testid="explore-surprise" to="/comidas/52771">Me Surpreenda!</Link>
      </section>
      <Footer />
    </div>
  );
}

// ExplorarComidas.propTypes = {

// }.isRequired;

export default ExplorarComidas;
