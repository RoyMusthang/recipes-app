import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch, Route } from 'react-router-dom';

import Login from './pages/Login';
import Comidas from './pages/Comidas';
import Bebidas from './pages/Bebidas';
import DetalhesComida from './pages/DetalhesComida';
import DetalhesBebida from './pages/DetalhesBebida';
import ComidaEmProcesso from './pages/ComidaEmProcesso';
import BebidaEmProgresso from './pages/BebidaEmProgresso';
import Explorar from './pages/Explorar';
import ExplorarComidas from './pages/ExplorarComidas';
import ExplorarBebidas from './pages/ExplorarBebidas';
import ComidasIngredientes from './pages/ComidasIngredientes';
import BebidasIngredientes from './pages/BebidasIngredientes';
import ComidasOrigem from './pages/ComidaOrigem';
import Perfil from './pages/Perfil';
import ReceitasFeitas from './pages/ReceitasFeitas';
import ReceitasFavoritas from './pages/ReceitasFavoritas';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={ Login } />
      <Route exact path="/explorar" component={ Explorar } />
      <Route exact path="/comidas" component={ Comidas } />
      <Route exact path="/bebidas" component={ Bebidas } />
      <Route exact path="/perfil" component={ Perfil } />
      <Route exact path="/receitas-feitas" component={ ReceitasFeitas } />
      <Route exact path="/receitas-favoritas" component={ ReceitasFavoritas } />
      <Route exact path="/explorar/comidas" component={ ExplorarComidas } />
      <Route exact path="/explorar/bebidas" component={ ExplorarBebidas } />
      <Route exact path="/comidas/:id" component={ DetalhesComida } />
      <Route exact path="/bebidas/:id" component={ DetalhesBebida } />
      <Route
        exact
        path="/explorar/comidas/ingredientes"
        component={ ComidasIngredientes }
      />
      <Route
        exact
        path="/explorar/bebidas/ingredientes"
        component={ BebidasIngredientes }
      />
      <Route exact path="/explorar/comidas/area" component={ ComidasOrigem } />
      <Route exact path="/comidas/:id/in-progress" component={ ComidaEmProcesso } />
      <Route exact path="/bebidas/:id/in-progress" component={ BebidaEmProgresso } />
    </Switch>
  );
}

export default App;
