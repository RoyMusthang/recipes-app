import React from 'react';
import './App.css';
import './styles/detalhes.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch, Route } from 'react-router-dom';
import {
  Login,
  Comidas,
  Bebidas,
  DetalhesComida,
  DetalhesBebida,
  ComidaEmProcesso,
  BebidaEmProgresso,
  Explorar,
  ExplorarComidas,
  ExplorarBebidas,
  ComidasIngredientes,
  BebidasIngredientes,
  ComidaOrigem,
  Perfil,
  ReceitasFeitas,
  ReceitasFavoritas,
  NotFound,
} from './pages';

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
      <Route exact path="/explorar/comidas/area" component={ ComidaOrigem } />
      <Route exact path="/comidas/:id/in-progress" component={ ComidaEmProcesso } />
      <Route exact path="/bebidas/:id/in-progress" component={ BebidaEmProgresso } />
      <Route path="*" component={ NotFound } />
    </Switch>
  );
}

export default App;
