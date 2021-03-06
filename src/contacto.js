import { render } from '@testing-library/react';
import React, {Component} from 'react';
import MyNavBar from './components/NavBarContacto.js';
import MyFooter from './components/footer.js';
import './contactos.css'

var logo = document.getElementsByClassName("botCon")
var nosotros = document.getElementsByClassName("noso")
var linea = document.getElementsByClassName("line1")
var inputs1 = document.getElementsByClassName("inputsNos")
var fondo1 = document.getElementsByClassName("nosotros")
var clickeado1 = false
var nosotros1 = document.getElementsByClassName("noso1")
var linea1 = document.getElementsByClassName("line2")
var inputs1 = document.getElementsByClassName("inputsNos")
var fondo2 = document.getElementsByClassName("nosotros1")
var clickeado2 = false

function abrirNos(){
    if(clickeado1 == false){
        logo[0].style.top = "-6em"
        nosotros[0].style.visibility = "hidden"
        linea[0].style.visibility = "hidden"
        inputs1[0].style.visibility = "initial"
        fondo1[0].style.maxHeight = "56em"
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

function abrirNos2(){
    if(clickeado2 == false){
        console.log(logo[1])
        logo[1].style.top = "-6em"
        nosotros1[0].style.visibility = "hidden"
        linea1[0].style.visibility = "hidden"
        inputs1[1].style.visibility = "initial"
        fondo2[0].style.maxHeight = "56em"
        clickeado2 = true
    }
    else{
        clickeado2 = false
        logo[1].style.top = null
        nosotros1[0].style.visibility = null
        linea1[0].style.visibility = null
        inputs1[1].style.visibility = null
        fondo2[0].style.maxHeight = null
    }
}

function Contacto(){
    return(
        <div className="contacto"> 
            <MyNavBar/>
            <div align="center"><br></br><br></br>
                <h1 className="titulo">Contacto y asistencia</h1><br></br>
            </div>
            <div className="row">
                <div className="col col-2">

                </div>
                <div className="col col-4">
                    <div align="center" className="nosotros container mt-5">
                        <p className="nosp noso pt-4">Nosotros</p><hr className="lineanos line1"></hr>
                        <button className="botCon" onClick={abrirNos}><img className="mt-5" width="500" src={require("./components/logo.svg")}></img></button><br></br><br></br>
                        <div className="container inputsNos">
                            <form align="center">
                                <div className="">
                                    <input type="text" className="pl-2 botonesNos" placeholder="Nombre"></input>&nbsp;&nbsp;&nbsp;&nbsp;
                                    <input type="text" className="pl-2 botonesNos" placeholder="Apellido"></input>
                                </div><br></br>
                                <input type="text" className="pl-2 botonesNos textYcorreo" placeholder="Corrreo Electrónico"></input><br></br><br></br>
                                <textarea className="botonesNos  textYcorreo" placeholder="Mensaje" rows="4" ></textarea>
                                <input type="submit" className="botonNos mt-3"></input>
                            </form>
                        </div>
                    </div>   
                </div>
                <div className="col col-4">
                    <div align="center" className="nosotros1 container mt-5">
                        <p className="nosp noso1 pt-4">GRUPO TGD Padres TEA</p><hr className="lineanos line2"></hr>
                        <button className="botCon " onClick={abrirNos2}><img  width="400" src={require("./components/tgd.svg")}></img></button><br></br><br></br>
                        <div className="container inputsNos">
                            <form align="center">
                                <div className="">
                                    <input type="text" className="pl-2 botonesNos" placeholder="Nombre"></input>&nbsp;&nbsp;&nbsp;&nbsp;
                                    <input type="text" className="pl-2 botonesNos" placeholder="Apellido"></input>
                                </div><br></br>
                                <input type="text" className="pl-2 botonesNos textYcorreo" placeholder="Corrreo Electrónico"></input><br></br><br></br>
                                <textarea className="botonesNos  textYcorreo" placeholder="Mensaje" rows="4" ></textarea>
                                <input type="submit" className="botonNos mt-3"></input>
                            </form>
                        </div>
                    </div>   
                </div>
                <div className="col col-2">
                </div>
            </div>
            <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
            <MyFooter/>
        </div>
    )
}

export default Contacto;