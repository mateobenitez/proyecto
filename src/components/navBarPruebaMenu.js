import React, {useState} from 'react';
import {CSSTransition} from 'react-transition-group';
import "./NavBar.css"

var buscador = document.getElementsByClassName("buscar")
var notificaciones = false

function search(e) {
    e.preventDefault();
    console.log(buscador)
}
function NavBarPrinca(props){
    return(
        <div className="navbarPrinc sombra ">
            <div className="pl-5">
                <br></br>
                <a href="/inicio"><img src={require('./logo.svg')}></img></a>
            </div>
            <div className="container-fluid search">
                <img src={require("./buscar.svg")} alt=""></img>  &nbsp;&nbsp;
                <input onClick={search} type="search" placeholder="Buscar" className="buscar"></input>
            </div>
            <ul className="navba-nav">
                <NavItem ima={<img alt="" src={require("./usuario.svg")} width="50px" height="50px" alt="menu"></img>}/>
                <p href="perfil" className="usuarioNav">Hernán</p>
                <NavItem ima={<img src={require("./notificaciones.svg")} alt="" width="50px" height="50px"></img>}>
                    <DropdownNotif />
                </NavItem>
                <p className="notifNav">Notificaciones</p>
                <NavItem ima={<img src={require("./menu.svg")} alt="" width="50px" height="50px"></img>}> 
                    <DropdownMenu />
                </NavItem>
                <p className="menuNav">Menú</p>
            </ul>
            <br></br><br></br>
        </div>
    );
}

function DropdownNotif(){
    const [activeMenu, setActiveMenu] = useState('main')
    const [menuHeight, setMenuHeight] = useState(null);

    function calcHeight(el){
        const height = el.offsetHeight;
        setMenuHeight(height);
    }

    function DropdownItem(props){
        return(
            <a href="#" className="menu-item" onClick = {() => props.goToMenu && setActiveMenu(props.goToMenu)}>
                <span className="icon-button">{props.leftIcon}</span>
                {props.children}
                <span className="icon-right">{props.rightIcon}</span>
            </a>
        )
    }
    if(notificaciones){
        return(
            <div className="dropdown dropN" style={{height: menuHeight}}>
                <CSSTransition in={activeMenu === 'main' } unmountOnExit timeout={500} classNames="menu-primary" onEnter={calcHeight}> 
                    <div className="menu">
                        <p className="titMen">Notificaciones</p>   
                        <div className="notificacionHid">
                            <DropdownItem  
                                leftIcon={<img className="ml-2" src={require("./usuario.svg")} width="25px"></img>}><a className="dropItems" href="perfil"> &nbsp;&nbsp;&nbsp;&nbsp;A un usuario le gustó tu publicación</a>  
                            </DropdownItem>
                        </div>
                    </div>
                </CSSTransition>
            </div>
        )
    }else{
        return(
            <div className="dropdown dropN" style={{height: menuHeight}}>
                <CSSTransition in={activeMenu === 'main' } unmountOnExit timeout={500} classNames="menu-primary" onEnter={calcHeight}> 
                    <div className="menu">
                        <p className="titMen">Notificaciones</p>
                        <p align="center" className="mt-4 ceroNotificaciones">No tienes notificaciones</p>    
                    </div>
                </CSSTransition>
            </div>
        )
    }
    
}


