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
                            <form>
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
                        <div className="container-fluid misGa1">
                            <button className="btn"><FontAwesomeIcon icon={faUser}/>&nbsp;&nbsp;Mi perfil</button><br></br>
                            <form method="get" action="/config">
                                <button className="btnConfig"><FontAwesomeIcon icon={faCog}/>&nbsp;&nbsp;Configuración</button>
                            </form>
                            <form method="get" action="/guardados">
                                <button className="btn"><FontAwesomeIcon icon={faBookmark}/>&nbsp;&nbsp;Guardados</button>
                            </form><br></br><br></br>
                            <button className="btn"><img src={require(("./components/cerrarSesion.svg"))} width="18px"></img>&nbsp;&nbsp;Cerrar sesión</button>
                            <br></br>
                        </div>
                    </div>
                    <div className="col col-4">
                        <div className="container asasa">
                            <p></p>
                        </div>
                        <div className="container-fluid misI ml-2">
                            <h1 align="left" name="cate" className="cat pt-2 pb-2">&nbsp;<FontAwesomeIcon icon={faCog}/> &nbsp;&nbsp;Configuración</h1>
                        </div>
                        <div className="container-fluid misGuard pt-4">
                            <button className="mb-3 botonVolver"><img  src={require('./components/volver.svg')} height="19px" width="19px"></img>&nbsp;&nbsp;Volver</button>
                            <div className="container guardadosCats">
                                <div className="container-fluid tituloGuard">
                                    <p className="pTitulo"><img  src={require('./components/edu.svg')}></img>&nbsp;&nbsp;Educación</p>
                                </div>
                                <div className="container selG">
                                    <h1 className="selGuar mt-3">Seleccione el grupo de publicaciones</h1><h1 className="selGuar" align="center">guardadas</h1><hr className="lineaGuar"></hr>
                                </div>
                                <form className="formCate" name="foro">
                                    <button className="btns btn0g ml-4 mt-5 mb-2" ><img className="mb-1" src={require('./components/info.svg')} height="19px" width="19px"></img>&nbsp;&nbsp;&nbsp;Información general</button>
                                    <br></br><br></br>
                                    <div align="center" className="row justify-content-center">
                                        <div className="col col-6">
                                            <button className="btns btn2g mt-5 mb-2" ><img  src={require('./components/edu.svg')} height="19px" width="19px"></img> &nbsp;Educación</button>
                                        </div>
                                        <div className="col col-6">
                                            <button className="btns mt-5 btn5g mb-2" ><img  src={require('./components/carita.svg')} height="19px" width="19px"></img> Relaciones<br></br>sociales</button>
                                        </div>
                                    </div>
                                    <div align="center"  className="row justify-content-center">
                                        <div className="col col-6">
                                            <button className="btns btn4g mt-4 mb-2" ><div className="form-inline"><img  src={require('./components/tenedor.svg')} height="19px" width="19px"></img> &nbsp;Alimentación</div></button>
                                        </div>
                                        <div className="col col-6">
                                            <button className="btns btn7g mt-4 mb-2" ><img  src={require('./components/arte.svg')} height="19px" width="19px"></img> &nbsp;Arte</button>
                                        </div>
                                    </div>
                                    <div align="center" className="row justify-content-center">
                                        <div className="col col-6">
                                            <button id="btn1" className="btns btn1g mt-4 mb-2"><img  src={require('./components/deportes.svg')} height="19px" width="19px"></img> &nbsp;Deportes</button>
                                        </div>
                                        <div className="col col-6">
                                            <button className="btns btn6g mt-4 mb-2"><img  src={require('./components/tec.svg')} height="19px" width="19px"></img> &nbsp;Tecnología</button>
                                        </div>
                                    </div>
                                    <div align="center" className="row justify-content-center">
                                        <div className="col col-6">
                                            <button className="btns btn3g mt-4 mb-2"><FontAwesomeIcon icon={faHeart} />&nbsp;Salud</button>
                                        </div>
                                        <div className="col col-6">
                                            <button className="btns btn8g mt-4 mb-2"><img  src={require('./components/doc.svg')} height="19px" width="19px"></img> Documentos <br></br> legales  </button>
                                        </div>
                                    </div>
                                </form>
                                <br></br><br></br>  
                            </div>
                            <br></br>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default config