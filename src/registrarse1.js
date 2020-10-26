import React, { Component } from 'react';
import MyNavBar from './components/NavBarInicio.js';
import MyFooter from './components/footer.js';
import './registrarse.css'
import{FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
    faAngleRight,
    faDumbbell,
    faGraduationCap,
    faHeart,
    faInfoCircle,
    faSmile,
    faLaptop,
    faPalette,
    faGavel
} from '@fortawesome/free-solid-svg-icons';



var btn1 = document.getElementsByClassName("btns")
var uno = [0, 0, 0, 0, 0, 0, 0, 0, 0]

function prevenir(e){
    e.preventDefault()
    if(uno[0] == 0){
        btn1[0].style.opacity = "100"
        uno[0] = 1
    }else{
        btn1[0].style.opacity = null
        uno[0] = 0
        uno[8] = 0
    }
}
function prevenir1(e){
    e.preventDefault()
    if(uno[1] == 0){
        btn1[1].style.opacity = "100"
        uno[1] = 1
    }else{
        btn1[1].style.opacity = null
        uno[1] = 0
        uno[8] = 0
    }
}
function prevenir2(e){
    e.preventDefault()
    if(uno[2] == 0){
        btn1[2].style.opacity = "100"
        uno[2] = 1
    }else{
        btn1[2].style.opacity = null
        uno[2] = 0
        uno[8] = 0
    }
}
function prevenir3(e){
    e.preventDefault()
    if(uno[3] == 0){
        btn1[3].style.opacity = "100"
        uno[3] = 1
    }else{
        btn1[3].style.opacity = null
        uno[3] = 0
        uno[8] = 0
    }
}
function prevenir4(e){
    e.preventDefault()
    if(uno[4] == 0){
        btn1[4].style.opacity = "100"
        uno[4] = 1
    }else{
        btn1[4].style.opacity = null
        uno[4] = 0
        uno[8] = 0
    }
}
function prevenir5(e){
    e.preventDefault()
    if(uno[5] == 0){
        btn1[5].style.opacity = "100"
        uno[5] = 1
    }else{
        btn1[5].style.opacity = null
        uno[5] = 0
        uno[8] = 0
    }
}
function prevenir6(e){
    e.preventDefault()
    if(uno[6] == 0){
        btn1[6].style.opacity = "100"
        uno[6] = 1
    }else{
        btn1[6].style.opacity = null
        uno[6] = 0
        uno[8] = 0
    }
}
function prevenir7(e){
    e.preventDefault()
    if(uno[7] == 0){
        btn1[7].style.opacity = "100"
        uno[7] = 1
    }else{
        btn1[7].style.opacity = null
        uno[7] = 0
        uno[8] = 0
    }
}
function prevenir8(e){
    e.preventDefault()
    if(uno[8] == 0){
        for(var i = 0; i<8; i++){
            btn1[i].style.opacity = "100"
            uno[i]=1
        }
    }
}

function obli(e){
    var eligio = false
    
    for(var i = 0; i<8; i++){
        if(uno[i]==1){
            eligio = true
        }
    }
    if(!eligio){
        e.preventDefault()
    }
}

class Reg1 extends Component{
    render() {
        return (
            
            <div className="Reg">
                <MyNavBar/>
                <div align="center">
                    <h1 className="mb-5">¿A qué grupos le gustaría unirse?</h1>
                    <div className="form-inline">
                        <div className="container grupos">
                            <form name="foro">
                                <div className="row justify-content-center">
                                    <div className="col col-4">
                                    <button className="btns btn2 mt-5 mb-2"  onClick={prevenir}><FontAwesomeIcon icon={faGraduationCap}/> &nbsp;Educación</button>
                                    </div>
                                    <div className="col col-4">
                                        <button className="btns mt-5 btn5 mb-2" onClick={prevenir1}><FontAwesomeIcon icon={faSmile}/> Relaciones<br></br>sociales</button>
                                    </div>
                                </div>
                                <div className="row justify-content-center">
                                    <div className="col col-4">
                                        <button className="btns btn4 mt-4 mb-2" onClick={prevenir2}><div className="form-inline"><img  src={require('./components/tenedor.svg')} height="19px" width="19px"></img> &nbsp;Alimentación</div></button>
                                    </div>
                                    <div className="col col-4">
                                        <button className="btns btn7 mt-4 mb-2" onClick={prevenir3}><FontAwesomeIcon icon={faPalette}/> &nbsp;Arte</button>
                                    </div>
                                </div>
                                <div className="row justify-content-center">
                                    <div className="col col-4">
                                        <button id="btn1" className="btns btn1 mt-4 mb-2" onClick={prevenir4}><FontAwesomeIcon icon={faDumbbell}/> &nbsp;Deportes</button>
                                    </div>
                                    <div className="col col-4">
                                        <button className="btns btn6 mt-4 mb-2" onClick={prevenir5}><FontAwesomeIcon icon={faLaptop}/> &nbsp;Tecnología</button>
                                    </div>
                                </div>
                                <div className="row justify-content-center">
                                    <div className="col col-4">
                                        <button className="btns btn3 mt-4 mb-2" onClick={prevenir6}><FontAwesomeIcon icon={faHeart} />&nbsp;Salud</button>
                                    </div>
                                    <div className="col col-4">
                                        <button className="btns btn8 mt-4 mb-2" onClick={prevenir7}><FontAwesomeIcon icon={faGavel}/> Documentos <br></br> legales</button>
                                    </div>
                                </div>
                                <div className="row justify-content-center">
                                    <button className="btns btnM mt-4 mb-4"  onClick={prevenir8}> Seleccionar todo</button>
                                </div>
                            </form>
                            </div>
                            <div className="as">
                                <form method="get" action="/registrarse2">   
                                    <button  onClick={obli} className="cambio"><FontAwesomeIcon icon={faAngleRight} className="flecha"/></button>
                            </form>
                            <p className="mt-4">Siguiente</p>
                        </div>
                    </div>
                    <img className="imgReg1" src={require("./components/tipoGrupos.svg")}width="500" height="550" alt=""></img>
                </div>
                <MyFooter />
            </div>
        )
    }
}

export default Reg1;