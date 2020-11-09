import React, {Component} from 'react';
import MyNavBarPrinca from './components/navBarPruebaMenu.js';
import './princ.css'
import reg1 from './registrarse1';
import{FontAwesomeIcon} from '@fortawesome/react-fontawesome';
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
import Modal from './components/publicar'
import { createPortal } from 'react-dom';

var fondo = document.getElementsByClassName("princ") 
var primerCuadrado = document.getElementsByClassName("asas")
var segundoCuadrado = document.getElementsByClassName("asasa")
var botones = document.getElementsByClassName("btn")
var botonAli = document.getElementsByClassName("btnAli")
var botonArt = document.getElementsByClassName("btnArt")
var botonDep = document.getElementsByClassName("btnDep")
var botonDoc = document.getElementsByClassName("btnDoc")
var botonEdu = document.getElementsByClassName("btnEdu")
var botonRel = document.getElementsByClassName("btnRel")
var botonSal = document.getElementsByClassName("btnSal")
var botonTec = document.getElementsByClassName("btnTec")
var btnAli = <button id="btnAli" onClick={cambioAli}  className="btn btnAli"><img src={require('./components/tenedor.svg')} width="18px"></img> &nbsp;&nbsp;Alimentación&nbsp;&nbsp;&nbsp;&nbsp;</button>
var btnArt = <button id="btnArt" onClick={cambioArt} className="btnArt btn"><img src={require('./components/arte.svg')} width="18px"></img> &nbsp;&nbsp;Arte&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</button>
var btnDep = <button id="btnDep" onClick={cambioDep} className="btnDep btn"><img src={require('./components/deportes.svg')} width="18px"></img> &nbsp;&nbsp;Deportes</button>
var btnDoc = <button id="btnDoc" onClick={cambioDocs} className="btnDoc btn"><img src={require('./components/doc.svg')} width="18px"></img> &nbsp;&nbsp;Documentos legales</button>
var btnEdu = <button id="btnEdu" onClick={cambioEdu} name="btnEdu" className="btnEdu  btn" ><img src={require('./components/edu.svg')} width="18px"></img> &nbsp;&nbsp;Educación</button>
var btnRel = <button id="btnRel" onClick={cambioRel} className="btnRel btn"><img src={require('./components/carita.svg')} width="18px"></img> &nbsp;&nbsp;Relaciones sociales</button>
var btnSal = <button id="btnSal" onClick={cambioSal} className="btnSal btn"><img src={require('./components/salud.svg')} width="18px"></img> &nbsp;&nbsp;Salud&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</button>
var btnTec = <button id="btnTec" onClick={cambioTec} className="btnTec btn"><img className="b" src={require('./components/tec.svg')} width="18px"></img> &nbsp;&nbsp;Tecnología</button>
var likeClick = true 
var likes = document.getElementsByClassName("like")
var guardClick = true


