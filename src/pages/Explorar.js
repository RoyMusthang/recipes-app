import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
// import PropTypes from 'prop-types';

function Explorar() {
  return (
    <div>
      <Header title="Explorar" renderSearchButton={ false } />
      <Footer />
    </div>
  );
}

// Explorar.propTypes = {

// }.isRequired;

export default Explorar;
