import React, { Component } from 'react';
import MyNavBar from './components/NavBarInicio.js';
import MyFooter from './components/footer.js';
import './registrarse.css'
import Inicio from './inicio.js'
import{FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faAngleRight} from '@fortawesome/free-solid-svg-icons';

var conf = [false, false, false, false] 

function cambioDeColor(){
    var input1 = document.getElementsByClassName("quesos")
    if(conf[0] == false){
        conf[0] = true
        conf[1] = false
        input1[1].style.backgroundColor = null
        conf[2] = false
        input1[2].style.backgroundColor = null
        conf[3] = false
        input1[3].style.backgroundColor = null
        input1[0].style.backgroundColor = "rgba(196, 196, 196, 0.51)"
    }
    else{
        conf[0] = false
        input1[0].style.backgroundColor = null
    }
}

function cambioDeColor1(){
    var input1 = document.getElementsByClassName("quesos")
    if(conf[1] == false){
        conf[1] = true
        conf[0] = false
        input1[0].style.backgroundColor = null
        conf[2] = false
        input1[2].style.backgroundColor = null
        conf[3] = false
        input1[3].style.backgroundColor = null
        input1[1].style.backgroundColor = "rgba(196, 196, 196, 0.51)"
    }
    else{
        conf[1] = false
        input1[1].style.backgroundColor = null
    }
}

function cambioDeColor2(){
    var input1 = document.getElementsByClassName("quesos")
    if(conf[2] == false){
        conf[2] = true
        conf[1] = false
        conf[1] = false
        input1[1].style.backgroundColor = null
        conf[0] = false
        input1[0].style.backgroundColor = null
        conf[3] = false
        input1[3].style.backgroundColor = null
        input1[1].style.backgroundColor = null
        input1[2].style.backgroundColor = "rgba(196, 196, 196, 0.51)"
    }
    else{
        conf[2] = false
        input1[2].style.backgroundColor = null
    }
}

function cambioDeColor3(){
    var input1 = document.getElementsByClassName("quesos")
    if(conf[3] == false){
        conf[3] = true
        conf[1] = false
        conf[1] = false
        input1[1].style.backgroundColor = null
        conf[2] = false
        input1[2].style.backgroundColor = null
        conf[0] = false
        input1[0].style.backgroundColor = null
        input1[1].style.backgroundColor = null
        input1[3].style.backgroundColor = "rgba(196, 196, 196, 0.51)"
    }
    else{
        conf[3] = false
        input1[3].style.backgroundColor = null
    }
}

function noTeVayas(e){
        if(conf[0] || conf[1] || conf[2] || conf[3] == true){

        } else{
            e.preventDefault()
        }
    
}

class Reg extends Component {

    render(){
        return (
            <div className="Reg">
                <MyNavBar/>
                <div align="center">
                    <h1><b>Bienvenido</b></h1>  
                    <p className="mt-4 mb-5">Complete más información personal para mejorar su <br></br>experiencia.</p>
                    <h2 className="mt-3">¿Qué sos?</h2>
                    <br></br><br></br><br></br><br></br>
                    <form method="get" action="/">
                        <button className="atras pt-2 pb-2 pl-3 pr-3"><img className="pb-1" src={require('./components/flechaAt.svg')}></img>&nbsp;&nbsp;Atrás</button>
                    </form>
                    <form method="get" action="/registrarse1">
                        <button onClick={noTeVayas} className="continuar pt-2 pb-2 pl-3 pr-3">Siguiente&nbsp;&nbsp;<img className="pb-1" src={require('./components/continuar.svg')}></img></button>
                    </form>
                    <div className="row justify-content-center">
                        <div className="col col-3">
                            <div className="quesos">
                                <input id="quesos1" type="image" onClick={cambioDeColor} src={require("./components/queSos1.svg")} width="400" height="250" alt=""></input><br></br><br></br>
                            </div>
                            <h2>Padre/Madre o Tutor</h2>
                        </div>
                        <div className="col col-3">
                            <div className="quesos">
                                <input id="quesos2" type="image" onClick={cambioDeColor1} src={require("./components/queSos2.svg")} width="400" height="250" alt=""></input><br></br><br></br>
                            </div>
                            <h2>Doctor/Especialista</h2>
                        </div>
                        <div className="col col-3">
                            <div className="quesos">
                                <input id="quesos3" type="image" onClick={cambioDeColor2} src={require("./components/queSos3.svg")} width="400" height="250" alt=""></input><br></br><br></br>
                            </div>    
                            <h2>Profesor/Maestro</h2>
                        </div>
                        <div className="col col-3">
                            <div className="quesos">
                                <input id="quesos4" type="image" onClick={cambioDeColor3} src={require("./components/queSos4.svg")} width="400" height="250" alt=""></input><br></br><br></br>
                            </div>    
                            <h2>Otro</h2>
                        </div>
                    </div>
                    <br></br><br></br><br></br><br></br> 
                </div>
                <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
                <MyFooter />
            </div>
        )
    }
}

export default Reg;