var lineas = document.getElementsByClassName("publicaciones")
function cambioInfo(e){
    fondo[0].style.backgroundColor ="#E3E3E3"
    primerCuadrado[0].style.backgroundColor ="#E3E3E3"
    segundoCuadrado[0].style.backgroundColor ="#E3E3E3"
    botones[0].style.backgroundColor ="#f6f6f6"
    for(var i= 0; i<9;i++){
        botones[i].style.color ="rgba(57, 57, 57, 1)"
    }
    e.preventDefault()
    lineas[0].style.borderColor = "#E3E3E3"
    lineas[1].style.borderColor = "#E3E3E3"
}
function cambioAli(e){
    fondo[0].style.backgroundColor ="#F9EAB7"
    primerCuadrado[0].style.backgroundColor ="#F9EAB7"
    segundoCuadrado[0].style.backgroundColor ="#F9EAB7"
    botones[0].style.backgroundColor ="#f6f6f6"
    for(var i= 0; i<9;i++){
        botones[i].style.color ="rgba(57, 57, 57, 1)"
    }
    botonAli[0].style.color ="#EBC12C"
    e.preventDefault()
    lineas[0].style.borderColor = "#EED375"
    lineas[1].style.borderColor = "#EED375"
}
function cambioArt(e){
    fondo[0].style.backgroundColor ="rgba(224, 199, 235, 1)"
    primerCuadrado[0].style.backgroundColor ="rgba(224, 199, 235, 1)"
    botones[0].style.backgroundColor ="#f6f6f6"
    for(var i= 0; i<9;i++){
        botones[i].style.color ="rgba(57, 57, 57, 1)"
    }
    botonArt[0].style.color ="rgba(109, 0, 136, 1)"
    e.preventDefault()
    lineas[0].style.borderColor = "rgba(205, 157, 227, 1)"
    lineas[1].style.borderColor = "rgba(205, 157, 227, 1)"
}
function cambioDep(e){
    fondo[0].style.backgroundColor ="rgba(255, 211, 170, 1)"
    primerCuadrado[0].style.backgroundColor ="rgba(255, 211, 170, 1)"
    segundoCuadrado[0].style.backgroundColor ="rgba(255, 211, 170, 1)"
    botones[0].style.backgroundColor ="#f6f6f6"
    for(var i= 0; i<9;i++){
        botones[i].style.color ="rgba(57, 57, 57, 1)"
    }
    botonDep[0].style.color ="rgba(152, 69, 23, 1)"
    e.preventDefault()
    lineas[0].style.borderColor = "rgba(255, 166, 84, 1)"
    lineas[1].style.borderColor = "rgba(255, 166, 84, 1)"
}
function cambioDocs(e){
    fondo[0].style.backgroundColor ="rgba(225, 191, 159, 1)"
    primerCuadrado[0].style.backgroundColor ="rgba(225, 191, 159, 1)"
    segundoCuadrado[0].style.backgroundColor ="rgba(225, 191, 159, 1)"
    botones[0].style.backgroundColor ="#f6f6f6"
    for(var i= 0; i<9;i++){
        botones[i].style.color ="rgba(57, 57, 57, 1)"
    }
    botonDoc[0].style.color ="rgba(109, 53, 0, 1)"
    e.preventDefault()
    lineas[0].style.borderColor = "rgba(182, 136, 93, 1)"
    lineas[1].style.borderColor = "rgba(182, 136, 93, 1)"
}
function cambioEdu(e){
    fondo[0].style.backgroundColor ="rgba(184, 228, 194, 1)"
    primerCuadrado[0].style.backgroundColor ="rgba(184, 228, 194, 1)"
    segundoCuadrado[0].style.backgroundColor ="rgba(184, 228, 194, 1)"
    for(var i= 0; i<9;i++){
        botones[i].style.color ="rgba(57, 57, 57, 1)"
    }
    botonEdu[0].style.color ="rgba(3, 99, 13, 1)"
    e.preventDefault()
    lineas[0].style.borderColor = "rgba(144, 226, 161, 1)"
    lineas[1].style.borderColor = "rgba(144, 226, 161, 1)"
}
function cambioRel(e){
    fondo[0].style.backgroundColor ="rgba(255, 107, 160, 0.25)"
    primerCuadrado[0].style.backgroundColor ="#FDD8E5"
    for(var i= 0; i<9;i++){
        botones[i].style.color ="rgba(57, 57, 57, 1)"
    }
    botonRel[0].style.color ="rgba(189, 38, 101, 1)"
    e.preventDefault()
    lineas[0].style.borderColor = "rgba(255, 180, 207, 1)"
    lineas[1].style.borderColor = "rgba(255, 180, 207, 1)"
}
function cambioSal(e){
    fondo[0].style.backgroundColor ="#F5BFBF"
    primerCuadrado[0].style.backgroundColor ="#F5BFBF"
    for(var i= 0; i<9;i++){
        botones[i].style.color ="rgba(57, 57, 57, 1)"
    }
    botonSal[0].style.color ="rgba(148, 0, 0, 1)"
    e.preventDefault()
    lineas[0].style.borderColor = "#F5BFBF"
    lineas[1].style.borderColor = "#F5BFBF"
}
function cambioTec(e){
    fondo[0].style.backgroundColor ="#B5D3EF"
    primerCuadrado[0].style.backgroundColor ="#B5D3EF"
    for(var i= 0; i<9;i++){
        botones[i].style.color ="rgba(57, 57, 57, 1)"
    }
    botonTec[0].style.color ="#045F92"
    e.preventDefault()
    lineas[0].style.borderColor = "#86B8E5"
    lineas[1].style.borderColor = "#86B8E5"
}

function like(){
    if(likeClick){
        likes[0].innerHTML = '<img src="' + salud + '" width="18px" height="18px" />&nbsp; Me gusta'
        likeClick = false
    }
    else{
        likes[0].innerHTML = '<img src="' + meGusta + '" width="18px" height="18px" />&nbsp;&nbsp;Me gusta'
        likeClick = true
    }
} 

