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
import info from './components/info.svg'
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
var btnAliS = <button onClick={prevenir} id="btnAliC" className="btns btn btnAli"><img src={require('./components/tenedor.svg')} width="18px"></img>Alimentación</button>
var btnArtS = <button onClick={prevenir1} id="btnArtC" className="btns btnArt btn"><img src={require('./components/arte.svg')} width="18px"></img> Arte</button>
var btnDepS = <button onClick={prevenir2} id="btnDepC" className="btns btnDep btn"><img src={require('./components/deportes.svg')} width="18px"></img>Deportes</button>
var btnDocS = <button onClick={prevenir3} id="btnDocC" className="btns btnDoc btn"><img src={require('./components/doc.svg')} width="18px"></img>Documentos legales</button>
var btnEduS = <button onClick={prevenir4} id="btnEduC" name="btnEdu" className="btns btnEdu  btn" ><img src={require('./components/edu.svg')} width="18px"></img>Educación</button>
var btnRelS = <button onClick={prevenir5} id="btnRelC" className="btns btnRel btn"><img src={require('./components/carita.svg')} width="18px"></img>Relaciones sociales</button>
var btnSalS= <button onClick={prevenir6} id="btnSalC" className="btns btnSal btn"><img src={require('./components/salud.svg')} width="18px"></img> Salud</button>
var btnTecS= <button onClick={prevenir7} id="btnTecC" className="btnTec btns btn"><img className="b" src={require('./components/tec.svg')} width="18px"></img> Tecnología</button>
let noSeleccionadosSalir =[btnAliS, btnArtS, btnDepS, btnDocS, btnEduS]
let seleccionadosSalir =[btnRelS, btnSalS, btnTecS]
let noSeleccionados =[btnAli, btnArt, btnDep, btnDoc, btnEdu]
let seleccionados =[btnRel, btnSal, btnTec]

var drop = document.getElementsByClassName("dropDown")
var modoClik = false
var contraClick = false
var salirClick = false 
var cuentaClick = false
var btn1 = document.getElementsByClassName("btns")
var uno = [0, 0, 0, 0, 0, 0, 0, 0, 0]
var titulos = document.getElementsByClassName("botonDrop")


function prevenir(e){
    e.preventDefault()
    if(uno[0] == 0){
        btn1[0].style.border = "3px solid rgba(151, 151, 151, 1)"
        uno[0] = 1
        
    }else{
        btn1[0].style.borderColor = null
        uno[0] = 0
        uno[8] = 0
    }
    console.log(uno)
}
function prevenir1(e){
    e.preventDefault()
    if(uno[1] == 0){
        btn1[1].style.border = "3px solid rgba(151, 151, 151, 1)"
        uno[1] = 1
        }else{
        btn1[1].style.borderColor = null
        uno[1] = 0
        uno[8] = 0
        }
}
function prevenir2(e){
    e.preventDefault()
    if(uno[2] == 0){
        btn1[2].style.border = "3px solid rgba(151, 151, 151, 1)"
        uno[2] = 1
        }else{
        btn1[2].style.borderColor = null
        uno[2] = 0
        uno[8] = 0
        }
}
function prevenir3(e){
    e.preventDefault()
    if(uno[3] == 0){
        btn1[3].style.border = "3px solid rgba(151, 151, 151, 1)"
        uno[3] = 1
        }else{
        btn1[3].style.borderColor = null
        uno[3] = 0
        uno[8] = 0
        }
}
function prevenir4(e){
    e.preventDefault()
    if(uno[4] == 0){
        btn1[4].style.border = "3px solid rgba(151, 151, 151, 1)"
        uno[4] = 1
        }else{
        btn1[4].style.borderColor = null
        uno[4] = 0
        uno[8] = 0
        }
}
function prevenir5(e){
    e.preventDefault()
    if(uno[5] == 0){
        btn1[5].style.border = "3px solid rgba(151, 151, 151, 1)"
        uno[5] = 1
        }else{
        btn1[5].style.borderColor = null
        uno[5] = 0
        uno[8] = 0
        }
}
function prevenir6(e){
    e.preventDefault()
    if(uno[6] == 0){
        btn1[6].style.border = "3px solid rgba(151, 151, 151, 1)"
        uno[6] = 1
        }else{
        btn1[6].style.borderColor = null
        uno[6] = 0
        uno[8] = 0
        }
}
function prevenir7(e){
    e.preventDefault()
    if(uno[7] == 0){
        btn1[7].style.border = "3px solid rgba(151, 151, 151, 1)"
        uno[7] = 1
        }else{
        btn1[7].style.borderColor = null
        uno[7] = 0
        uno[8] = 0
        }
}
function prevenir8(e){
    e.preventDefault()
    if(uno[8] == 0){
        for(var i = 0; i<8; i++){
            btn1[i].style.border = "3px solid rgba(151, 151, 151, 1)"
            uno[i]=1
                }
    }
    
}

function modos(){
    if(!modoClik){
        drop[0].style.display = "initial"
        modoClik = true
        titulos[0].innerHTML = 'Modos<img src="' + flechaArr + '" width="40px" height="40px" />'

    }else{
        drop[0].style.display = null
        modoClik = false
        titulos[0].innerHTML = 'Modos&nbsp;<img src="' + flechaAb + '" width="20px" height="20px" />'
    }
}

