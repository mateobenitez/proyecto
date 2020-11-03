import React from 'react';
import "./NavBar.css"
import IniciarSesion from './IniciarSesion.js'

class NavBar extends React.Component{
    render() {
        return(
            <div>
                <nav className="navbar">
                    <div className="ml-5">
                        <a  className="brand-log" href="inicio">
                            <img src={require("./a.jpg")}width="50" height="50" alt=""></img>
                            FORAÜ
                        </a>
                    </div>
                    <form className="form-inline">
                        <a className="nav-link nav-com" href="inicio" >Inicio</a>
                        <form method="get" action="/acerca">
                            <a className="nav-link nav-com" href="Acerca">Acerca de</a>
                        </form>
                        <form method="get" action="/contacto">
                            <a className="nav-link nav-com" href="Contacto">Contacto</a>
                        </form>
                        <form method="get" action="/inicio">
                            <button className="boton1" type="submit">Registrarse</button>
                        </form>
                        <form methos="get" action="/IniciarSesion">
                            <button className="boton2" type="submit">Iniciar sesión</button>
                        </form>
                    </form>
                </nav>
                <hr className="linea"></hr>
            </div>
        );
    }
};

export default NavBar;