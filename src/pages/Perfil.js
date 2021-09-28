import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
// import PropTypes from 'prop-types';

function Perfil() {
  const history = useHistory();
  const emailLocalStorage = JSON.parse(localStorage.getItem('user'));

  function logout() {
    localStorage.clear();
    history.push('/');
  }

  const notEmail = 'Nenhum email registrado';
  return (
    <div>
      <Header title="Perfil" renderSearchButton={ false } />
      <section>
        <h3
          data-testid="profile-email"
        >
          { (!emailLocalStorage) ? notEmail : emailLocalStorage.email }
        </h3>
        <Link data-testid="profile-done-btn" to="/receitas-feitas">Receitas Feitas</Link>
        <Link
          data-testid="profile-favorite-btn"
          to="/receitas-favoritas"
        >
          Receitas Favoritas
        </Link>
        <button
          onClick={ logout }
          data-testid="profile-logout-btn"
          type="button"
        >
          Sair
        </button>
      </section>
      <Footer />
    </div>
  );
}

// Perfil.propTypes = {

// }.isRequired;

export default Perfil;
