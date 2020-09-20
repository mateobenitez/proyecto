import React from 'react';
import "./NavBar.css"

class NavBar extends React.Component{
    render() {
        return(
            <div>
                <nav className="navbar">
                    <div className="ml-5">
                        <a className="navbar-brand" className="brand-log" href="#">
                            <img src={require("./a.jpg")}width="50" height="50" alt=""></img>
                            FORAÜ
                        </a>
                    </div>
                    <form className="form-inline">
                        <a className="nav-link nav-com" href="/inicio" >Inicio</a>
                        <a className="nav-link nav-com" href="Acerca">Acerca de</a>
                        <a className="nav-link nav-com" href="Contacto">Contacto</a>
                        <form method="get" action="/registrarse">
                            <button className="boton1" type="submit">Registrarse</button>
                        </form>
                        <button className="boton2" type="submit">Iniciar sesión</button>
                    </form>
                </nav>
                <hr className="linea"></hr>
            </div>
        );
    }
};

export default NavBar;