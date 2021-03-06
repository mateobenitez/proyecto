import React from 'react';
import "./NavBar.css"
import IniciarSesion from './IniciarSesion.js'

class NavBarAcerca extends React.Component{
    render() {
        return(
            <div className="navbar sombra">
                <div className="ml-5">
                    <a  className="brand-log" href="inicio">
                        <img src={require("./logo.svg")}width="350px" alt=""></img>
                    </a>
                </div>
                <form className="form-inline">
                    <a className="nav-link nav-com we4" href="inicio" >Inicio</a>
                    <form method="get" action="/acerca">
                        <a className="nav-link nav-com bold" href="Acerca">Acerca de</a>
                    </form>
                    <form method="get" action="/contacto">
                        <a className="nav-link nav-com we4" href="Contacto">Contacto</a>
                    </form>
                    <form method="get" action="/inicio">
                        <button className="boton2" type="submit">Registrarse</button>
                    </form>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <form methos="get" action="/IniciarSesion">
                        <button className="boton2" type="submit">Iniciar sesión</button>
                    </form>
                </form>
            </div>
        );
    }
};

export default NavBarAcerca;