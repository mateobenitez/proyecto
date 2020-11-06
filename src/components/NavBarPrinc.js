import React, {useState} from 'react';
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
function NavBarPrinc(){
    return(
        <div className="navbarPrinc">
            <nav className="navbar sombra">
                <div className="ml-5">
                    <a  className="brand-log" href="inicio">
                        <img src={require("./logo.svg")}width="400" alt=""></img>
                    </a>
                </div>
                <div className="container-fluid search">
                    <img src={require("./buscar.svg")}></img>  &nbsp;&nbsp;
                    <input onClick={search} type="search" placeholder="Buscar" className="buscar"></input>
                </div>
                <ul className="navbar-nav">
                    <NavItem ima={<img src={require("./usuario.svg")} width="40px" height="40px"></img>}/>
                    <NavItem ima={<img src={require("./notificaciones.svg")} width="40px" height="40px"></img>}/>
                    <NavItem ima={<img src={require("./menu.svg")} width="40px" height="40px"></img>}> 
                        <DropdownMenu />
                    </NavItem>
                </ul>
                <br></br><br></br>
            </nav>
        </div>
    );
}

function DropdownMenu(){

    function DropdownItem(props){
        return(
            <a href="#" className="menu-item">
                <span className="icon-button">{props.leftIcon}</span>
                {props.children}
                <span className="icon-right">{props.rightIcon}</span>
            </a>
        )
    }

    return(
        <div className="dropdown">
            <DropdownItem>My profile</DropdownItem>
            <DropdownItem
                rightIcon={<img src={require("./menu.svg")} width="40px" height="40px"></img>}>                                
            </DropdownItem>
            <DropdownItem>My profile</DropdownItem>
            <DropdownItem>My profile</DropdownItem>
            <DropdownItem>My profile</DropdownItem>
            <DropdownItem>My profile</DropdownItem>
        </div>
    )
}

function NavItem(props){
    const [open, setopen] = useState(); 
    return(
        <li className="nav-item">
            <a href="#" className="icon-button" onClick={() => setopen(!open)}>
                {props.ima}
            </a>
            {open && props.children}
        </li>
    )
}

export default NavBarPrinc;