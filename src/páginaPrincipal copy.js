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
import Modal from './components/publicar'

var fondo = document.getElementsByClassName("princ") 
var primerCuadrado = document.getElementsByClassName("asas")
var segundoCuadrado = document.getElementsByClassName("asasa")
var botones = document.getElementsByClassName("btn")
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
}
function cambioAli(e){
    fondo[0].style.backgroundColor ="#F9EAB7"
    primerCuadrado[0].style.backgroundColor ="#F9EAB7"
    segundoCuadrado[0].style.backgroundColor ="#F9EAB7"
    botones[0].style.backgroundColor ="#f6f6f6"
    for(var i= 0; i<9;i++){
        botones[i].style.color ="rgba(57, 57, 57, 1)"
    }
    botones[1].style.color ="#EBC12C"
    e.preventDefault()
    lineas[0].style.borderColor = "#EED375"
}
function cambioArt(e){
    fondo[0].style.backgroundColor ="rgba(224, 199, 235, 1)"
    primerCuadrado[0].style.backgroundColor ="rgba(224, 199, 235, 1)"
    botones[0].style.backgroundColor ="#f6f6f6"
    for(var i= 0; i<9;i++){
        botones[i].style.color ="rgba(57, 57, 57, 1)"
    }
    botones[2].style.color ="rgba(109, 0, 136, 1)"
    e.preventDefault()
    lineas[0].style.borderColor = "rgba(205, 157, 227, 1)"
}
function cambioDep(e){
    fondo[0].style.backgroundColor ="rgba(255, 211, 170, 1)"
    primerCuadrado[0].style.backgroundColor ="rgba(255, 211, 170, 1)"
    segundoCuadrado[0].style.backgroundColor ="rgba(255, 211, 170, 1)"
    botones[0].style.backgroundColor ="#f6f6f6"
    for(var i= 0; i<9;i++){
        botones[i].style.color ="rgba(57, 57, 57, 1)"
    }
    botones[3].style.color ="rgba(152, 69, 23, 1)"
    e.preventDefault()
    lineas[0].style.borderColor = "rgba(255, 166, 84, 1)"
}
function cambioDocs(e){
    fondo[0].style.backgroundColor ="rgba(225, 191, 159, 1)"
    primerCuadrado[0].style.backgroundColor ="rgba(225, 191, 159, 1)"
    segundoCuadrado[0].style.backgroundColor ="rgba(225, 191, 159, 1)"
    botones[0].style.backgroundColor ="#f6f6f6"
    for(var i= 0; i<9;i++){
        botones[i].style.color ="rgba(57, 57, 57, 1)"
    }
    botones[4].style.color ="rgba(109, 53, 0, 1)"
    e.preventDefault()
    lineas[0].style.borderColor = "rgba(182, 136, 93, 1)"
}
function cambioEdu(e){
    fondo[0].style.backgroundColor ="rgba(184, 228, 194, 1)"
    primerCuadrado[0].style.backgroundColor ="rgba(184, 228, 194, 1)"
    segundoCuadrado[0].style.backgroundColor ="rgba(184, 228, 194, 1)"
    for(var i= 0; i<9;i++){
        botones[i].style.color ="rgba(57, 57, 57, 1)"
    }
    botones[5].style.color ="rgba(3, 99, 13, 1)"
    e.preventDefault()
    lineas[0].style.borderColor = "rgba(144, 226, 161, 1)"
}
function cambioRel(e){
    fondo[0].style.backgroundColor ="rgba(255, 107, 160, 0.25)"
    primerCuadrado[0].style.backgroundColor ="#FDD8E5"
    for(var i= 0; i<9;i++){
        botones[i].style.color ="rgba(57, 57, 57, 1)"
    }
    botones[6].style.color ="rgba(189, 38, 101, 1)"
    e.preventDefault()
    lineas[0].style.borderColor = "rgba(255, 180, 207, 1)"
}
function cambioSal(e){
    fondo[0].style.backgroundColor ="#F5BFBF"
    primerCuadrado[0].style.backgroundColor ="#F5BFBF"
    for(var i= 0; i<9;i++){
        botones[i].style.color ="rgba(57, 57, 57, 1)"
    }
    botones[7].style.color ="rgba(148, 0, 0, 1)"
    e.preventDefault()
    lineas[0].style.borderColor = "#F5BFBF"
}
function cambioTec(e){
    fondo[0].style.backgroundColor ="#B5D3EF"
    primerCuadrado[0].style.backgroundColor ="#B5D3EF"
    for(var i= 0; i<9;i++){
        botones[i].style.color ="rgba(57, 57, 57, 1)"
    }
    botones[8].style.color ="#045F92"
    e.preventDefault()
    lineas[0].style.borderColor = "#86B8E5"
}
class pagPrinca extends Component{
    
