import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
// import PropTypes from 'prop-types';

function ExplorarBebidas() {
  return (
    <div>
      <Header title="Explorar Bebidas" renderSearchButton={ false } />
      <Footer />
    </div>
  );
}

// ExplorarBebidas.propTypes = {

// }.isRequired;

export default ExplorarBebidas;
