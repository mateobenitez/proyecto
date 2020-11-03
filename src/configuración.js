import React, {Component} from 'react';
import MyNavBarPrinc from './components/NavBarPrinc.js';
import './princ.css'
import{FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
    faDumbbell,
    faGraduationCap,
    faHeart,
    faInfoCircle,
    faSmile,
    faLaptop,
    faPalette,
    faGavel,
    faBell,
    faCog,
    faUser,
    faBookmark,
    faBorderStyle,
    faPencilAlt
} from '@fortawesome/free-solid-svg-icons';

var name = window.$seleccionados;
var hola = localStorage["seleccionados"]

class config extends Component{
    
    render(){
        return(
            <div className="configuracion">
                <MyNavBarPrinc/>
                <div className="row">
                    <div className="col col-2">
                    </div>
                    <div className="col col-2">
                        <div className="container-fluid misS">
                            <h1 className="cat pt-2 pb-2"><img src={require("./components/nena.svg")}width="35" height="35" alt=""></img> &nbsp;&nbsp;Categorías</h1>
                        </div>
                        <div className="container-fluid misGa">
                            <form method="get" action='/princa'>
                                <button id="btnInfo" name="btnInfo" className="btn mt-2" ><FontAwesomeIcon icon={faInfoCircle}/> &nbsp;&nbsp;Información general</button>
                                <hr className="mt-1 mb-1"></hr>
                                <button id="btnAli" className="btn"> {hola[0]} &nbsp;&nbsp;Alimentación</button><br></br>
                                <button id="btnArt" className="btn"> &nbsp;&nbsp;Arte</button><br></br>
                                <button id="btnDep" className="btn"> &nbsp;&nbsp;Deportes</button>
                                <button id="btnDoc" className="btn"> &nbsp;&nbsp;Documentos legales</button>
                                <button id="btnEdu" className="btn" >&nbsp;&nbsp;Educación</button>
                                <button id="btnRel" className="btn"> &nbsp;&nbsp;Relaciones sociales</button><br></br>
                                <button id="btnSal" className="btn"> &nbsp;&nbsp;Salud</button><br></br>
                                <button id="btnTec" className="btn"> &nbsp;&nbsp;Tecnología</button><br></br>
                            </form>
                        </div>
                        <div className="container-fluid misS1">
                            <h1 className="cat pt-2 pb-2"><img src={require("./components/nena.svg")}width="50" height="50" alt=""></img> &nbsp;&nbsp;&nbsp;&nbsp;Social</h1>
                        </div>
                        <div className="container-fluid pt-3 misGa1">
                            <form method="get" action="/perfil">
                                <button className="btn"><img className="" src={require('./components/usuario.svg')} width="20px"></img>&nbsp;&nbsp;&nbsp;Mi perfil</button><br></br>
                            </form>
                            <form method="get" action="/config">
                                <button className="btn" id="btnConfig"><img className="" src={require('./components/configuracion.svg')} width="20px"></img>&nbsp;&nbsp;&nbsp;Configuración</button>
                            </form>
                            <form method="get" action="/guardados">
                                <button className="btn"><img className="" src={require('./components/guardados.svg')} width="20px"></img>&nbsp;&nbsp;&nbsp;Guardados</button>
                            </form><br></br><br></br>
                            <button className="btn"><img src={require(("./components/cerrarSesion.svg"))} width="18px"></img>&nbsp;&nbsp;&nbsp;Cerrar sesión</button>
                            <br></br>
                        </div>
                    </div>
                    <div className="col col-4">
                        <div className="container asasa">
                            <p></p>
                        </div>
                        <div className="container-fluid misI ml-2 form-inline">
                            <div className="circuloCont">
                                <img className="pt-2 pl-2" src={require('./components/configuracion.svg')}></img>
                            </div>
                            <h1 align="left" name="cate" className="cat pt-2 pb-2">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Configuración</h1>
                        </div>
                        <div className="container-fluid misI ml-2">
                            
                        </div>
                        <div className="container-fluid misGuard pt-4">
                            <button className="mb-3 botonVolver"><img  src={require('./components/volver.svg')} height="19px" width="19px"></img>&nbsp;&nbsp;Volver</button>
                            <div className="container guardadosCats">
                                <div className="container-fluid tituloGuard">
                                    <p className="pTitulo"><img  src={require('./components/edu.svg')}></img>&nbsp;&nbsp;Educación</p>
                                </div>
                                <div className="container selG">
                                    <br></br>
                                    <button className="botonDrop">Modos&nbsp;<img src={require('./components/flechaAb.svg')}></img></button>
                                    <hr className="lineaGuar mt-2"></hr>
                                    <div className="dropDown">
                                        <div className="form-inline">
                                            <p>Modo monocromático</p>&nbsp;&nbsp;&nbsp;
                                            <label className="mb-3 switch">
                                                <input type="checkbox"></input>
                                                <span className="slider round"></span>
                                            </label>
                                            <p className="pl-3">Modo pictogramas</p>&nbsp;&nbsp;&nbsp;
                                            <label className="mb-3 switch">
                                                <input type="checkbox"></input>
                                                <span className="slider round"></span>
                                            </label>
                                        </div>
                                    </div>
                                    <br></br><br></br><br></br><br></br><br></br>
                                    <button className="botonDrop boton1pos">Cambiar contraseña &nbsp;<img src={require('./components/flechaAb.svg')}></img></button>
                                    <hr className="lineaGuar lineaPos mt-2"></hr>
                                    <div className="dropDown">
                                        <div className="form-inline">
                                            <p>Modo monocromático</p>&nbsp;&nbsp;&nbsp;
                                            <label className="mb-3 switch">
                                                <input type="checkbox"></input>
                                                <span className="slider round"></span>
                                            </label>
                                            <p className="pl-3">Modo pictogramas</p>&nbsp;&nbsp;&nbsp;
                                            <label className="mb-3 switch">
                                                <input type="checkbox"></input>
                                                <span className="slider round"></span>
                                            </label>
                                        </div>
                                    </div>
                                    <div className="guardarConf">
                                        <button className="guardarConfig pt-2 pb-2 pl-5 pr-5">Guardar cambios</button>
                                    </div>
                                </div>
                                <br></br>
                            </div>
                            <br></br>
                        </div>
                        <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>  
                    </div>
                </div>
            </div>
        )
    }
}



export default config