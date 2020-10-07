import React from 'react';
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
    faBookmark
} from '@fortawesome/free-solid-svg-icons';
function pagPrinc() {
    return (
        <div className="princ">
            <MyNavBarPrinc/>
            <div className="row justify-content-left">
                <div className="col col-3">
                    <div className="container-fluid misS ml-3">
                        <h1 align="left" className="cat pt-2  pb-2"><img src={require("./components/nena.svg")}width="35" height="35" alt=""></img> &nbsp;&nbsp;Categorías</h1>
                    </div>
                </div>
                <div className="col col-6">
                    <div className="container-fluid misI ml-2">
                        <h1 align="left" className="cat pt-2  pb-2">&nbsp;<FontAwesomeIcon icon={faInfoCircle}/> &nbsp;&nbsp;Información general</h1>
                    </div>
                </div>
                <div className="col col-3">
                    <div className="container-fluid misS mr-3">
                        <h1 align="left" className="cat pt-2  pb-2"> &nbsp;&nbsp; &nbsp;&nbsp;Categorías</h1>
                    </div>
                </div>
            </div>
            <div className="row justify-content-left">
                <div className="col col-3 pb-5">
                    <div className="container-fluid misG ml-3">
                        <div className="container misC">    
                            <form>
                                <button className="btn"><FontAwesomeIcon icon={faInfoCircle}/> &nbsp;&nbsp;Información general</button>
                                <button className="btn"><FontAwesomeIcon icon={faGraduationCap}/> &nbsp;&nbsp;Educación</button>
                                <button className="btn"><FontAwesomeIcon icon={faLaptop}/> &nbsp;&nbsp;Tecnología</button><br></br>
                                <button className="btn"><FontAwesomeIcon icon={faHeart}/> &nbsp;&nbsp;Salud</button><br></br>
                                <button className="btn"><FontAwesomeIcon icon={faDumbbell}/> &nbsp;&nbsp;Deportes</button>
                                <button className="btn"><FontAwesomeIcon icon={faGavel}/> &nbsp;&nbsp;Documentos legales</button>
                                <button className="btn"><FontAwesomeIcon icon={faPalette}/> &nbsp;&nbsp;Arte</button>
                                <button className="btn"><FontAwesomeIcon icon={faSmile}/> &nbsp;&nbsp;Relaciones sociales</button>
                            </form>
                        </div>    
                    </div>
                    <br></br><br></br><br></br>
                    <div className="container-fluid misS ml-3">
                        <h1 align="left" className="cat pt-3  pb-2"><img src={require("./components/nena.svg")}width="50" height="50" alt=""></img> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Social</h1>
                    </div>
                    <div className="container-fluid misG ml-3">
                        <div className="container misC">
                            <button className="btn"><FontAwesomeIcon icon={faUser}/>&nbsp;&nbsp;Mi perfil</button><br></br>
                            <button className="btn"><FontAwesomeIcon icon={faBell}/>&nbsp;&nbsp;Notificaciones</button>
                            <button className="btn"><FontAwesomeIcon icon={faCog}/>&nbsp;&nbsp;Configuración</button>
                            <button className="btn"><FontAwesomeIcon icon={faBookmark}/>&nbsp;&nbsp;Guardados</button>
                            <br></br><br></br><br></br><br></br>
                        </div>
                    </div>
                </div>
                <div className="col col-6">
                    <div className= "container-fluid misG pt-4">
                        <div className="container publicaciones">
                            <h1 className="cat mt-3 ml-3"><FontAwesomeIcon icon={faUser}/>&nbsp;&nbsp;&nbsp;¿Qué está pensando Hernán?</h1>
                            <br></br><br></br>  
                            <div align="right" className="pb-2">
                                <button type="submit" className="botonP">Hacer publicación</button>
                            </div>
                        </div>
                        <div className="mt-4 container publicaciones">
                            <div className="form-inline">
                                <h1 className="cat mt-3 ml-3"><FontAwesomeIcon icon={faUser}/></h1>
                                <p className="mt-3 pibe">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;El pibe</p>
                            </div>
                            <div className="container-fluid cont" align="center">
                                <p className="pibe">Que lindo es enseñar tecnología! Super recomendado. </p>
                                <div className="container imagenP">
                                    <img src={require("./components/nena.svg")}width="200" height="200" alt=""></img>
                                </div>
                                <div className="row justify-content-around">
                                    <div className="col col-5">
                                        <p>&nbsp;&nbsp;&nbsp;500k me gusta</p>
                                    </div>
                                    <div className="col col-5">
                                        <p>30 comentarios</p>
                                    </div>
                                </div>
                            </div>
                            <hr className="lineaP"></hr>
                            <div className="row justify-content-left">
                                    <div className="col col-4">
                                        <button type="submit" className="botonP">Me&nbsp;gusta</button>
                                    </div>
                                    <div className="col col-4">
                                        <button type="submit" className="botonP">Comentar</button>
                                    </div>
                                    <div className="col col-4">
                                        <button type="submit" className="botonP">Guardados</button>
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>
                <div className="col col-3">
                    <div className= "container-fluid misG">
                        ee
                    </div>
                </div>
            </div>
        </div>
    )
}

export default pagPrinc;