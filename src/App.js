import React from 'react';
import ReactDOM from 'react-dom'
import Registrarse from './registrarse.js'
import Inicio from './inicio.js'
import IniciarSesion from './components/IniciarSesion.js'
import Registrarse1 from './registrarse1.js'
import Registrarse2 from './registrarse2.js'
import Registrarse3 from './registrarse3.js'
import PagPrinc from './páginaPrincipal.js'
import PagPrinca from './páginaPrincipal copy.js'
import { 
  BrowserRouter as Router, 
  Switch, 
  Route 
} from 'react-router-dom';

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
        <Route path="/registrarse">
          <Registrarse />
        </Route>
        <Route path="/registrarse1">
          <Registrarse1 />
        </Route>
        <Route path="/registrarse2">
          <Registrarse2 />
        </Route>
        <Route path="/registrarse3">
          <Registrarse3 />
        </Route>
        <Route path="/">
          <Inicio />
        </Route>
      </Switch>  
    </Router>
  );
}
export default App;
