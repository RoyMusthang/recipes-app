import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
// import PropTypes from 'prop-types';

function ComidasIngredientes() {
  return (
    <div>
      <Header title="Explorar Ingredientes" renderSearchButton={ false } />
      <Footer />
    </div>
  );
}

// ComidasIngredientes.propTypes = {

// }.isRequired;

export default ComidasIngredientes;
