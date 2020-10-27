import React from 'react';
import "./NavBar.css"
import{FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
    faUser,
    faSearch
} from '@fortawesome/free-solid-svg-icons';

var buscador = document.getElementsByClassName("buscar")
var buscador1 = document.getElementsByClassName("btn")

function search(e) {
    e.preventDefault();
    console.log(buscador)
}

class NavBarPrinc extends React.Component{
    render() {
        return(
            <div className="navbarPrinc">
                <nav className="navbar">
                    <div className="ml-5">
                        <a  className="brand-log" href="inicio">
                            <img src={require("./a.jpg")}width="50" height="50" alt=""></img>
                            FORAÜ
                        </a>
                    </div>
                    <div>
                        <div className="container search">
                            <img src={require("./buscar.svg")}></img>  &nbsp;&nbsp;
                            <input onClick={search} type="search" placeholder="Buscar" className="buscar"></input>
                        </div>
                    </div>
                    <div className="form-inline">
                        <div className="user mr-5" align="center">
                            <img src={require("./nena.svg")}width="50" height="50"></img><br></br><p>Menú</p>
                        </div>
                        <div className="user mr-5 ml-5" align="center">
                            <img src={require("./notificaciones.svg")}></img><br></br><p>Notificaciones</p>
                        </div>
                        <div className="user ml-5" align="center">
                            <img src={require("./menu.svg")}></img><br></br><p>Menú</p>
                        </div>
                    </div>
                </nav>
                <hr className="linea"></hr>
            </div>
        );
    }
};

export default NavBarPrinc;