import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import {
  Input,
  ButtonLogin,
  FormLogin,
  DivLogin,
  DivBackgroundLogin
}  from '../styles/styles.js';
// import PropTypes from 'prop-types';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [validation, setValidation] = useState(true);
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    function validator() {
      const min = 6;
      const okEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        .test(email);
        // https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
      const validPassword = password.length > min;
      if (okEmail && validPassword === true) {
        return setValidation(false);
      }
    }
    validator();
  }, [email, password]);

  function onSubmit(event) {
    event.preventDefault();
    localStorage.setItem('mealsToken', 1);
    localStorage.setItem('cocktailsToken', 1);
    localStorage.setItem('user', JSON.stringify({ email }));
    setRedirect(true);
  }
  if (redirect) return <Redirect to="/comidas" />;
  return (
    <>
      <DivBackgroundLogin />
      <FormLogin onSubmit={ onSubmit }>
        <DivLogin>
          <Input
            type="email"
            value={ email }
            onChange={ (event) => setEmail(event.target.value) }
            data-testid="email-input"
            placeholder='Insira seu email'
          />
          <Input
            type="password"
            data-testid="password-input"
            value={ password }
            onChange={ (event) => setPassword(event.target.value) }
            placeholder='Insira sua senha'
          />
          <ButtonLogin
            type="submit"
            disabled={ validation }
            data-testid="login-submit-btn"
          >
            Entrar
          </ButtonLogin>
        </DivLogin>
      </FormLogin>
    </>
  );
}

// Login.propTypes = {

// }.isRequired;

export default Login;
