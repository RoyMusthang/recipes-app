import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
// import PropTypes from 'prop-types';

function BebidasIngredientes() {
  return (
    <div>
      <Header title="Explorar Ingredientes" renderSearchButton={ false } />
      <Footer />
    </div>
  );
}

// BebidasIngredientes.propTypes = {

// }.isRequired;

export default BebidasIngredientes;
