import React from 'react';
import MyNavBar from './components/NavBarInicio.js';
import MyFooter from './components/footer.js';
import './registrarse.css'
import{FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faAngleRight} from '@fortawesome/free-solid-svg-icons';

function Reg2() {
    return (
        <div className="Reg">
            <MyNavBar/>
            <div align="center">
                <h1>¿En qué lugar se encuentra? maquina</h1>
            </div>
            <div className="row justify-content-left">
                <div className="col col-3">
                    <input className="text mt-5" type="text" placeholder="País"></input><br></br><hr className="linea-texto"></hr>
                    <input className="text mt-5" type="text" placeholder="Provincia / Estado"></input><br></br><hr className="linea-texto"></hr>
                    <input className="text mt-5" type="text" placeholder="Ciudad / Localidad"></input><br></br><hr className="linea-texto"></hr>
                </div>
            </div>
            <br></br><br></br><br></br><br></br>
            <div align="center">
                <form method="get" action="/registrarse3">   
                    <button className="cambio"><FontAwesomeIcon icon={faAngleRight} className="flecha"/></button>
                </form> 
                <p className="mt-4">Siguiente</p>
            </div>
            <img src={require("./components/lugar.svg")}width="1400" height="547" alt=""></img>
            <MyFooter />
        </div>
    )
}

export default Reg2;