function guard(){
    if(guardClick){
        likes[2].innerHTML = '<img src="' + guardados + '" width="18px" height="18px" /> Guardar'
        guardClick = false
    }
    else{
        guardClick = true
        likes[2].innerHTML = '<img src="' + noGuardados + '" width="18px" height="18px" /> Guardar'
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

let noSeleccionados =[btnAli, btnArt, btnDep, btnDoc, btnEdu]
let seleccionados =[btnRel, btnSal, btnTec]
                   

var eleccionados = seleccionados.includes(function(i) { return i !==  ""});

class pagPrinca extends Component{
    
    constructor(props) {
        super(props);
        this.boton = React.createRef();
        this.state = {
          modal: false
        };
      }
      modalOpen() {
        this.setState({ modal: true });
      }
    
      modalClose() {
        this.setState({
          modalInputName: "",
          modal: false
        });
      }


    render(){
        var fondo={backgroundColor: "#E3E3E3"}
        
        return (
            <div style={fondo} className="princ">
                <MyNavBarPrinca/>
                <div align="center">
                    <Modal show={this.state.modal} handleClose={e => this.modalClose(e)}/>
                </div>
                <div className="row">
                    <div className="col col-2">
                    </div>
                    <div className="col col-2">
                        <div className="container-fluid misS">
                            <div className="circuloCont">
                                <img className="pt-2 pl-2" src={require('./components/cats.svg')}></img>
                            </div>
                            <h1 className="cat pt-2 pb-2" align="center">Categorías</h1>
                        </div>
                        <div className="container-fluid misGa">
                            <button id="btnInfo aa" onClick={cambioInfo} name="btnInfo" className="btn mt-2 " ><FontAwesomeIcon icon={faInfoCircle}/> &nbsp;&nbsp;Información general</button>
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
                        </div>
                        <div className="container-fluid misS1">
                            <div className="circuloCont">
                                <img className="pt-2 pl-2" src={require('./components/social.svg')}></img>
                            </div>
                            <h1 className="cat pt-2 pb-2" align="center"> Social</h1>
                        </div>
                        <div className="container-fluid pt-3 misGa1">
                            <form method="get" action="/perfil">
                                <button className="btn"><FontAwesomeIcon icon={faUser}/>&nbsp;&nbsp;Mi perfil</button><br></br>
                            </form>
                            <form method="get" action="/config">
                                <button className="btn"><FontAwesomeIcon icon={faCog}/>&nbsp;&nbsp;Configuración</button>
                            </form>
                            <form method="get" action="/guardados">
                                <button className="btn"><FontAwesomeIcon icon={faBookmark}/>&nbsp;&nbsp;Guardados</button>
                            </form><br></br><br></br>
                            <button className="btn"><img src={require(("./components/cerrarSesion.svg"))} width="18px"></img>&nbsp;&nbsp;Cerrar sesión</button>
                            <br></br>
                        </div>
                    </div>
                    <div align="center" className="col col-4">
                        <div className="container asasa">
                            <p></p>
                        </div>
                        <div className="container-fluid misI ml-2">
                            <h1 align="left" name="cate" className="cat pt-2 pb-2">&nbsp;<FontAwesomeIcon icon={faInfoCircle}/> &nbsp;&nbsp;Información general</h1>
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
                        <div className="container-fluid misG pt-3">
                            <div className="container publicaciones">
                                <h1 className="cat mt-2 ml-2"><img src={require('./components/usuario.svg')}></img>&nbsp;&nbsp;&nbsp;¿Qué está pensando Hernán?</h1>
                                <br></br><br></br>  
                                <div align="right" className="pb-2">
                                    <button type="button" onClick={e =>this.modalOpen(e)} className="botonP">Hacer publicación</button>
                                </div>
                            </div>
                            <div className="mt-4 container publicaciones">
                                <div className="row justify-content-around">
                                    <div className="col col-6">
                                        <form className="form-inline">
                                            <button className="cat pibeBtn mt-2 ml-3"><img src={require('./components/usuario.svg')}></img>&nbsp;</button>
                                            <a className="mt-3 pibe" href="/perfil2">Usuario</a>
                                        </form>
                                    </div>
                                    <div className="col col-6">
                                        <div className="a form-inline">
                                            <p className="mt-4">Hace 2 horas&nbsp;</p>
                                            <button className="botonE mt-2" >Editar&nbsp;&nbsp;<FontAwesomeIcon icon={faPencilAlt}/></button>
                                        </div>
                                    </div>
                                </div>
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
                                <div className="row justify-content-left">
                                    <div className="col col-4">
                                        <button type="submit" onClick={like} className="botonP like pl-3 pr-3 ml-4"><img src={require('./components/meGusta.svg')} width="22px"></img> Me&nbsp;gusta</button>
                                    </div>
                                    <div className="col col-4">
                                        <button type="submit" className="botonP like pl-2 pr-"><img src={require('./components/comentar.svg')} width="22px"></img>&nbsp;Comentarios</button>
                                    </div>
                                    <div className="col col-4">
                                        <button onClick={guard} type="submit" className="botonP like pl-3 pr-3 mr-4"><img src={require('./components/guardar.svg')} width="14px"></img>&nbsp;&nbsp;Guardar</button>
                                    </div>
                                </div>
                                <hr className="lineaP"></hr>
                            </div>
                            <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
                            <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
                            <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
                            <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
                            <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
                            <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
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
            </div>
        )
    }
}

export default pagPrinca;