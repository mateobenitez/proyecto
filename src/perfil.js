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

function borrarEditar(){
    var borrar = document.getElementsByClassName("editar")
    borrar[0].style.visibility = "hidden"
}

class perfil extends Component{
    render(){
        return(
            <div className="perfil">
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
                                <button id="btnAli" className="btn"> &nbsp;&nbsp;Alimentación</button><br></br>
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
                            <button className="btnPerfil"><img className="" src={require('./components/usuario.svg')} width="20px"></img>&nbsp;&nbsp;&nbsp;Mi perfil</button><br></br>
                            <form method="get" action="/config">
                                <button className="btn"><img className="" src={require('./components/configuracion.svg')} width="20px"></img>&nbsp;&nbsp;&nbsp;Configuración</button>
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
                                <img className="pt-2 pl-2" src={require('./components/usuario.svg')}></img>
                            </div>
                            <h1 align="left" name="cate" className="cat pt-2 pb-2"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Mi perfil</h1>
                        </div>
                        <div className="container-fluid misGuard pt-4">
                            <button className="mb-3 botonVolver"><img className="mb-1" src={require('./components/volver.svg')} height="19px" width="19px"></img>&nbsp;&nbsp;Volver</button>
                            <div className="container guardadosCats">
                                <div align="right">
                                    <button onClick={borrarEditar} className="mt-3 pb-1 pl-2 botonVolver"> Editar perfil &nbsp;&nbsp;<img className="mb-1" src={require('./components/editar.svg')} width="15px"></img></button>
                                </div>
                                <br></br><br></br>
                                <div className=" fotoPerfil">
                                    <img className="avatar pt-4" src={require('./components/dante.svg')} ></img>
                                </div>
                                <div className="editar">
                                    <div className="Nombre">
                                        <h1>Sergio Coppa</h1>
                                        <p>@SergioCoppa</p><br></br>
                                        <p><img src={require('./components/ubicacion.svg')}></img>&nbsp;Belgrano, Buenos Aires, Argentina</p>
                                        <p><img src={require('./components/ubicacion.svg')}></img>&nbsp;Profesor / Maestro</p>
                                    </div>
                                    <div className="descripcion container">
                                        <p>Hola soy Sergio me gusta comer pan y enseñar lengua. Tengo un hijo de 40 años al que le gusta jugar tenis y comer papas.</p>
                                    </div><hr></hr>                     
                                    <div className="container-fluid cont" align="center">
                                        <p className="pibe">Que lindo es enseñar tecnología! Super recomendado. </p>
                                        <div className="container imagenP">
                                            <img src={require("./components/nena.svg")}width="200" height="200" alt=""></img>
                                        </div>
                                        <div className="row justify-content-around">
                                            <div className="col col-5">
                                                <p>3 me gusta</p>
                                            </div>
                                            <div className="col col-5">
                                                <p>0 comentarios</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="editar1">
                                    <img src={require('./components/añImg.svg')}></img>
                                </div>
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



export default perfil