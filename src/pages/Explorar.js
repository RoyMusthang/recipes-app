import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
// import PropTypes from 'prop-types';

function Explorar() {
  return (
    <div>
      <Header title="Explorar" renderSearchButton={ false } />
      <section>
        <Link data-testid="explore-food" to="/explorar/comidas">Explorar Comidas</Link>
        <Link data-testid="explore-drinks" to="/explorar/bebidas">Explorar Bebidas</Link>
      </section>
      <Footer />
    </div>
  );
}

// Explorar.propTypes = {

// }.isRequired;

export default Explorar;
