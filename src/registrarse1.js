import React from 'react';
import MyNavBar from './components/NavBarInicio.js';
import MyFooter from './components/footer.js';
import './registrarse.css'
import{FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
    faAngleRight,
    faDumbbell,
    faGraduationCap,
    faHeart,
    faInfoCircle,
    faSmile,
    faLaptop
} from '@fortawesome/free-solid-svg-icons';

function Reg1() {
    return (
        <div className="Reg1">
            <MyNavBar/>
            <div align="center">
                <h1>¿A qué grupos le gustaría unirse?</h1>
                <div className="container-fluid grupos">
                    <div className="row justify-content-center">
                        <div className="col col-4">
                            <button className="btnNC mt-5 mb-2"><FontAwesomeIcon icon={faDumbbell}/> Deportes</button>
                        </div>
                        <div className="col col-4">
                            <button className="btnNO mt-5 mb-2"><FontAwesomeIcon icon={faGraduationCap}/> Educación</button>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col col-4">
                            <button className="btnNO mt-4 mb-2"><FontAwesomeIcon icon={faHeart}/>Salud</button>
                        </div>
                        <div className="col col-4">
                            <button className="btnNC mt-4 mb-2"><FontAwesomeIcon icon={faInfoCircle}/> Información <br></br>general</button>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col col-4">
                            <button className="btnNC mt-4 mb-2"><FontAwesomeIcon icon={faSmile}/> Relaciones<br></br>sociales</button>
                        </div>
                        <div className="col col-4">
                            <button className="btnNO mt-4 mb-2"><FontAwesomeIcon icon={faLaptop}/> Tecnología</button>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col col-4">
                            <button className="btnNO mt-4 mb-2"><FontAwesomeIcon icon={faDumbbell}/> Deportes</button>
                        </div>
                        <div className="col col-4">
                            <button className="btnNC mt-4 mb-2"><FontAwesomeIcon icon={faGraduationCap}/> Educación</button>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <button className="btnM mt-4 mb-4"> Seleccionar todo</button>
                    </div>
                </div>
                <img src={require("./components/nena.svg")}width="500" height="550" alt=""></img>
                <form method="get" action="/registrarse1">   
                    <button className="cambio"><FontAwesomeIcon icon={faAngleRight} className="flecha"/></button>
                </form> 
                <p className="mt-4">2/4</p>
                
            </div>
            <MyFooter />
        </div>
    )
}

export default Reg1;