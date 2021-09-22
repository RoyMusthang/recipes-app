import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
// import PropTypes from 'prop-types';

function ExplorarComidas() {
  return (
    <div>
      <Header title="Explorar Comidas" renderSearchButton={ false } />
      <Footer />
    </div>
  );
}

// ExplorarComidas.propTypes = {

// }.isRequired;

export default ExplorarComidas;
