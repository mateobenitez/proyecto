import React from 'react';
import ReactDOM from 'react-dom'
import Registrarse from './registrarse.js'
import Inicio from './inicio.js'
import IniciarSesion from './components/IniciarSesion.js'
import Registrarse1 from './registrarse1.js'
import Registrarse2 from './registrarse2.js'
import PagPrinc from './páginaPrincipal.js'
import PagPrinca from './páginaPrincipal copy.js'
import Contacto from './contacto.js'
import Acerca from './acercaDe.js'
import Guardados from './guardados.js'
import Config from './configuración.js'
import Perfil from './perfil.js'
import Perfil2 from './perfil2.js'
import axios from 'axios';
import { 
  BrowserRouter as Router, 
  Switch, 
  Route 
} from 'react-router-dom';

var registro = "a"
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/IniciarSesion">
          <IniciarSesion />
        </Route>
        <Route path="/princa">
          <PagPrinca />
        </Route>
        <Route path="/princ">
          <PagPrinc />
        </Route>
        <Route path="/registrarse" component={Registrarse} />
        <Route path="/registrarse1" component={Registrarse1}/>
        <Route path="/registrarse2">
          <Registrarse2 />
        </Route>
        <Route path="/contacto">
          <Contacto />
        </Route>
        <Route path="/acerca">
          <Acerca />
        </Route>
        <Route path="/guardados">
          <Guardados />
        </Route>
        <Route path="/config">
          <Config />
        </Route>
        <Route path="/perfil">
          <Perfil />
        </Route>
        <Route path="/perfil2">
          <Perfil2 />
        </Route>
        <Route path="/">
          <Inicio />
        </Route>
      </Switch>  
    </Router>
  );
}
export default App;
