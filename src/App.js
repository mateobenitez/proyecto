import React from 'react';
import MyNavBar from './components/NavBarInicio.js';
import "./app.css"

function App() {
  return (
    <div className="App">
      <div>
        <MyNavBar/> 
        <div className="row justify-content-center">
          <div className="col col-4">
            <h1 className="que">¿Qué es?</h1>
          </div>
          <div className="col col-4">
          </div>
        </div>
        <div className= "row justify-content-center">
          <div className="col-4">
            <p className="texto">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
          <div className="col-4">  
            <img width="150" height="130" className= "imagen"  src={require("./components/a.jpg")} alt=""/>
          </div>
        </div>  
      </div>
      <div>
        <div align="center">
          <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
          <h1 className="reg-titulo">Registrarse</h1>
        </div>
        <hr className="linea-reg"></hr>
        <div>
          <input className="text mt-5" type="text" placeholder="Nombre de usuario"></input><br></br><hr className="linea-texto"></hr>
          <input className="text mt-5" type="text" placeholder="Email"></input><br></br><hr className="linea-texto"></hr>
          <input className="text mt-5" type="password" placeholder="Contraseña"></input><br></br><hr className="linea-texto"></hr>
          <input className="text mt-5" type="password" placeholder="Confirmar contraseña"></input><br></br><hr className="linea-texto"></hr>
        </div>
        <div align="center">
          <br></br><br></br>
          <p className="mt-5">Registrarse</p>
          
          <p>¿Ya tienes una cuenta?</p>
          <a href="#"className="nav-link a-sesion">Iniciar sesión</a>
        </div>
      </div>  
    </div>
  );
}
export default App;