    constructor(props) {
        super(props);
    
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
                <MyNavBarPrinc/>
                <div align="center">
                    <Modal show={this.state.modal} handleClose={e => this.modalClose(e)}/>
                </div>
                <div className="row">
                    <div className="col col-2">
                    </div>
                    <div className="col col-2">
                        <div className="container-fluid misS">
                            <h1 className="cat pt-2 pb-2"><img src={require("./components/nena.svg")}width="35" height="35" alt=""></img> &nbsp;&nbsp;Categorías</h1>
                        </div>
                        <div className="container-fluid misGa">
                            <form>
                                <button id="btnInfo" onClick={cambioInfo} name="btnInfo" className="btn mt-2" ><FontAwesomeIcon icon={faInfoCircle}/> &nbsp;&nbsp;Información general</button>
                                <hr className="mt-1 mb-1"></hr>
                                <button id="btnAli" onClick={cambioAli} className="btn"><FontAwesomeIcon icon={faPalette}/> &nbsp;&nbsp;Alimentación</button><br></br>
                                <button id="btnArt" onClick={cambioArt} className="btn"><FontAwesomeIcon icon={faPalette}/> &nbsp;&nbsp;Arte</button><br></br>
                                <button id="btnDep" onClick={cambioDep} className="btn"><FontAwesomeIcon icon={faDumbbell}/> &nbsp;&nbsp;Deportes</button>
                                <button id="btnDoc" onClick={cambioDocs} className="btn"><FontAwesomeIcon icon={faGavel}/> &nbsp;&nbsp;Documentos legales</button>
                                <button id="btnEdu" onClick={cambioEdu} name="btnEdu" className="btn" ><FontAwesomeIcon icon={faGraduationCap}/> &nbsp;&nbsp;Educación</button>
                                <button id="btnRel" onClick={cambioRel} className="btn"><FontAwesomeIcon icon={faSmile}/> &nbsp;&nbsp;Relaciones sociales</button>
                                <button id="btnSal" onClick={cambioSal} className="btn"><FontAwesomeIcon icon={faHeart}/> &nbsp;&nbsp;Salud</button><br></br>
                                <button id="btnTec" onClick={cambioTec} className="btn"><FontAwesomeIcon icon={faLaptop}/> &nbsp;&nbsp;Tecnología</button><br></br>
                            </form>
                        </div>
                        <div className="container-fluid misS1">
                            <h1 className="cat pt-2 pb-2"><img src={require("./components/nena.svg")}width="50" height="50" alt=""></img> &nbsp;&nbsp;&nbsp;&nbsp;Social</h1>
                        </div>
                        <div className="container-fluid misGa1">
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
                        <div className="container-fluid misG pt-4">
                            <div className="container publicaciones">
                                <h1 className="cat mt-3"><FontAwesomeIcon icon={faUser}/>&nbsp;&nbsp;&nbsp;¿Qué está pensando Hernán?</h1>
                                <br></br><br></br>  
                                <div align="right" className="pb-2">
                                    <button type="button" onClick={e =>this.modalOpen(e)} className="botonP">Hacer publicación</button>
                                </div>
                            </div>
                            <div className="mt-4 container publicaciones">
                                <div className="row justify-content-around">
                                    <div className="col col-6">
                                        <div className="form-inline">
                                            <h1 className="cat mt-3 ml-3"><FontAwesomeIcon icon={faUser}/></h1>
                                            <p className="mt-3 pibe">&nbsp;&nbsp;&nbsp;El pibe</p>
                                        </div>
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
                                        <button type="submit" className="botonP">Me&nbsp;gusta</button>
                                    </div>
                                    <div className="col col-4">
                                        <button type="submit" className="botonP">Comentarios</button>
                                    </div>
                                    <div className="col col-4">
                                        <button type="submit" className="botonP">Guardar</button>
                                    </div>
                                </div>
                                <hr className="lineaP"></hr>
                            </div>
                            <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
                        </div>
                    </div>
                    <div align="center" className="col col-2">
                        <div className="container-fluid misS ">
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