function cambiarC(){
    if(!contraClick){
        drop[1].style.display = "initial"
        contraClick = true
        titulos[1].innerHTML = 'Cambiar contraseña<img src="' + flechaArr + '" width="40px" height="40px" />'
    }else{
        drop[1].style.display = null
        contraClick = false
        titulos[1].innerHTML = 'Cambiar contraseña&nbsp;<img src="' + flechaAb + '" width="20px" height="20px" />'
    }
}

function cambiarSC(){
    if(!salirClick){
        drop[2].style.display = "initial"
        salirClick = true
        titulos[2].innerHTML = 'Salir de categorías<img src="' + flechaArr + '" width="40px" height="40px" />'
    }else{
        drop[2].style.display = null
        salirClick = false
        titulos[2].innerHTML = 'Salir de categorías&nbsp;<img src="' + flechaAb + '" width="20px" height="20px" />'
    }
}

function cuenta(){
    if(!cuentaClick){
        drop[3].style.display = "initial"
        cuentaClick = true
        titulos[3].innerHTML = 'Cuenta<img src="' + flechaArr + '" width="40px" height="40px" />'
    }else{
        drop[3].style.display = null
        cuentaClick = false
        titulos[3].innerHTML = 'Cuenta&nbsp;<img src="' + flechaAb + '" width="20px" height="20px" />'
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
                                <button className="btn" id="btnConfig"><img className="" src={require('./components/configuracion.svg')} width="20px"></img>&nbsp;&nbsp;&nbsp;Configuración</button>
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
                                <img className="pt-2 pl-2" src={require('./components/configuracion.svg')}></img>
                            </div>
                            <h1 align="left" name="cate" className="cat pt-2 pb-2">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Configuración</h1>
                        </div>
                        
                        <div className="asas">
                            <p></p>
                        </div>
                        <div className="fondo2">
                            <p></p>
                        </div>
                        <div className="asa">
                            <p></p>
                        </div>
                        <div className="container-fluid misGuard2 pt-4">
                            <button className="mb-3 botonVolver"><img  src={require('./components/volver.svg')} height="19px" width="19px"></img>&nbsp;&nbsp;Volver</button>
                            <div className="container guardadosCats">
                                <div className="container-fluid tituloGuard">
                                    <p className="pTitulo"><img  src={require('./components/edu.svg')}></img>&nbsp;&nbsp;Educación</p>
                                </div>
                                <div className="container selG">
                                    <br></br>
                                    <button onClick={modos} className="botonDrop modos">Modos&nbsp;<img src={require('./components/flechaAb.svg')}></img></button>
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
                                    <button onClick={cambiarC} className="botonDrop">Cambiar contraseña &nbsp;<img src={require('./components/flechaAb.svg')}></img></button>
                                    <hr></hr>
                                    <div className="dropDown">
                                        <div className="cambiarC">
                                            <input type="text" className="inputsCambiar" placeholder="Contraseña actual"></input><br></br><br></br>
                                            <input type="text" className="inputsCambiar" placeholder="Contraseña nueva"></input><br></br><br></br>
                                            <input type="text" className="inputsCambiar" placeholder="Confirmar contraseña nueva"></input><br></br><br></br>
                                            <button className="guardarConfig pt-1 pb-1 pl-5 pr-5">Guardar cambios</button>
                                        </div>
                                    </div>
                                    <button onClick={cambiarSC} className="botonDrop">Salir de cateogrías &nbsp;<img src={require('./components/flechaAb.svg')}></img></button>
                                    <hr></hr>
                                    <div className="dropDown">
                                        <div className="salir">
                                            <p>Seleccione las categorías que quiera abandonar</p>
                                            {noSeleccionadosSalir[0]}&nbsp;&nbsp;&nbsp;
                                            {noSeleccionadosSalir[1]}<br></br><br></br>
                                            {noSeleccionadosSalir[2]}&nbsp;&nbsp;&nbsp;
                                            {noSeleccionadosSalir[3]}<br></br><br></br>
                                            {noSeleccionadosSalir[4]}&nbsp;&nbsp;&nbsp;
                                            {noSeleccionadosSalir[5]}<br></br><br></br>
                                            {noSeleccionadosSalir[6]}&nbsp;&nbsp;&nbsp;
                                            {noSeleccionadosSalir[7]}
                                            <div>
                                                <button className="guardarConfig pt-2 pb-2 pl-4 pr-4">Cancelar</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                <button className="guardarConfig pt-2 pb-2 pl-4 pr-4">Confirmar</button>
                                            </div>
                                        </div>
                                    </div>
                                    <button onClick={cuenta} className="botonDrop">Cuenta &nbsp;<img src={require('./components/flechaAb.svg')}></img></button>
                                    <hr></hr>
                                    <div className="dropDown">
                                        <div className="cuenta">
                                            <p>Para eliminar su cuenta deberá ingresar su contraseña actual</p>
                                            <input type="password" className="inputsCambiar" placeholder="Contraseña actual"></input><br></br><br></br>
                                            <input type="password" className="inputsCambiar" placeholder="Confirmar contraseña"></input><br></br><br></br>
                                            <button className="eliminarCuenta pt-2 pb-2 pl-5 pr-5">Eliminar cuenta</button>
                                        </div>
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