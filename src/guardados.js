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
import Axios from 'axios';


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
var btnDocS = <button className="btns btn8 mt-3 mb-2" ><img align="left" style={{position:"fixed"}, {transform:"translateX()"}} src={require('./components/doc.svg')} width="20px"></img><p align="center">Documentos <br></br> legales</p></button>
var btnEduS = <button id="btnEduC" name="btnEdu" className="btns btnEdu  btn" ><img src={require('./components/edu.svg')} width="18px"></img>Educación</button>
var btnRelS = <button id="btnRelC" className="btns btnRel btn"><img src={require('./components/carita.svg')} width="18px"></img>Relaciones sociales</button>
var btnSalS= <button className="btns btn3 mt-3 mb-2" ><img align="left" style={{position:"fixed"}, {transform:"translateX()"}} src={require('./components/salud.svg')} width="20px"></img>Salud</button>
var btnTecS= <button id="btnTecC" className="btnTec btns btn"><img className="b" src={require('./components/tec.svg')} width="18px"></img> Tecnología</button>
let noSeleccionadosSalir =[btnAliS, btnArtS, btnDepS, btnDocS, btnEduS]
let seleccionadosSalir =[btnRelS, btnSalS, btnTecS]
let noSeleccionados =[]
let seleccionados =[btnRel, btnSal, btnTec, btnAli, btnArt, btnDep, btnDoc, btnEdu]
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
        document.getElementsByClassName("guardPub")[0].style.display =null
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
    document.getElementsByClassName("guardPub")[0].style.display = 'initial'
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
                                
                                <div className="container-fluid guardPub" align="center">
                                <br></br><br></br><br></br>
                                <div className="mt-4 container ">
                                        <div className="row justify-content-around">
                                            <div className="col col-6">
                                                <form className="form-inline">
                                                    <button className="cat pibeBtn mt-2 ml-3"><img src={require('./components/usuario.svg')}></img>&nbsp;</button>
                                                    <a className="mt-3 pibe" href="/perfil2">Tathi</a>
                                                </form>
                                            </div>
                                            <div className="col col-6">
                                                <div className="a form-inline">
                                                    <button className="botonE mt-4" >Editar&nbsp;&nbsp;<FontAwesomeIcon icon={faPencilAlt}/></button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="container-fluid cont" align="center">
                                            <p className="">Muchas gracias al psicólogo Mateo Benitez por su colaboración. </p>
                                            <div className="container">
                                                <img src={require("./components/nena.svg")}width="250" alt=""></img>
                                            </div><br></br>
                                            <div className="row justify-content-around">
                                                <div className="col col-6">
                                                    <p>1 Me gusta</p>
                                                </div>
                                                <div className="col col-6">
                                                    <p>0 comentarios</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row justify-content-left">
                                            <div className="col col-4">
                                                <button  type="submit" className="botonP like pl-2 pr-2 ml-4"><img src={require('./components/salud.svg')} width="22px"></img> Me&nbsp;gusta</button>
                                            </div>
                                            <div className="col col-4">
                                                <button type="submit" className="botonP like pl-2 pr-"><img src={require('./components/comentar.svg')} width="22px"></img>&nbsp;Comentarios</button>
                                            </div>
                                            <div className="col col-4">
                                                <button  type="submit" className="botonP like pl-2 pr-2 mr-4"><img src={require('./components/guardados.svg')} width="14px"></img>&nbsp;&nbsp;Guardar</button>
                                            </div>
                                        </div>
                                        <hr className="lineaP"></hr>
                                    </div>
                                    </div>
                                <div className="container selG">
                                    <h1 className="selGuar mt-3">Seleccione el grupo de publicaciones</h1><h1 className="selGuar" align="center">guardadas</h1><hr className="lineaGuar"></hr>
                                </div>
                                <form className="formCate" name="foro">
                                    <button className="btns btn0g ml-4 mt-5 mb-2" onClick={guardadoInfo}><img className="mb-1" src={require('./components/info.svg')} height="19px" width="19px"></img>&nbsp;&nbsp;&nbsp;Información general</button>
                                    <br></br><br></br>
                                    <div align="center" className="row justify-content-center">
                                        <div className="col col-6">
                                            <button className="btns btn2 mt-5 mb-2"  onClick={guardadoEdu}><img align="left" src={require('./components/edu.svg')} width="20px"></img> &nbsp;Educación</button>
                                        </div>
                                        <div className="col col-6">
                                            <button className="btns mt-5 btn5 mb-2" onClick={guardadoRel}><img align="left" src={require('./components/carita.svg')} width="20px"></img> Relaciones<br></br>sociales</button>
                                        </div>
                                    </div>
                                    <div align="center"  className="row justify-content-center">
                                        <div className="col col-6">
                                            <button className="btns btn4 mt-3 mb-2" onClick={guardadoAli}><div className="form-inline"><img align="left" src={require('./components/tenedor.svg')} height="19px" width="19px"></img> &nbsp;Alimentación</div></button>
                                        </div>
                                        <div className="col col-6">
                                            <button className="btns btn7 mt-3 mb-2" onClick={guardadoArt}><img align="left" src={require('./components/arte.svg')} width="20px"></img> &nbsp;Arte</button>
                                        </div>
                                    </div>
                                    <div align="center" className="row justify-content-center">
                                        <div className="col col-6">
                                        <   button id="btn1" className="btns btn1 mt-3 mb-2" onClick={guardadoDep}><img align="left" src={require('./components/deportes.svg')} width="20px"></img> &nbsp;Deportes</button>
                                        </div>
                                        <div className="col col-6">
                                        <button className="btns btn6 mt-3 mb-2" onClick={guardadoTec}><img align="left" src={require('./components/tec.svg')} width="20px"></img> &nbsp;Tecnología</button>
                                        </div>
                                    </div>
                                    <div align="center" className="row justify-content-center">
                                        <div className="col col-6">
                                        <button className="btns btn3 mt-3 mb-2" onClick={guardadoSal}><img align="left" style={{position:"fixed"}, {transform:"translateX()"}} src={require('./components/salud.svg')} width="20px"></img>Salud</button>
                                        </div>
                                        <div className="col col-6">
                                        <button className="btns btn8 mt-3 mb-2" onClick={guardadoDoc}><img align="left" style={{position:"fixed"}, {transform:"translateX()"}} src={require('./components/doc.svg')} width="20px"></img><p align="center">Documentos <br></br> legales</p></button>
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
                            <div className="circuloCont">
                                <img className="pt-2" src={require('./components/novedades.svg')}></img>
                            </div>
                            <h1 align="left" className="cat pt-2  pb-2"> &nbsp;&nbsp; &nbsp;&nbsp;Novedades</h1>
                        </div>
                        <div className="container-fluid misNo">
                            <p className="pt-3">Aún no hay novedades. </p>
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