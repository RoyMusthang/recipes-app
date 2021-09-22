import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
// import PropTypes from 'prop-types';

function Perfil() {
  return (
    <div>
      <Header title="Perfil" renderSearchButton={ false } />
      <Footer />
    </div>
  );
}

// Perfil.propTypes = {

// }.isRequired;

export default Perfil;
