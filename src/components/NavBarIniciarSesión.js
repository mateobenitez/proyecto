import React from 'react';
import "./NavBar.css"
import IniciarSesion from './IniciarSesion.js'

class NavBar extends React.Component{
    render() {
        return(
            <div>
                <nav className="navbar">
                    <div className="ml-5">
                    </div>
                    <form className="form-inline">
                        <a className="nav-link nav-com bold" href="inicio" >Inicio</a>
                        <form method="get" action="/acerca">
                            <a className="nav-link nav-com we4" href="Acerca">Acerca de</a>
                        </form>
                        <form method="get" action="/contacto">
                            <a className="nav-link nav-com we4" href="Contacto">Contacto</a>
                        </form>
                        <form method="get" action="/inicio">
                            <button className="boton2" type="submit">Registrarse</button>
                        </form>
                    </form>
                </nav>
            </div>
        );
    }
};

export default NavBar;