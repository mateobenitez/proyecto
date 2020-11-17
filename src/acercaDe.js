import { render } from '@testing-library/react';
import React, {Component} from 'react';
import MyNavBar from './components/NavBarAcerca.js';
import MyFooter from './components/footer.js';
import './acerca.css'


function acerca(){
    return(
        <div className="acerca"> 
            <MyNavBar/><br></br><br></br><br></br>
            <img className="acercaImg" src={require('./components/acerca.svg')} width="1800px"></img>
                <h1 className="tituloAc" align="center">Acerca de TEA</h1><br></br><br></br><br></br>
                <div className="container">
                    <p align="left" className="acercaTxt">El Trastorno del Espectro Autista (TEA) es una condición que dura toda la vida y que altera la capacidad de una persona para comunicarse y relacionarse con otros.<br></br><br></br>
                    El autismo está asociado con rutinas y comportamientos repetitivos, tales como arreglar objetos obsesivamente o seguir rutinas muy específicas. Los síntomas pueden variar desde leves hasta muy severos, por eso se dice que es un espectro. No hay dos personas con autismo iguales.<br></br><br></br>
                    La gente con autismo percibe el mundo en forma diferente. Ve detalles que vos no ves y tienen dificultades en procesar los diferentes estímulos. Por eso, los lugares, personas o rutinas nuevas le representan un desafío. Sostener la mirada del otro puede resultarle amenazante; por eso evita el contacto visual.<br></br><br></br>
                    A una persona con autismo le cuesta expresar lo que siente así como también entender lo que les pasa o sienten los demás. Tienen gustos e intereses restringidos. Por ejemplo, un niño puede interesarse específicamente por los dinosaurios y casi por nada más. Realizar tareas repetitivas les sirve para ordenar un mundo que percibe caótico, por ejemplo, ordenar cajas en fila una y otra vez.<br></br><br></br>
                    La detección temprana mejora considerablemente el pronóstico. <br></br>Cualquiera puede nacer con autismo y no hay manera de prevenirlo.</p>
                </div>
            <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
            <MyFooter/>
        </div>
    )
}

export default acerca;