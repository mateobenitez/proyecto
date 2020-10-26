import React, { Component } from 'react';
import "./app.css"
import MyNavBar from './components/NavBarInicio.js';
import MyFooter from './components/footer.js';
import ReactDOM from 'react-dom'

function colorElementRed() {
  var elements = document.getElementsByClassName("text");
  var lineas = document.getElementsByClassName("linea-texto");
  var obl = document.getElementsByClassName("obl-texto");
  for(var i = 0; i<6; i++){
    if(elements[i].value == "" || elements[i].value == null){
      lineas[i].style.backgroundColor = "red"
      obl[i].style.visibility = "visible";
    }
  }
}

var Validar = function(e) {
  var x = document.forms["form"]["nombre","apellido","usuario","email","contraseña","ccontraseña"].value;
  if (x == "" || x == null) {
    e.preventDefault();
    colorElementRed();
    return false;
  }
}

class Inicio extends Component{
  
 constructor(props){
   super();
   this.state = {
      nombre: '',
      apellido: '',
      usuario:'',
      email:'',
      contraseña:'',
      ccontraseña:'',
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
        <div className="Inicio">
            <div>
              <MyNavBar />
              <div className="container">
                <div className="row justify-content-around ">
                  <div className="col col-3">
                    <h1 className="que">¿Qué es?</h1>
                  </div>
                  <div className="col col-3">
                    <h1 id="registro" className="ques">Registrarse</h1>
                  </div>
                </div>
              </div> 
              <div className="row justify-content-around"> 
                <div className="col col-4">
                  <p className="mt-5 texto">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                  quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                  pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                  <img className="nena" src={require('./components/nena.svg')}/>
                </div>
                <form className="form-inline aa" name="form" method="GET" onSubmit={Validar}>
                  <div className="col col-3 placeh">
                    <input id="nombre" className="eliminar text mt-5" type="text" name="nombre"  placeholder="*Nombre" value={this.state.nombre} onChange={this.onChange}></input><br></br><hr className="eliminar2 li1 linea-texto"></hr>
                    <p className="obl obl-texto">*Es obligatorio completar este campo</p>
                    <input id="apellido" className="eliminar text mt-5" type="text" name="apellido" placeholder="*Apellido" value={this.state.apellido} onChange={this.onChange}></input><br></br><hr className="eliminar2 li2 linea-texto"></hr>
                    <p className="obl1 obl-texto">*Es obligatorio completar este campo</p>
                    <input id="usuario" className="text mt-5" type="text" name="usuario" placeholder="*Nombre de usuario" onChange={this.onChange}></input><br></br><hr className="li3 linea-texto"></hr>
                    <p className="obl2 obl-texto">*Es obligatorio completar este campo</p>
                    <input id="email" className="text mt-5" type="text" name="email"  placeholder="*Email"  onChange={this.onChange}></input><br></br><hr className="li4 linea-texto"></hr>
                    <p className="obl3 obl-texto">*Es obligatorio completar este campo</p>
                    <input id="contraseña" className="text mt-5" name="contraseña" type="password" placeholder="*Contraseña" onChange={this.onChange}></input><br></br><hr className="li5 linea-texto"></hr>
                    <p className="obl4 obl-texto">*Es obligatorio completar este campo</p>
                    <input id="ccontraseña" className="text mt-5 eliminar" name="ccontraseña" type="password" placeholder="*Confirmar contraseña" onChange={this.onChange}></input><br></br><hr className="eliminar2 li6 linea-texto"></hr>
                    <p className="obl5 obl-texto">*Es obligatorio completar este campo</p>
                    <input className="boton3" type="submit" formAction="/registrarse" name="boton" value="Registrarse"></input>
                  </div>
                  <div className="col col-3 placeh">
                    <hr className="mt-5 linea-reg"/>
                  </div> 
                </form>
              </div>
              <div className="row justify-content-center">
                <div className="col col-6"></div>
                <div className="col col-6">
                  <p className="ya">¿Ya tienes una cuenta?</p>
                  <a className="ya2" href="/IniciarSesion" >Iniciar sesión</a>
                </div>
              </div> 
              <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
              <MyFooter />
            </div>  
          </div>
    );
  }
}
export default Inicio;
