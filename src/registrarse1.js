import React, { Component } from 'react';
import MyNavBar from './components/NavBarInicio.js';
import MyFooter from './components/footer.js';
import './registrarse.css'
import{FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
    faAngleRight,
    faDumbbell,
    faGraduationCap,
    faHeart,
    faInfoCircle,
    faSmile,
    faLaptop,
    faPalette,
    faGavel
} from '@fortawesome/free-solid-svg-icons';

class Reg1 extends Component{
    render() {
        return (
            
            <div className="Reg">
                <MyNavBar/>
                <div align="center">
                    <h1 className="mb-5">¿A qué grupos le gustaría unirse?</h1>
                    <div className="form-inline">
                        <div className="container grupos">
                            <form name="foro">
                            <div className="row justify-content-center">
                                <div className="col col-4">
                                    <button id="btn1" name="btn1" className="btnNC mt-5 mb-2" ><FontAwesomeIcon icon={faDumbbell}/> &nbsp;Deportes</button>
                                </div>
                                <div className="col col-4">
                                    <button id="btn2" className="btnNO mt-5 mb-2" ><FontAwesomeIcon icon={faGraduationCap}/> &nbsp;Educación</button>
                                </div>
                            </div>
                            <div className="row justify-content-center">
                                <div className="col col-4">
                                    <button id="btn3" className="btnNO mt-4 mb-2"><FontAwesomeIcon icon={faHeart}/>&nbsp;Salud</button>
                                </div>
                                <div className="col col-4">
                                    <button id="btn4" className="btnNC mt-4 mb-2"><FontAwesomeIcon icon={faInfoCircle}/> Información <br></br>general</button>
                                </div>
                            </div>
                            <div className="row justify-content-center">
                                <div className="col col-4">
                                    <button id="btn5" className="btnNC mt-4 mb-2"><FontAwesomeIcon icon={faSmile}/> Relaciones<br></br>sociales</button>
                                </div>
                                <div className="col col-4">
                                    <button id="btn6" className="btnNO mt-4 mb-2"><FontAwesomeIcon icon={faLaptop}/> &nbsp;Tecnología</button>
                                </div>
                            </div>
                            <div className="row justify-content-center">
                                <div className="col col-4">
                                    <button id="btn7" className="btnNO mt-4 mb-2"><FontAwesomeIcon icon={faPalette}/> &nbsp;Arte</button>
                                </div>
                                <div className="col col-4">
                                    <button id="btn8" className="btnNC mt-4 mb-2"><FontAwesomeIcon icon={faGavel} /> Documentos <br></br> legales</button>
                                </div>
                            </div>
                            <div className="row justify-content-center">
                                <button className="btnM mt-4 mb-4" onClick="cambioDeTrue();"> Seleccionar todo</button>
                            </div>
                            </form>
                        </div>
                        <div className="as">
                            <form method="get" action="/registrarse2">   
                                <button className="cambio"><FontAwesomeIcon icon={faAngleRight} className="flecha"/></button>
                            </form>
                            <p className="mt-4">Siguiente</p>
                        </div>
                    </div>
                    <img className="imgReg1" src={require("./components/tipoGrupos.svg")}width="500" height="550" alt=""></img>
                </div>
                <MyFooter />
            </div>
        )
    }
}

export default Reg1;