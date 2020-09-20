import React from 'react';
import "./app.css"
import Registrarse from './registrarse.js'
import Inicio from './inicio.js'
import Registrarse1 from './registrarse1.js'
import { 
  BrowserRouter as Router, 
  Switch, 
  Route 
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/registrarse">
          <Registrarse />
        </Route>
        <Route path="/registrarse1">
          <Registrarse1 />
        </Route>
        <Route path="/">
          <Inicio />
        </Route>
      </Switch>  
    </Router>
  );
}
export default App;
