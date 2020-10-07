import React from 'react';
import "./NavBar.css"
import{FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
    faUser
} from '@fortawesome/free-solid-svg-icons';
class NavBarPrinc extends React.Component{
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
                    <div className="user mt-3" >
                        <p><FontAwesomeIcon icon={faUser}/>&nbsp;&nbsp;Mi perfil</p>
                    </div>
                    
                </nav>
                <hr className="linea"></hr>
            </div>
        );
    }
};

export default NavBarPrinc;