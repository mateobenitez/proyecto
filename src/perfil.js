import React, {Component} from 'react';
import MyNavBarPrinc from './components/navBarPruebaMenu.js';
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
import flechaArr from './components/flechaArr.svg'
import flechaAb from './components/flechaAb.svg'
var borrar = document.getElementsByClassName("editar")
var borrar1 = document.getElementsByClassName("editar1")
var locacion = document.getElementsByClassName("locac")
var pregsTitu = document.getElementsByClassName("Adicion")
var pregs = document.getElementsByClassName("pregAds")
var infoPer = document.getElementsByClassName("infoPer")
var infoTitu = document.getElementsByClassName("btnsPerfil")
var locTitu = document.getElementsByClassName("Locacion")
var infoClick = false
var locaClick = false
var pregClick = false
var editPais = document.getElementsByClassName("editPaís") 
var editCiud = document.getElementsByClassName("editProv")
var editProv = document.getElementsByClassName("editCiud")
var editConq = document.getElementsByClassName("editConq")
var editPres = document.getElementsByClassName("editPres")

function borrarEditar(){
    borrar[0].style.display = "none"
    borrar[1].style.display = "none"
    borrar1[0].style.display = "initial"
}

function location(){
    if(locaClick == false){
        locacion[0].style.display = "initial"
        pregsTitu[0].style.top = "5.5em"
        locTitu[0].style.top = "2.5em"
        locaClick = true
        infoTitu[1].innerHTML =  'Locación&nbsp; <img src="' + flechaAb + '" width="20px" height="20px" />'
        if(infoClick == false){
            editPais[0].style.top = "32.3em"
            editProv[0].style.top = "35.5em"
            editCiud[0].style.top = "38.7em"
        }else{
            editPais[0].style.top = null
            editProv[0].style.top = null
            editCiud[0].style.top = null
        }
        if(pregClick == true){
            editPres[0].style.top = "49.8em"
            editConq[0].style.top = "56.2em"
        }
        if(pregClick == true && infoClick == true){
            editPres[0].style.top = null
            editConq[0].style.top = null
        }
    }else{
        locaClick = false
        infoTitu[1].innerHTML =  'Locación&nbsp; <img src="' + flechaArr + '" width="38px" height="38px" />'
        locacion[0].style.display = null
        if(pregClick == true){
            editPres[0].style.top = "48em"
            editConq[0].style.top = "41.4em"
            if(infoClick == true){
                editPres[0].style.top = "56.2em"
                editConq[0].style.top = "62.6em"
            }
        }
    }
}

function adicion(){
    if(pregClick == false){
        pregs[0].style.display = "initial"
        pregsTitu[0].style.top = "5.5em"
        locTitu[0].style.top = "2.5em"
        pregClick = true
        infoTitu[2].innerHTML =  'Preguntas Adicionales&nbsp; <img src="' + flechaAb + '" width="20px" height="20px" />'
        if(locaClick == false){
            editConq[0].style.top = "48em"
            editPres[0].style.top = "41.4em"
        }
        else{
            editPres[0].style.top = "49.8em"
            editConq[0].style.top = "56.2em"
        }
        if(infoClick == true){
            editPres[0].style.top = "56.2em"
            editConq[0].style.top = "62.6em"
            if(locaClick == true){
                editPres[0].style.top = null
                editConq[0].style.top = null
            }
        }
    }else{
        pregClick = false
        pregs[0].style.display = null
        infoTitu[2].innerHTML = 'Preguntas Adicionales <img src="' + flechaArr + '" width="38px" height="38px" />'
    }
}

