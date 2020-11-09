import React, {Component} from 'react';
import MyNavBarPrinc from './components/navBarPruebaMenu.js';
import './princ.css'
import PaginaPrinc from './páginaPrincipal copy'
import carita from './components/carita.svg'
import tenedor from './components/tenedor.svg'
import arte from './components/arte.svg'
import edu from './components/edu.svg'
import deportes from './components/deportes.svg'
import tec from './components/tec.svg'
import doc from './components/doc.svg'
import salud from './components/salud.svg'
import info from './components/info.svg'
import mas from './components/mas.svg'

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
var btnAliS = <button id="btnAliC" className="btns btn btnAli"><img src={require('./components/tenedor.svg')} width="18px"></img>Alimentación</button>
var btnArtS = <button id="btnArtC" className="btns btnArt btn"><img src={require('./components/arte.svg')} width="18px"></img> Arte</button>
var btnDepS = <button id="btnDepC" className="btns btnDep btn"><img src={require('./components/deportes.svg')} width="18px"></img>Deportes</button>
var btnDocS = <button id="btnDocC" className="btns btnDoc btn"><img src={require('./components/doc.svg')} width="18px"></img>Documentos legales</button>
var btnEduS = <button id="btnEduC" name="btnEdu" className="btns btnEdu  btn" ><img src={require('./components/edu.svg')} width="18px"></img>Educación</button>
var btnRelS = <button id="btnRelC" className="btns btnRel btn"><img src={require('./components/carita.svg')} width="18px"></img>Relaciones sociales</button>
var btnSalS= <button id="btnSalC" className="btns btnSal btn"><img src={require('./components/salud.svg')} width="18px"></img> Salud</button>
var btnTecS= <button id="btnTecC" className="btnTec btns btn"><img className="b" src={require('./components/tec.svg')} width="18px"></img> Tecnología</button>
let noSeleccionadosSalir =[btnAliS, btnArtS, btnDepS, btnDocS, btnEduS]
let seleccionadosSalir =[btnRelS, btnSalS, btnTecS]
let noSeleccionados =[btnAli, btnArt, btnDep, btnDoc, btnEdu]
let seleccionados =[btnRel, btnSal, btnTec]
var titulo = document.getElementsByClassName("selG")
var botones = document.getElementsByClassName("formCate")
var nuevoTitulo = document.getElementsByClassName("tituloGuard")
var linea = document.getElementsByClassName("guardadosCats")
var texto = document.getElementsByClassName("pTitulo")
var tocado = false
function volver(e){
    e.preventDefault()
    if(tocado == true){
        titulo[0].style.visibility = null
        botones[0].style.visibility =null
        nuevoTitulo[0].style.visibility = "hidden"
        nuevoTitulo[0].style.backgroundColor = null
        linea[0].style.borderColor = null
        tocado =false
    }else{
        window.location.href="/princa";
    }
}
function guardadoEdu(e){
    titulo[0].style.visibility = "hidden"
    botones[0].style.visibility = "hidden"
    nuevoTitulo[0].style.visibility = "initial"
    e.preventDefault();
    texto[0].innerHTML = '<img src="' + edu + '" width="30px" height="30px" />&nbsp;&nbsp;Educación'
    linea[0].style.borderColor = " rgba(30, 198, 67, 0.56)"
    tocado = true
}
function guardadoRel(e){
    titulo[0].style.visibility = "hidden"
    botones[0].style.visibility = "hidden"
    nuevoTitulo[0].style.visibility = "initial"
    linea[0].style.borderColor = " rgba(255, 95, 162, 0.6)"
    nuevoTitulo[0].style.backgroundColor = " rgba(255, 95, 162, 0.6)"
    texto[0].innerHTML = '<img src="' + carita + '" width="30px" height="30px" /> Relaciones sociales'
    e.preventDefault();
    tocado = true
}
function guardadoAli(e){
    titulo[0].style.visibility = "hidden"
    botones[0].style.visibility = "hidden"
    nuevoTitulo[0].style.visibility = "initial"
    linea[0].style.borderColor = "rgba(235, 193, 44, 0.61)"
    nuevoTitulo[0].style.backgroundColor = " rgba(235, 193, 44, 0.61)"
    texto[0].innerHTML = '<img src="' + tenedor + '" width="30px" height="30px" /> Alimentación'
    e.preventDefault();
    tocado = true
}
function guardadoArt(e){
    titulo[0].style.visibility = "hidden"
    botones[0].style.visibility = "hidden"
    nuevoTitulo[0].style.visibility = "initial"
    linea[0].style.borderColor = "rgba(167, 25, 203, 0.39)"
    nuevoTitulo[0].style.backgroundColor = "rgba(167, 25, 203, 0.39)"
    texto[0].innerHTML = '<img src="' + arte + '" width="30px" height="30px" /> Arte'
    e.preventDefault();
    tocado = true
}
function guardadoDep(e){
    titulo[0].style.visibility = "hidden"
    botones[0].style.visibility = "hidden"
    nuevoTitulo[0].style.visibility = "initial"
    linea[0].style.borderColor = "rgba(242, 126, 17, 0.54)"
    nuevoTitulo[0].style.backgroundColor = "rgba(242, 126, 17, 0.54)"
    texto[0].innerHTML = '<img src="' + deportes + '" width="30px" height="30px" /> Deportes'
    e.preventDefault();
    tocado = true
}
function guardadoTec(e){
    titulo[0].style.visibility = "hidden"
    botones[0].style.visibility = "hidden"
    nuevoTitulo[0].style.visibility = "initial"
    linea[0].style.borderColor = "rgba(66, 133, 244, 0.54)"
    nuevoTitulo[0].style.backgroundColor = "rgba(66, 133, 244, 0.54)"
    texto[0].innerHTML = '<img src="' + tec + '" width="30px" height="30px" /> Tecnología'
    e.preventDefault();
    tocado = true
}
function guardadoSal(e){
    titulo[0].style.visibility = "hidden"
    botones[0].style.visibility = "hidden"
    nuevoTitulo[0].style.visibility = "initial"
    linea[0].style.borderColor = "rgba(224, 14, 14, 0.57)"
    nuevoTitulo[0].style.backgroundColor = "rgba(224, 14, 14, 0.57)"
    texto[0].innerHTML = '<img src="' + salud + '" width="30px" height="30px" /> Salud'
    e.preventDefault();
    tocado = true
}
function guardadoDoc(e){
    titulo[0].style.visibility = "hidden"
    botones[0].style.visibility = "hidden"
    nuevoTitulo[0].style.visibility = "initial"
    linea[0].style.borderColor = "rgba(109, 53, 0, 0.58)"
    nuevoTitulo[0].style.backgroundColor = "rgba(109, 53, 0, 0.58)"
    texto[0].innerHTML = '<img src="' + doc + '" width="30px" height="30px" /> Documentos Legales'
    e.preventDefault();
    tocado = true
}
function guardadoInfo(e){
    titulo[0].style.visibility = "hidden"
    botones[0].style.visibility = "hidden"
    nuevoTitulo[0].style.visibility = "initial"
    linea[0].style.borderColor = "rgba(216, 216, 216, 0.67)"
    nuevoTitulo[0].style.backgroundColor = "rgba(216, 216, 216, 0.67)"
    texto[0].innerHTML = '<img src="' + info + '" width="30px" height="30px" /> Información general'
    e.preventDefault();
    tocado = true
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

class Guardados extends Component{
    render(){
        return(
            <div className="guardados">
                <MyNavBarPrinc/>
                <div className="row">
                    <div className="col col-2">
                    </div>
                    <div className="col col-2">
                        <div className="container-fluid misS">
                            <div className="circuloCont">
                                <img className="pt-2 pl-2" src={require('./components/cats.svg')}></img>
                            </div>
                            <h1 className="cat cat1 pt-2 pb-2" align="center">Categorías</h1>
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
                            <div className="circuloCont">
                                <img className="pt-2 pl-2" src={require('./components/social.svg')}></img>
                            </div>
                            <h1 className="cat pt-2 pb-2" align="center"> Social</h1>
                        </div>
                        <div className="container-fluid pt-3 misGa1">
                            <form method="get" action="/perfil">
                                <button className="btn"><img className="" src={require('./components/usuario.svg')} width="20px"></img>&nbsp;&nbsp;&nbsp;Mi perfil</button><br></br>
                            </form>
                            <form method="get" action="/config">
                                <button className="btn"><img className="" src={require('./components/configuracion.svg')} width="20px"></img>&nbsp;&nbsp;&nbsp;Configuración</button>
                            </form>
                            <form method="get" action="/guardados">
                                <button className="btn" id="btnGuard"><img className="" src={require('./components/guardados.svg')} width="20px"></img>&nbsp;&nbsp;&nbsp;Guardados</button>
                            </form><br></br><br></br>
                            <button className="btn"><img src={require(("./components/cerrarSesion.svg"))} width="18px"></img>&nbsp;&nbsp;&nbsp;Cerrar sesión</button>
                            <br></br>
                        </div>
                    </div>
                    <div className="col col-4">
                        <div className="container asasa">
                            <p></p>
                        </div>
                        <div className="container-fluid misIG ml-2">
                            <div className="circuloCont">
                                <img className="guardadosTitulo pt-2" src={require('./components/guardados.svg')}></img>
                            </div>
                            <h1 align="left" name="cate" className="cat pt-2 pb-2" align="center">Guardados</h1>
                        </div>
                        <div className="container-fluid misGuard pt-4">
                            <button className="mb-3 botonVolver" onClick={volver}><img  src={require('./components/volver.svg')} height="19px" width="19px"></img>&nbsp;&nbsp;Volver</button>
                            <div className="container guardadosCats">
                                <div className="container-fluid tituloGuard">
                                    <p className="pTitulo"><img  src={require('./components/edu.svg')}></img>&nbsp;&nbsp;Educación</p>
                                </div>
                                <div className="container selG">
                                    <h1 className="selGuar mt-3">Seleccione el grupo de publicaciones</h1><h1 className="selGuar" align="center">guardadas</h1><hr className="lineaGuar"></hr>
                                </div>
                                <form className="formCate" name="foro">
                                    <button className="btns btn0g ml-4 mt-5 mb-2" onClick={guardadoInfo}><img className="mb-1" src={require('./components/info.svg')} height="19px" width="19px"></img>&nbsp;&nbsp;&nbsp;Información general</button>
                                    <br></br><br></br>
                                    <div align="center" className="row justify-content-center">
                                        <div className="col col-6">
                                            <button className="btns btn2g mt-5 mb-2" onClick={guardadoEdu}><img  src={require('./components/edu.svg')} height="19px" width="19px"></img> &nbsp;Educación</button>
                                        </div>
                                        <div className="col col-6">
                                            <button className="btns mt-5 btn5g mb-2" onClick={guardadoRel}><img  src={require('./components/carita.svg')} height="19px" width="19px"></img> Relaciones<br></br>sociales</button>
                                        </div>
                                    </div>
                                    <div align="center"  className="row justify-content-center">
                                        <div className="col col-6">
                                            <button className="btns btn4g mt-4 mb-2" onClick={guardadoAli}><div className="form-inline"><img  src={require('./components/tenedor.svg')} height="19px" width="19px"></img> &nbsp;Alimentación</div></button>
                                        </div>
                                        <div className="col col-6">
                                            <button className="btns btn7g mt-4 mb-2"onClick={guardadoArt} ><img  src={require('./components/arte.svg')} height="19px" width="19px"></img> &nbsp;Arte</button>
                                        </div>
                                    </div>
                                    <div align="center" className="row justify-content-center">
                                        <div className="col col-6">
                                            <button id="btn1" className="btns btn1g mt-4 mb-2" onClick={guardadoDep}><img  src={require('./components/deportes.svg')} height="19px" width="19px"></img> &nbsp;Deportes</button>
                                        </div>
                                        <div className="col col-6">
                                            <button className="btns btn6g mt-4 mb-2" onClick={guardadoTec}><img  src={require('./components/tec.svg')} height="19px" width="19px"></img> &nbsp;Tecnología</button>
                                        </div>
                                    </div>
                                    <div align="center" className="row justify-content-center">
                                        <div className="col col-6">
                                            <button className="btns btn3g mt-4 mb-2" onClick={guardadoSal}><FontAwesomeIcon icon={faHeart} />&nbsp;Salud</button>
                                        </div>
                                        <div className="col col-6">
                                            <button className="btns btn8g mt-4 mb-2" onClick={guardadoDoc}><img  src={require('./components/doc.svg')} height="19px" width="19px"></img> Documentos <br></br> legales  </button>
                                        </div>
                                    </div>
                                </form>
                                <br></br><br></br>  
                            </div>
                            <br></br>
                        </div>
                    </div>
                    <div align="center" className="col col-2">
                        <div className="container-fluid misN ml-5">
                            <h1 align="left" className="cat pt-2  pb-2"> &nbsp;&nbsp; &nbsp;&nbsp;Novedades</h1>
                        </div>
                    </div>
                    <div className="col col-2">
                    </div>
                </div>
                <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
            </div>
        )
    }
}

export default Guardados