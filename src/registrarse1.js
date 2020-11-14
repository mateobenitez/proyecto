import React, { Component, useState } from 'react';
import MyNavBar2 from './components/NavBarInicio.js';
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
    faGavel,
    faChevronDown
} from '@fortawesome/free-solid-svg-icons';
import axios from 'axios'

var btn1 = document.getElementsByClassName("btns")
var uno = [0, 0, 0, 0, 0, 0, 0, 0, 0]

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

function obli(e){
    var eligio = false
    
    for(var i = 0; i<8; i++){
        if(uno[i]==1){
            eligio = true
        }
    }
    if(!eligio){
        e.preventDefault()
        alert("Debe elegir al menos una categoría")
    }
}

function postear(){
    axios({
        method: "post",
        url: "http://localhost:3000/admin/registrarse",
        data:{
        }
      })
        .then((resp) => {
      })
        .catch((err) => {
          console.log(err)
        })
}

class Reg1 extends Component{
    render() {
        return (
            
            <div className="Reg">
                <MyNavBar2/><br></br><br></br><br></br>
                <form method="get" action="/registrarse">
                    <button  className="atras pt-2 pb-2 pl-3 pr-3"><img className="pb-1" src={require('./components/flechaAt.svg')}></img>&nbsp;&nbsp;Atrás</button>
                </form>
                <form method="get" action="/registrarse2">
                    <button onClick={obli} className="continuar pt-2 pb-2 pl-3 pr-3">Siguiente&nbsp;&nbsp;<img className="pb-1" src={require('./components/continuar.svg')}></img></button>
                </form>
                <div align="center">
                    <h1 className="mb-5">¿A qué grupos le gustaría unirse?  </h1>
                    <div className="form-inline">
                        <div className="container grupos">
                            <form name="foro">
                                <div className="row justify-content-center">
                                    <div className="col col-4">
                                    <button className="btns btn2 mt-5 mb-2"  onClick={prevenir}><img src={require('./components/edu.svg')} width="20px"></img> &nbsp;Educación</button>
                                    </div>
                                    <div className="col col-4">
                                        <button className="btns mt-5 btn5 mb-2" onClick={prevenir1}><img src={require('./components/carita.svg')} width="20px"></img> Relaciones<br></br>sociales</button>
                                    </div>
                                </div>
                                <div className="row justify-content-center">
                                    <div className="col col-4">
                                        <button className="btns btn4 mt-4 mb-2" onClick={prevenir2}><div className="form-inline"><img  src={require('./components/tenedor.svg')} height="19px" width="19px"></img> &nbsp;Alimentación</div></button>
                                    </div>
                                    <div className="col col-4">
                                        <button className="btns btn7 mt-4 mb-2" onClick={prevenir3}><img src={require('./components/arte.svg')} width="20px"></img> &nbsp;Arte</button>
                                    </div>
                                </div>
                                <div className="row justify-content-center">
                                    <div className="col col-4">
                                        <button id="btn1" className="btns btn1 mt-4 mb-2" onClick={prevenir4}><img src={require('./components/deportes.svg')} width="20px"></img> &nbsp;Deportes</button>
                                    </div>
                                    <div className="col col-4">
                                        <button className="btns btn6 mt-4 mb-2" onClick={prevenir5}><img src={require('./components/tec.svg')} width="20px"></img> &nbsp;Tecnología</button>
                                    </div>
                                </div>
                                <div className="row justify-content-center">
                                    <div className="col col-4">
                                        <button className="btns btn3 mt-4 mb-2" onClick={prevenir6}><img src={require('./components/salud.svg')} width="20px"></img>&nbsp;Salud</button>
                                    </div>
                                    <div className="col col-4">
                                        <button className="btns btn8 mt-4 mb-2" onClick={prevenir7}><img src={require('./components/doc.svg')} width="20px"></img> Documentos <br></br> legales</button>
                                    </div>
                                </div>
                                <div className="row justify-content-center">
                                    <button className="btns btnM mt-4 mb-4"  onSubmit={postear} onClick={prevenir8}> Seleccionar todo</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <img className="imgReg1" src={require("./components/tipoGrupos.svg")} alt=""></img>
                </div>
                <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
                <MyFooter />
            </div>
        )
    }
}

export default Reg1;