function Info(){
    if(infoClick == false){
        infoPer[0].style.display = "initial"
        pregsTitu[0].style.top = "5.5em"
        locTitu[0].style.top = "2.5em"
        infoClick = true
        infoTitu[0].innerHTML =  'Información Personal <img src="' + flechaAb + '" width="20px" height="20px" />'
        if(locaClick == true){
            editPais[0].style.top = null
            editProv[0].style.top = null
            editCiud[0].style.top = null
        }
        if(pregClick == true && locaClick == true){
            editPres[0].style.top = null
            editConq[0].style.top = null
        }
        if(pregClick == true){
            editPres[0].style.top = "56.2em"
            editConq[0].style.top = "62.6em"
        }
    }
    else{
        infoClick = false
        infoPer[0].style.display = null
        infoTitu[0].innerHTML =  'Información Personal <img src="' + flechaArr + '" width="38px" height="38px" />'
        if(locaClick == true && pregClick == true){
            editPres[0].style.top = "49.8em"
            editConq[0].style.top = "56.2em"
            editPais[0].style.top = "32.3em"
            editProv[0].style.top = "35.5em"
            editCiud[0].style.top = "38.7em"
        }
        if(locaClick == true){
            editPais[0].style.top = "32.3em"
            editProv[0].style.top = "35.5em"
            editCiud[0].style.top = "38.7em"
        }
    }
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
                            <button className="btn" id="btnPerfil"><img className="" src={require('./components/usuario.svg')} width="20px"></img>&nbsp;&nbsp;&nbsp;Mi perfil</button><br></br>
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
                        <div className="asas">
                            <p></p>
                        </div>
                        <div className="fondo">
                            <p></p>
                        </div>
                        <div className="asa">
                            <p></p>
                        </div>
                        <div className="container-fluid misG pt-4">
                            <form method="get" action="/perfil">
                                <button className="mb-3 botonVolver"><img className="mb-1" src={require('./components/volver.svg')} height="19px" width="19px"></img>&nbsp;&nbsp;Volver</button>
                            </form>
                            <div className="container guardadosCats">
                                <div align="right">
                                    <button onClick={borrarEditar} className="mt-3 pb-1 pl-2 botonVolver editar"> Editar perfil &nbsp;&nbsp;<img className="mb-1" src={require('./components/editar.svg')} width="15px"></img></button>
                                </div>
                                <br></br><br></br>
                                <div className=" fotoPerfil">
                                    <img className="avatar pt-4" src={require('./components/usuario.svg')} width="120"></img>
                                </div>
                                <div className="editar">
                                    <div className="Nombre">
                                        <h1>Sergio Coppa</h1>
                                        <p>@SergioCoppa</p><br></br>
                                        <p><img src={require('./components/ubicacion.svg')}></img>&nbsp;Belgrano, Buenos Aires, Argentina</p>
                                        <p><img src={require('./components/edu.svg')} width="18px"></img>&nbsp;Profesor / Maestro</p>
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
                                    <button className="añadirImg">Cambiar foto</button>
                                    <div>
                                        <button className="guardarCmb">Guardar cambios</button>
                                    </div>
                                    <div className="Infop">
                                        <button onClick={Info} className="btnsPerfil">Información Personal <img src={require('./components/flechaArr.svg')}></img> </button><hr></hr>
                                    </div>
                                    <div className="infoPer">
                                        <form className=" editForm">
                                            <input className="inputsEdit" type="text"></input><br></br><br></br>
                                            <input className="inputsEdit" type="text"></input><br></br><br></br>
                                            <input className="inputsEdit" type="text"></input><br></br><br></br>
                                            <input className="inputsEdit" type="text"></input><br></br><br></br>
                                            <input className="inputsEdit" type="text"></input>
                                        </form>
                                        <div className="pEdits">
                                            <p id="editNom">Nombre:</p>
                                            <p id="editApe">Apellido:</p>
                                            <p id="editUsu">Nombre de usuario:</p>
                                            <p id="editEma">Dirección de email:</p>
                                            <p id="editSoy">Soy:</p>
                                        </div>
                                    </div>
                                    <div className="Locacion">
                                        <button onClick={location} className="btnsPerfil">Localización<img src={require('./components/flechaArr.svg')}></img> </button><hr className="lineaPerfil"></hr>
                                    </div>
                                    <div className="locac">
                                        <form className="editForm1">
                                            <input className="inputsEdit" type="text"></input><br></br><br></br>
                                            <input className="inputsEdit" type="text"></input><br></br><br></br>
                                            <input className="inputsEdit" type="text"></input>
                                        </form>
                                        <div className="pEdits">
                                            <p className="editPaís">País:</p>
                                            <p className="editProv">Provincia / Estado:</p>
                                            <p className="editCiud">Ciudad / Localidad:</p>
                                        </div>
                                    </div>
                                    <div className="Adicion"> 
                                        <button onClick={adicion} className="btnsPerfil">Preguntas Adicionales <img src={require('./components/flechaArr.svg')}></img> </button><hr className="lineaPerfil"></hr>
                                    </div>
                                    <div className="pregAds">
                                        <form className="editForm2">
                                            <input className="inputsEdit" type="text"></input><br></br><br></br><br></br><br></br>
                                            <input className="inputsEdit" type="text"></input>
                                        </form>
                                        <div className="pEdits">
                                            <p align="center" className="editConq">¿Con que propósito<br></br>usa la página?</p>
                                            <p align="center" className="editPres"> Presentación <br></br>personal:</p>
                                        </div>
                                    </div>
                                </div><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
                            </div>
                            <br></br>
                        </div>
                        <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br> 
                    </div>
                </div>
            </div>
        )
    }
}



export default perfil