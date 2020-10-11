import React from 'react';
import MyNavBar from './components/NavBarInicio.js';
import MyFooter from './components/footer.js';
import './registrarse.css'
import Inicio from './inicio.js'
import{FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faAngleRight} from '@fortawesome/free-solid-svg-icons';



function Reg() {
    return (
        <div className="Reg">
            <MyNavBar/>
            <div align="center">
                <h1>Bienvenido maquina</h1>
                <p className="mt-4 mb-5">Complete más información, dale no seas gato</p>
                <h2 className="mt-3">¿Qué sos?</h2>
                <br></br><br></br>
                <div className="row justify-content-center">
                    <div className="col col3">
                        <input type="image" src={require("./components/queSos1.svg")} width="400" height="250" alt=""></input>
                        <h2>Padre/Madre o Tutor</h2>
                    </div>
                    <div className="col col3">
                        <input type="image" src={require("./components/queSos2.svg")} width="400" height="250" alt=""></input>
                        <h2>Doctor/Especialista</h2>
                    </div>
                    <div className="col col3">
                        <input type="image" src={require("./components/queSos3.svg")} width="400" height="250" alt=""></input>
                        <h2>Profesor/Maestro</h2>
                    </div>
                    <div className="col col3">
                        <input type="image" src={require("./components/queSos4.svg")} width="400" height="250" alt=""></input>
                        <h2>Otro</h2>
                    </div>
                </div>
                <form method="get" action="/registrarse1">   
                    <button className="cambio">&nbsp;&nbsp;<FontAwesomeIcon icon={faAngleRight} className="flecha"/></button>
                </form> 
                <p className="mt-4">Siguiente</p>
            </div>
            <MyFooter />
        </div>
    )
}

export default Reg;