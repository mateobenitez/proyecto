import React from 'react';
import MyNavBar from './components/NavBarInicio.js';
import MyFooter from './components/footer.js';
import './registrarse.css'
import{FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faAngleRight} from '@fortawesome/free-solid-svg-icons';

function Reg3() {
    return (
        <div className="Reg">
            <MyNavBar/>
            <div align="center">
                <h1>Por favor complete su perfil...</h1>
                <div className="container-fluid completar">
                    <br></br><br></br><br></br><br></br><br></br><br></br>
                </div>
                <div className="container-fluid completar2">
                    <br></br><br></br>
                    <div className="row justify-content-center">
                        <div className="col col-3">
                            <p>Nombre de usuario:</p>
                        </div>
                        <div className="col col-3">
                            <input className="textCompletar mb-5" type="text" placeholder="Ej: Jorge123"></input><br></br><hr className="linea-completar"></hr>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col col-3 mail">
                            <p>Dirección de Email:</p>
                        </div>
                        <div className="col col-3">
                            <input className="textCompletar mb-5" type="text" placeholder="Ej: jorgejorge@jorge.jorge"></input><br></br><hr className="linea-completar"></hr>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col col-3 soy">
                            <p>Soy:</p>
                        </div>
                        <div className="col col-3">
                            <input className="textCompletar mb-5" type="text" placeholder="Padre / Profesor"></input><br></br><hr className="linea-completar"></hr>
                        </div>
                    </div>
                    <div className="row justify-content-center mt-3">
                        <div className="col col-3 país">
                            <p>País:</p>
                        </div>
                        <div className="col col-3">
                            <input className="textCompletar mb-5" type="text" placeholder="Ej: Argentina"></input><br></br><hr className="linea-completar"></hr>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col col-3 provincia">
                            <p>Provincia / Estado:</p>
                        </div>
                        <div className="col col-3">
                            <input className="textCompletar mb-5" type="text" placeholder="Ej: Buenos Aires"></input><br></br><hr className="linea-completar"></hr>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col col-3 ciudad">
                            <p>Ciudad / Localidad:</p>
                        </div>
                        <div className="col col-3">
                            <input className="textCompletar mb-5" type="text" value="Capital Federal"></input><br></br><hr className="linea-completar"></hr>
                        </div>
                    </div>
                    <div className="row justify-content-center mt-3">
                        <div className="col col-3 ">
                            <p>¿Con que proposito<br></br> usa la página?</p>
                        </div>
                        <div className="col col-3">
                            <input className="textCompletar mb-5" type="text" value="hola"></input><br></br><hr className="linea-completar" defaultValue></hr>
                        </div>
                    </div>
                    <br></br><br></br>
                </div>
                <div className="finalizar">
                    <form method="get" action="/princ">   
                        <button className="cambio "><FontAwesomeIcon icon={faAngleRight} className="flecha"/></button>
                    </form> 
                    <p className="mt-4">Finalizar</p>
                </div>
            </div>
            <MyFooter />
        </div>
    )
}

export default Reg3;