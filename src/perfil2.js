import React, {Component} from 'react';
import MyNavBarPrinc from './components/navBarPruebaMenu.js';
import './princ.css'
import{FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
    faInfoCircle,
} from '@fortawesome/free-solid-svg-icons';
import flechaArr from './components/flechaArr.svg'
import flechaAb from './components/flechaAb.svg'
import carita from './components/carita.svg'
import tenedor from './components/tenedor.svg'
import arte from './components/arte.svg'
import edu from './components/edu.svg'
import deportes from './components/deportes.svg'
import tec from './components/tec.svg'
import doc from './components/doc.svg'
import salud from './components/salud.svg'
import mas from './components/mas.svg'
import meGusta from './components/meGusta.svg'
import guardados from './components/guardados.svg'
import noGuardados from './components/guardar.svg'

var botonAli = document.getElementsByClassName("btnAli")
var botonArt = document.getElementsByClassName("btnArt")
var botonDep = document.getElementsByClassName("btnDep")
var botonDoc = document.getElementsByClassName("btnDoc")
var botonEdu = document.getElementsByClassName("btnEdu")
var botonRel = document.getElementsByClassName("btnRel")
var botonSal = document.getElementsByClassName("btnSal")
var botonTec = document.getElementsByClassName("btnTec")
var btnAli = <button id="btnAli" className="btn btnAli"><img src={require('./components/tenedor.svg')} width="18px"></img> &nbsp;&nbsp;Alimentación&nbsp;&nbsp;&nbsp;&nbsp;</button>
var btnArt = <button id="btnArt" className="btnArt btn"><img src={require('./components/arte.svg')} width="18px"></img> &nbsp;&nbsp;Arte&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</button>
var btnDep = <button id="btnDep" className="btnDep btn"><img src={require('./components/deportes.svg')} width="18px"></img> &nbsp;&nbsp;Deportes</button>
var btnDoc = <button id="btnDoc" className="btnDoc btn"><img src={require('./components/doc.svg')} width="18px"></img> &nbsp;&nbsp;Documentos legales</button>
var btnEdu = <button id="btnEdu" name="btnEdu" className="btnEdu  btn" ><img src={require('./components/edu.svg')} width="18px"></img> &nbsp;&nbsp;Educación</button>
var btnRel = <button id="btnRel" className="btnRel btn"><img src={require('./components/carita.svg')} width="18px"></img> &nbsp;&nbsp;Relaciones sociales</button>
var btnSal = <button id="btnSal" className="btnSal btn"><img src={require('./components/salud.svg')} width="18px"></img> &nbsp;&nbsp;Salud&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</button>
var btnTec = <button id="btnTec" className="btnTec btn"><img className="b" src={require('./components/tec.svg')} width="18px"></img> &nbsp;&nbsp;Tecnología</button>
var btnAliS =<button id="btnAliC" className="btns btn btnAli"><img src={require('./components/tenedor.svg')} width="18px"></img>Alimentación</button>
var btnArtS =<button id="btnArtC" className="btns btnArt btn"><img src={require('./components/arte.svg')} width="18px"></img> Arte</button>
var btnDepS =<button id="btnDepC" className="btns btnDep btn"><img src={require('./components/deportes.svg')} width="18px"></img>Deportes</button>
var btnDocS =<button id="btnDocC" className="btns btnDoc btn"><img src={require('./components/doc.svg')} width="18px"></img>Documentos legales</button>
var btnEduS =<button id="btnEduC" name="btnEdu" className="btns btnEdu  btn" ><img src={require('./components/edu.svg')} width="18px"></img>Educación</button>
var btnRelS =<button id="btnRelC" className="btns btnRel btn"><img src={require('./components/carita.svg')} width="18px"></img>Relaciones sociales</button>
var btnSalS= <button id="btnSalC" className="btns btnSal btn"><img src={require('./components/salud.svg')} width="18px"></img> Salud</button>
var btnTecS= <button id="btnTecC" className="btnTec btns btn"><img className="b" src={require('./components/tec.svg')} width="18px"></img> Tecnología</button>
let noSeleccionadosSalir =[btnAliS, btnArtS, btnDepS, btnDocS, btnEduS]
let seleccionadosSalir =[btnRelS, btnSalS, btnTecS]
let noSeleccionados =[btnAli, btnArt, btnDep, btnDoc, btnEdu]
let seleccionados =[btnRel, btnSal, btnTec]
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
        infoTitu[1].innerHTML =  'Localización&nbsp; <img src="' + flechaAb + '" width="20px" height="20px" />'
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
        infoTitu[1].innerHTML =  'Localización&nbsp; <img src="' + flechaArr + '" width="38px" height="38px" />'
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


