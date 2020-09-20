import React from 'react';
import MyNavBar from './components/NavBarInicio.js';
import MyFooter from './components/footer.js';
import './registrarse.css'
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
                <div className="row justify-content-center">
                    <div className="col col3">
                        <input type="image" src={require("./components/nena.svg")} width="400" height="250"></input>
                        <input type="image" src={require("./components/nena.svg")} width="400" height="250"></input>
                        <input type="image" src={require("./components/nena.svg")} width="400" height="250"></input>
                        <input type="image" src={require("./components/nena.svg")} width="400" height="250"></input>
                    </div>
                </div>
                <div className="row justify-content-around">
                    <div className="col col-1">
                        <h2 className> nena </h2>
                    </div>
                    <div className="col col-1">
                        <h2>nena </h2>
                    </div>
                    <div className="col col-1">
                        <h2>nena </h2>
                    </div>
                    <div className="col col-1">
                        <h2>nena </h2>
                    </div>
                </div>  
                <form method="get" action="/registrarse1">   
                    <button className="cambio"><FontAwesomeIcon icon={faAngleRight} className="flecha"/></button>
                </form> 
                <p className="mt-4">1/4</p>
            </div>
            <MyFooter />
        </div>
    )
}

export default Reg;