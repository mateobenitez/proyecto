import React, { Component } from 'react';
import MyNavBar2 from './NavBarIniciarSesión.js';
import MyFooter from './footer.js';
import ReactDOM from 'react-dom';
import './IniciarSesion.css';
import axios from 'axios'

function colorElementRed() {
  var elements = document.getElementsByClassName("txto");
  var lineas = document.getElementsByClassName("linea-texto");
  var obl = document.getElementsByClassName("obli-texto");
  for(var i = 0; i<2; i++){
    if(elements[i].value == "" || elements[i].value == null){
      lineas[i].style.backgroundColor = "red"
      obl[i].style.visibility = "visible";
    }
  }
  
  
}

var Validar = function(e) {
  var x = document.forms["form"]["contraseña"].value;
  var x1 = document.forms["form"]["usuario"].value;
  if (x == "" || x == null || x1 == "" || x1 == null) {
    e.preventDefault();
    colorElementRed();
    return false;
  }
  else{
    const userpass = x1 + ':' + x
    const encodedString = Buffer.from(userpass).toString('base64');
    console.log("ENCODED: ", encodedString)
  
    axios({
      method: 'post',
      url: 'http://localhost:3000/user/login',
      headers: {
        Authorization: 'Basic ' + encodedString
      }
  }).then((resp) => {
      console.log(resp.data);
      console.log("TOKEN: ", resp.data.token);
      window.localStorage.setItem('token', resp.data.token)
      this.setState({logged: true})
  }).catch((err) => console.log(err))
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
              <MyNavBar2 /><br></br><br></br><br></br>
              <div className="container">
                <div className="row justify-content-around ">
                  <div className="col col-3">
                  </div>
                  <div className="col col-3">
                    <h1 id="registro" className="quesi">Iniciar&nbsp;sesión</h1>
                  </div>
                </div>
              </div> 
              <div className="row justify-content-around"> 
                <div className="col col-3">
                  <img className="mt-4 nena" src={require('./logo.svg')}/>
                  <p className="texto">Un espacio de comunicación y encuentro organizado para mejorar la calidad de vida de sus hijos.</p>
                </div>
                <form className="form-inline aa" name="form" method="GET" onSubmit={Validar}>
                  <div className="col col-1 placeho">
                    <input id="usuario" className="txto" type="text" name="usuario" placeholder="&nbsp;Nombre de usuario" onChange={this.onChange}></input><br></br><hr className="l1 linea-texto"></hr>
                    <input id="contraseña" className="txto" name="contraseña" type="password" placeholder="&nbsp;Contraseña" onChange={this.onChange}></input><br></br><hr className="l2 linea-texto"></hr>
                    <p className="obli4 obli-texto">*Es obligatorio completar este campo</p>
                    <p className="obli5 pt-2 obli-texto">*Es obligatorio completar este campo</p>
                    <input className="boto3" type="submit" formAction="/princa" name="boton" value="Iniciar Sesión"></input>
                  </div>
                </form>
              </div>
              <div className="yaTienes2">
                <p className="ya mt-4">¿No tiene una cuenta?</p>
                <a className="ya2 mt-4" href="/inicio" >Registrarse</a>
              </div>
              <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
              <MyFooter />
            </div>  
          </div>
    );
  }
}
export default IniciarSesion;