function DropdownMenu(){

    const [activeMenu, setActiveMenu] = useState('main')
    const [menuHeight, setMenuHeight] = useState(null);

    function calcHeight(el){
        const height = el.offsetHeight;
        setMenuHeight(height);
    }

    function DropdownItem(props){
        return(
            <a href="#" className="menu-item" onClick = {() => props.goToMenu && setActiveMenu(props.goToMenu)}>
                <span className="icon-button">{props.leftIcon}</span>
                {props.children}
                <span className="icon-right">{props.rightIcon}</span>
            </a>
        )
    }

    return(
        <div className="dropdown dropM" style={{height: menuHeight}}>
            <CSSTransition in={activeMenu === 'main' } unmountOnExit timeout={500} classNames="menu-primary" onEnter={calcHeight}> 
                <div className="menu">
                    <p className="titMen">Menú</p>
                    <DropdownItem  
                        leftIcon={<img className="ml-2" src={require("./usuario.svg")} width="20px"></img>}><a className="dropItems" href="perfil"> &nbsp;&nbsp;&nbsp;&nbsp;Ver mi perfil</a>  
                    </DropdownItem>
                    <DropdownItem
                        rightIcon={<img src={require("./flechaAd.svg")} width="20px"></img>}
                        leftIcon={<img className="ml-2" src={require("./preguntas.svg")} width="20px"></img>}
                        goToMenu="settings"
                        >  <a className="dropItems" href="#">&nbsp;&nbsp;&nbsp;&nbsp;Ayuda y preguntas</a>
                    </DropdownItem>
                    <DropdownItem 
                        leftIcon={<img className="ml-2" src={require("./configuracion.svg")} width="20px"></img>}><a className="dropItems" href="config">&nbsp;&nbsp;&nbsp;&nbsp;Configuración y privacidad</a>
                    </DropdownItem>
                    <DropdownItem
                        leftIcon={<img className="ml-2" src={require("./contacto.svg")} width="20px"></img>}><a className="dropItems" href="contacto">&nbsp;&nbsp;&nbsp;&nbsp;Contacto y asistencia</a>
                    </DropdownItem>
                    <DropdownItem
                        leftIcon={<img className="ml-2" src={require("./buscar.svg")} width="20px"></img>}><a className="dropItems" href="acerca">&nbsp;&nbsp;&nbsp;&nbsp;Acerca de TEA</a>
                    </DropdownItem>
                </div>
            </CSSTransition>
            <CSSTransition in={activeMenu === 'settings' } unmountOnExit timeout={500} classNames="menu-secondary">
                <div className="menu">
                    <p className="titMen">Ayuda y preguntas</p>
                    <DropdownItem
                        leftIcon={<img className="ml-2" src={require("./preguntas.svg")} width="20px"></img>}
                        goToMenu="main"
                        >  <a className="dropItems" href="#">&nbsp;&nbsp;&nbsp;¿Cómo se usa FORAÜ? </a>
                    </DropdownItem>
                    <DropdownItem
                        leftIcon={<img className="ml-2" src={require("./preguntas.svg")} width="20px"></img>}
                        goToMenu="main"
                        >  <a className="dropItems" href="#">&nbsp;&nbsp;&nbsp;¿Cómo hacer publicaciones? </a>
                    </DropdownItem>
                    <DropdownItem
                        leftIcon={<img className="ml-2" src={require("./preguntas.svg")} width="20px"></img>}
                        goToMenu="main"
                        >  <a className="dropItems" href="#">&nbsp;&nbsp;&nbsp;¿Cómo cambiar tu contraseña? </a>
                    </DropdownItem>
                    <DropdownItem
                        leftIcon={<img className="ml-2" src={require("./preguntas.svg")} width="20px"></img>}
                        goToMenu="main"
                        >  <a className="dropItems" href="#">&nbsp;&nbsp;&nbsp;¿Cómo unirse a más categorías? </a>
                    </DropdownItem>
                    <DropdownItem
                        leftIcon={<img className="ml-2" src={require("./preguntas.svg")} width="20px"></img>}
                        goToMenu="main"
                        >  <a className="dropItems" href="#">&nbsp;&nbsp;&nbsp;¿Cómo contactarnos? </a>
                    </DropdownItem>
                </div>
            </CSSTransition>
        </div>
    )
}

function NavItem(props){
    const [open, setopen] = useState(   false); 
    return(
        <li className="nav-item">
            <a href="#" className="icon-button" onClick={() => setopen(!open)}>
                {props.ima}
            </a>
            {open && props.children}
        </li>
    )
}

export default NavBarPrinca;