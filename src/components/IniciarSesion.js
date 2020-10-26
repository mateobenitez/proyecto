import React, { Component } from 'react';
import MyNavBar from './NavBarInicio.js';
import MyFooter from './footer.js';
import ReactDOM from 'react-dom';
import './IniciarSesion.css';

function colorElementRed() {
  var elements = document.getElementsByClassName("txto");
  var lineas = document.getElementsByClassName("linea-texto");
  var obl = document.getElementsByClassName("obli-texto");
  for(var i = 0; i<3; i++){
    if(elements[i].value == "" || elements[i].value == null){
      lineas[i].style.backgroundColor = "red"
      obl[i].style.visibility = "visible";
    }
  }
  
  
}

var Validar = function(e) {
  var x = document.forms["form"]["usuario","email","contraseña"].value;
  if (x == "" || x == null) {
    e.preventDefault();
    colorElementRed();
    return false;
  }
}


class IniciarSesion extends Component{
  
 constructor(props){
   super();
   this.state = {
      usuario:'',
      email:'',
      contraseña:'',
   }
   this.onChange = this.onChange.bind(this);
 }
 onChange(e){
   let name = e.target.name;
   let value = e.target.value;
   this.setState({
     [name]: value,
   });
 }


  render() {
    return (
        <div className="IniciarSesion">
            <div>
              <MyNavBar />
              <div className="container">
                <div className="row justify-content-around ">
                  <div className="col col-3">
                    <h1 className="que">¿Qué es?</h1>
                  </div>
                  <div className="col col-3">
                    <h1 id="registro" className="quesi">Iniciar&nbsp;sesión</h1>
                  </div>
                </div>
              </div> 
              <div className="row justify-content-around"> 
                <div className="col col-4">
                  <p className="mt-5 ttxt">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                  quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                  pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                  <img className="nen" src={require('./nena.svg')}/>
                </div>
                <form className="form-inline aa" name="form" method="GET" onSubmit={Validar}>
                  <div className="col col-3 placeho">
                    <input id="usuario" className="txto mt-5" type="text" name="usuario" placeholder="*Nombre de usuario" onChange={this.onChange}></input><br></br><hr className="l1 linea-texto"></hr>
                    <p className="obli3 obli-texto">*Es obligatorio completar este campo</p>
                    <input id="email" className="txto mt-5" type="text" name="email"  placeholder="*Email"  onChange={this.onChange}></input><br></br><hr className="l2 linea-texto"></hr>
                    <p className="obli4 obli-texto">*Es obligatorio completar este campo</p>
                    <input id="contraseña" className="txto mt-5" name="contraseña" type="password" placeholder="*Contraseña" onChange={this.onChange}></input><br></br><hr className="l3 linea-texto"></hr>
                    <p className="obli5 obli-texto">*Es obligatorio completar este campo</p>
                    <input className="boto3" type="submit" formAction="/princ" name="boton" value="Iniciar Sesión"></input>
                  </div>
                  <div className="col col-3 placeh">
                    <hr className="mt-5 linea-regi"/>
                  </div> 
                </form>
              </div>
              <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
              <MyFooter />
            </div>  
          </div>
    );
  }
}
export default IniciarSesion;
