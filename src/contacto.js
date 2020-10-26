import { render } from '@testing-library/react';
import React, {Component} from 'react';
import MyNavBar from './components/NavBarInicio.js';
import MyFooter from './components/footer.js';
import './contactos.css'

var logo = document.getElementsByClassName("botCon")
var nosotros = document.getElementsByClassName("noso")
var linea = document.getElementsByClassName("line1")
var inputs1 = document.getElementsByClassName("inputsNos")
var fondo1 = document.getElementsByClassName("nosotros")
var clickeado1 = false

function abrirNos(){
    if(clickeado1 == false){
        logo[0].style.top = "-8em"
        nosotros[0].style.visibility = "hidden"
        linea[0].style.visibility = "hidden"
        inputs1[0].style.visibility = "initial"
        fondo1[0].style.maxHeight = "52em"
        clickeado1 = true
    }
    else{
        clickeado1 = false
        logo[0].style.top = null
        nosotros[0].style.visibility = null
        linea[0].style.visibility = null
        inputs1[0].style.visibility = null
        fondo1[0].style.maxHeight = null
    }
                   
}

function Contacto(){
    return(
        <div className="contacto"> 
            <MyNavBar/>
            <div align="center">
                <h1 className="titulo">Contactos</h1>
                <p className="sel mb-5">Seleccione con quien le gustaría contactarse </p>
            </div>
            <div className="row">
                <div className="col col-1">

                </div>
                <div className="col col-5">
                    <div align="center" className="nosotros container mt-5">
                        <p className="nosp noso pt-4">Nosotros</p><hr className="lineanos line1"></hr>
                        <input className="botCon" onClick={abrirNos} type="image" src={require("./components/logo.svg")}></input><br></br><br></br>
                        <div className="container inputsNos">
                            <form>
                                <div className="row">
                                    <div className="col pl-5 col-6 pb-4">
                                        <input type="text" className="pl-2 botonesNos" placeholder="Nombre"></input>
                                    </div>
                                    <div className="col pr-5 col-6">
                                        <input type="text" className="pl-2 botonesNos" placeholder="Apellido"></input>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col pl-5 col-6 pb-4">
                                        <input type="text" className="pl-2 botonesNos textYcorreo" placeholder="Corrreo Electrónico"></input><br></br>
                                    </div>
                                    <div className=" col col-6">
                                    </div>
                                    <div className="col pl-5 col-6">
                                        <textarea className="botonesNos  textYcorreo" placeholder="Mensaje" rows="6" ></textarea>
                                    </div>
                                    <div className=" col col-6">
                                    </div>
                                    <input type="submit" className="botonNos" placeholder="Corrreo Electrónico"></input>
                                </div>
                            </form>
                        </div>
                    </div>   
                </div>
                <div className="col col-5">
                    <div align="center" className="nosotros1 container mt-5">
                        <p className="nosp pt-4">ONG TGD Padres TEA</p><hr className="lineanos"></hr>
                        <input className="botCon1" type="image" className="mt-5" src={require("./components/tgd.svg")} width="500" height="250" alt=""></input><br></br><br></br>
                    </div>   
                </div>
                <div className="col col-1">
                </div>
            </div>
            <br></br><br></br><br></br><br></br><br></br>
            <MyFooter/>
        </div>
    )
}

export default Contacto;