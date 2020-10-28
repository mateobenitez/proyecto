import React, {Component} from 'react';
import MyNavBar from './components/NavBarInicio.js';
import MyFooter from './components/footer.js';
import './registrarse.css'
import{FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faAngleRight} from '@fortawesome/free-solid-svg-icons';



function colorElementRed() {
  var elements = document.getElementsByClassName("text");
  var lineas = document.getElementsByClassName("linea-texto");
  var obl = document.getElementsByClassName("obli-tds");
    for(var i = 0; i<3; i++){
      if(elements[i].value == "" || elements[i].value == null){
        lineas[i].style.backgroundColor = "red"
        obl[i].style.visibility = "visible"
      }
    }
  }

var Validar = function(e) {
    var x = document.forms["form"]["ciudad"].value;
    var x1 = document.forms["form"]["provincia"].value;
    var x2 = document.forms["form"]["pais" ].value;
    if (x == "" || x == null||x1 == "" || x1 == null || x2 == "" || x2 == null ) {
      e.preventDefault();
      colorElementRed();
      return false;
    }
  } 

class Reg2 extends Component{
  
    constructor(props){
      super();
      this.state = {
         ciudad: '',
         provincia: '',
         pais:''
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
   

    render(){
        return (
            <div className="Reg">
                <MyNavBar/>
                <form method="get" action="/registrarse1">
                    <button  className="atras pt-2 pb-2 pl-3 pr-3"><img className="pb-1" src={require('./components/flechaAt.svg')}></img>&nbsp;&nbsp;Atrás</button>
                </form>
                <form method="get" action="/princa">
                    <button onClick={Validar} className="continuar pt-2 pb-2 pl-3 pr-3">Finalizar&nbsp;&nbsp;<img className="pb-1" src={require('./components/finalizar.svg')}></img></button>
                </form>
                <div align="center">
                    <h1>¿En qué lugar se encuentra? maquina</h1>
                </div>
                <div className="row justify-content-left">
                    <div className="col col-3">
                        <form name="form" method="GET">
                            <input id="pais" className="text mt-5" type="text" placeholder="*País"></input><br></br><hr className="lin1 linea-texto"></hr>
                            <p className="obli1 obli-tds">*Es obligatorio completar este campo</p>
                            <input id="provincia" className="text mt-5" type="text" placeholder="*Provincia / Estado"></input><br></br><hr className="lin2 linea-texto"></hr>
                            <p className="obli2 obli-tds">*Es obligatorio completar este campo</p>
                            <input id="ciudad" className="text mt-5" type="text" placeholder="*Ciudad / Localidad"></input><br></br><hr className="lin3 linea-texto"></hr>
                            <p className="obli3 obli-tds">*Es obligatorio completar este campo</p>
                            <div className="cmb2"> 
                              <button className="cambio" formAction="/princa"><FontAwesomeIcon icon={faAngleRight} className="flecha"/></button>
                              <p className="mt-4 ml-2 ">Finalizar</p>
                            </div> 
                        </form>
                    </div>
                </div>                
                <img src={require("./components/lugar.svg")}width="1400" height="547" alt=""></img>
                <MyFooter />
            </div>
        )
    }
}

export default Reg2;