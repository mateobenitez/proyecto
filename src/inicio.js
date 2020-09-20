import React from 'react';
import "./app.css"
import MyNavBar from './components/NavBarInicio.js';
import MyFooter from './components/footer.js';



function Inicio() {
  return (
        <div className="Inicio">
            <div>
              <MyNavBar/> 
              <div className="row justify-content-center">
                <div className="col">
                  <h1 className="que">¿Qué es?</h1>
                </div>
                
                <div className="col">
                  <h1 className="que">Registrarse</h1>
                </div>
              </div>  
              <div className="row justify-content-around"> 
                <div className="col col-4">
                  <p className="mt-5 texto">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                  quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                  pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
                <form className="form-inline">
                <div className="col col-3 placeh">
                    <input className="text mt-5" type="text" placeholder="Nombre de usuario"></input><br></br><hr className="linea-texto"></hr>
                    <input className="text mt-5" type="text" placeholder="Email"></input><br></br><hr className="linea-texto"></hr>
                    <input className="text mt-5" type="password" placeholder="Contraseña"></input><br></br><hr className="linea-texto"></hr>
                    <input className="text mt-5" type="password" placeholder="Confirmar contraseña"></input><br></br><hr className="linea-texto"></hr>
                  </div>
                  <div className="col col-3 placeh">
                    <hr className="mt-5 linea-reg"/>
                  </div> 
                </form>
              </div>
              <div className="nena">
                <img src={require("./components/nena.svg")}width="200" height="200" alt=""></img>
              </div>  
              <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
              <MyFooter />
            </div>  
          </div>
  );
}
export default Inicio;