function verMas(){
    document.getElementsByClassName("hid")[0].style.display = "initial"
    document.getElementsByClassName("contVer")[0].style.display = "none"
    if(noSeleccionados.includes(btnAli)){
        botonAli[0].innerHTML = '<img src="' + mas + '" width="18px" height="18px" />&nbsp;&nbsp; Alimentación &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'
    }else{
        botonAli[0].innerHTML = '<img src="' + tenedor + '" width="18px" height="18px" />&nbsp;&nbsp; Alimentación &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'
    }
    if(noSeleccionados.includes(btnArt)){
        botonArt[0].innerHTML = '<img src="' + mas + '" width="18px" height="18px" /> &nbsp;&nbsp; Arte &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'
    }else{
        botonArt[0].innerHTML = '<img src="' + arte + '" width="18px" height="18px" /> &nbsp;&nbsp; Arte &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'
    }
    if(noSeleccionados.includes(btnDep)){
        botonDep[0].innerHTML = '<img src="' + mas + '" width="18px" height="18px" /> &nbsp;&nbsp; Deportes &nbsp;&nbsp;&nbsp;&nbsp;'
    }else{
        botonDep[0].innerHTML = '<img src="' + deportes + '" width="18px" height="18px" /> &nbsp;&nbsp; Deportes &nbsp;&nbsp;&nbsp;&nbsp;'
    }
    if(noSeleccionados.includes(btnDoc)){
        botonDoc[0].innerHTML = '<img src="' + mas + '" width="18px" height="18px" /> &nbsp;&nbsp; Documentos legales &nbsp;&nbsp;&nbsp;&nbsp;'
    }else{
        botonDoc[0].innerHTML = '<img src="' + doc + '" width="18px" height="18px" /> &nbsp;&nbsp; Documentos legales &nbsp;&nbsp;&nbsp;&nbsp;'
    }
    if(noSeleccionados.includes(btnEdu)){
        botonEdu[0].innerHTML = '<img src="' + mas + '" width="18px" height="18px" /> &nbsp;&nbsp; Educación &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'
    }else{
        botonEdu[0].innerHTML = '<img src="' + edu + '" width="18px" height="18px" /> &nbsp;&nbsp; Educación &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'
    }
    if(noSeleccionados.includes(btnRel)){
        botonRel[0].innerHTML = '<img src="' + mas + '" width="18px" height="18px" /> &nbsp;&nbsp; Relaciones sociales &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'
    }else{
        botonRel[0].innerHTML = '<img src="' + carita + '" width="18px" height="18px" /> &nbsp;&nbsp; Relaciones sociales &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'
    }
    if(noSeleccionados.includes(btnSal)){
        botonSal[0].innerHTML = '<img src="' + mas + '" width="18px" height="18px" /> &nbsp;&nbsp; Salud &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'
    }else{
        botonSal[0].innerHTML = '<img src="' + salud + '" width="18px" height="18px" /> &nbsp;&nbsp; Salud &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'
    }
    if(noSeleccionados.includes(btnTec)){
        botonTec[0].innerHTML = '<img src="' + mas + '" width="18px" height="18px" /> &nbsp;&nbsp; Tecnología &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'
    }else{
        botonTec[0].innerHTML = '<img src="' + tec  + '" width="18px" height="18px" /> &nbsp;&nbsp; Tecnología &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'
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
                            <form method="get" action="/princa">
                                <button id="btnInfo aa" name="btnInfo" className="btn mt-2 " ><FontAwesomeIcon icon={faInfoCircle}/> &nbsp;&nbsp;Información general</button>
                                <hr className="mt-1 mb-1"></hr>
                                <div className="Sel">
                                    {seleccionados}
                                </div>
                                <div className="noSel">
                                    <div className="hid">
                                        {noSeleccionados[0]}
                                        {noSeleccionados[1]}
                                        {noSeleccionados[2]}
                                        {noSeleccionados[3]}
                                        {noSeleccionados[4]}
                                        {noSeleccionados[5]}
                                        {noSeleccionados[6]}
                                        {noSeleccionados[7]}
                                        {noSeleccionados[8]}
                                    </div>
                                    <div className="contVer  pb-3">
                                        <button className="ml-3 mt-3 botonVer" onClick={verMas}>Unirse a más categorías <img src={require('./components/mas.svg')}></img> </button>
                                    </div>
                                </div>
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
                            </form><br></br>
                            <form method="get" action="/IniciarSesion">
                                <button className="btn"><img src={require(("./components/cerrarSesion.svg"))} width="18px"></img>&nbsp;&nbsp;Cerrar sesión</button>
                            </form>
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
                            <h1 align="left" name="cate" className="cat pt-2 pb-2"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Perfil de Usuario</h1>
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
                                <br></br><br></br>
                                <div className=" fotoPerfil">
                                    <img className="avatar pt-4" src={require('./components/usuario.svg')} width="120"></img>
                                </div>
                                <div className="editar">
                                    <div className="Nombre">
                                        <h1>Usuario</h1>
                                        <p>@Usuario</p><br></br>
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
                                <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
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