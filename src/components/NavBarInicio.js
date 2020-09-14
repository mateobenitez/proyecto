import React from 'react';
import "./NavBar.css"

class NavBar extends React.Component{
    render() {
        return(
            <div>
                <nav className="navbar">
                    <a className="navbar-brand" className="brand-log" href="#">
                        <img src={require("./a.jpg")}width="50" height="50" alt=""></img>
                        FORAÜ
                    </a>
                    <form className="form-inline">
                        <a className="nav-link nav-com" href="#" >Inicio</a>
                        <a className="nav-link nav-com" href="#">Acerca de</a>
                        <a className="nav-link nav-com" href="#">Contacto</a>
                        <a className="nav-link nav-reg" href="#">Registrarse</a>
                        <a className="nav-link nav-com" href="#">Iniciar sesión</a>
                    </form>
                </nav>
                <hr className="linea"></hr>
            </div>
        );
    }
};

export default NavBar;