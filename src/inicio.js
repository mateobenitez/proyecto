import React, { Component } from 'react';
import "./app.css"
import MyNavBar2 from './components/NavBarInicio2.js';
import MyFooter from './components/footer.js';
import ReactDOM from 'react-dom'
import ojoT from './components/ojoT.svg'
import oj from './components/ojo.svg'
import axios from 'axios';
import { 
  BrowserRouter as Router, 
  Switch, 
  Route,
  Link 
} from 'react-router-dom';
import {  useCookies  } from 'react-cookie';



var elements = document.getElementsByClassName("text");
var lineas = document.getElementsByClassName("linea-texto");
var obl = document.getElementsByClassName("obl-texto");
var mostrarClick1 = true
var mostrarClick = true
var ojo = document.getElementsByClassName("ojo")
var ojoConf = document.getElementsByClassName("ojoConf")



function colorElementRed() {
  for(var i = 0; i<6; i++){
    if(elements[i].value == "" || elements[i].value == null){
      lineas[i].style.backgroundColor = "red"
      obl[i].style.visibility = "visible";
    }
  }
}



var Validar = function(e) {
  var x1 = document.forms["form"]["ccontraseña"].value;
  var x2 = document.forms["form"]["nombre"].value;
  var x3 = document.forms["form"]["apellido"].value;
  var x4 = document.forms["form"]["usuario"].value;
  var x5 = document.forms["form"]["email"].value;
  var x6 = document.forms["form"]["contraseña"].value;
  if (x1 == "" || x1 == null || x2 == "" || x2 == null || x3 == "" || x3 == null ||
  x4 == "" || x4 == null ||x5 == "" || x5 == null || x6 == "" || x6 == null) {
    e.preventDefault();
    colorElementRed();
    return false;
  }
  else if(x1 != x6){
    e.preventDefault()
    lineas[5].style.backgroundColor = "red"
    obl[6].style.visibility = "initial"
    obl[5].style.visibility = "hidden"
    obl[4].style.visibility = "hidden"
    obl[3].style.visibility = "hidden"
    obl[2].style.visibility = "hidden"
    obl[1].style.visibility = "hidden"
    obl[0].style.visibility = "hidden"
    lineas[0].style.backgroundColor = null
    lineas[1].style.backgroundColor = null
    lineas[2].style.backgroundColor = null
    lineas[3].style.backgroundColor = null
    lineas[4].style.backgroundColor = null
    lineas[5].style.backgroundColor = "red"
  }
  else{
    axios({
      method: "post",
      url: "http://localhost:3000/admin/registrarse",
      data: {
        nombre: this.state.nombre,
        apellido: this.state.apellido, 
        name_user: this.state.ususario,
        mail: this.state.email,
        password: this.state.contraseña
      }
    })
      .then((resp) => {
        const userpass = this.state.usuario + ':' + this.state.nombre
        const encodedString = Buffer.from(userpass).toString('base64');
        console.log("ENCODED: ", encodedString)
    })
      .catch((err) => {
        console.log(err)
    })
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

function mostrarConf(){
  if(mostrarClick1){
    elements[5].type = "text"
    mostrarClick1 = false
    ojoConf[0].innerHTML = '<img src="' + oj + '" width="25px" height="25px" />'
  }else{
    elements[5].type = "password"
    mostrarClick1 = true
    ojoConf[0].innerHTML = '<img src="' + ojoT + '" width="25px" height="25px" />'
  }
  
}

function mostrar(){
  if(mostrarClick){
    elements[4].type = "text"
    mostrarClick = false
    ojo[0].innerHTML = '<img src="' + oj + '" width="25px" height="25px" />'
  }else{
    elements[4].type = "password"
    mostrarClick = true
    ojo[0].innerHTML = '<img src="' + ojoT + '" width="25px" height="25px" />'
  }
}



function mostrarOjo(){
  ojo[0].style.display = "initial"
}

function mostrarOjo2(){
  ojoConf[0].style.display = "initial"
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
      ccontraseña:''
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
            <MyNavBar2 /><br></br><br></br><br></br>
              <div className="container">
                <div className="row justify-content-around ">
                  <div className="col col-3">
                    <h1 className="que"></h1>
                  </div>
                  <div className="col col-3">
                    <h1 id="registro" className="ques">Registrarse {this.state.nom} </h1>
                  </div>
                </div>
              </div> 
              <div className="row justify-content-around"> 
                <div className="col col-3 ">
                  <img className="mt-4 nena" src={require('./components/logo.svg')}/>
                  <p className="texto">Un espacio de comunicación y encuentro organizado sobre TEA.</p>
                </div>
                <form className="form-inline aa" name="form" method="GET" onSubmit={Validar}>
                  <div className="col col-1 placeh">
                    <input id="nombre" className="eliminar text" type="text" name="nombre"  placeholder="Nombre" value={this.state.nombre} onChange={this.onChange}></input><br></br><hr className="eliminar2 li1 linea-texto"></hr>
                    <p className="obl obl-texto">*Es obligatorio completar este campo</p>
                    <input id="apellido" className="eliminar text" type="text" name="apellido" placeholder="Apellido" value={this.state.apellido} onChange={this.onChange}></input><br></br><hr className="eliminar2 li2 linea-texto"></hr>
                    <p className="obl1 obl-texto">*Es obligatorio completar este campo</p>
                    <input id="usuario" className="text" type="text" name="usuario" placeholder="Nombre de usuario" onChange={this.onChange}></input><br></br><hr className="li3 linea-texto"></hr>
                    <p className="obl2 obl-texto">*Es obligatorio completar este campo</p>
                    <input id="email" className="text" type="text" name="email" placeholder="Email"  onChange={this.onChange}></input><br></br><hr className="li4 linea-texto"></hr>
                    <p className="obl3 obl-texto">*Es obligatorio completar este campo</p>
                    <input onClick={mostrarOjo} id="contraseña" className="text" name="contraseña" type="password" placeholder="Contraseña" onChange={this.onChange}></input><br></br><hr className="li5 linea-texto"></hr>
                    <p className="obl4 obl-texto">*Es obligatorio completar este campo</p>
                    <input onClick={mostrarOjo2} id="ccontraseña" className="text eliminar" name="ccontraseña" type="password" placeholder="Confirmar contraseña" onChange={this.onChange}></input><br></br><hr className="eliminar2 li6 linea-texto"></hr>
                    <p className="obl5 obl-texto">*Es obligatorio completar este campo</p>
                    <p className="obl6 obl-texto">*Las contraseñas ingresadas son diferentes</p>
                    <input className="boton3" type="submit" formAction="/registrarse" name="boton" value="Registrarse"></input>
                  </div>
                </form>
              </div>
              <button onClick={mostrar} className="ojo"><img src={require('./components/ojoT.svg')}></img></button>
              <button onClick={mostrarConf} className="ojoConf"><img src={require('./components/ojoT.svg')}></img></button>
              <div className="yaTienes">
                <p className="ya">¿Ya tiene una cuenta?</p>
                <a className="ya2" href="/IniciarSesion" >Iniciar sesión</a>
              </div>
              <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
              <MyFooter />
            </div>  
          </div>
    );
  }
}
export default Inicio; 