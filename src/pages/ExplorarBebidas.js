import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
// import PropTypes from 'prop-types';

function ExplorarBebidas() {
  return (
    <div>
      <Header title="Explorar Bebidas" renderSearchButton={ false } />
      <section>
        <Link
          data-testid="explore-by-ingredient"
          to="/explorar/bebidas/ingredientes"
        >
          Por Ingredientes
        </Link>
        <Link data-testid="explore-surprise" to="/bebidas/178319">Me Surpreenda!</Link>
      </section>
      <Footer />
    </div>
  );
}

// ExplorarBebidas.propTypes = {

// }.isRequired;

export default ExplorarBebidas;
