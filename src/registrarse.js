import React, { Component } from 'react';
import MyNavBar2 from './components/NavBarInicio.js';
import MyFooter from './components/footer.js';
import './registrarse.css'
import axios from 'axios'


var conf = [false, false, false, false] 

function cambioDeColor(){
    var input1 = document.getElementsByClassName("quesos")
    if(!conf[0]){
        conf[0] = true
        conf[1] = false
        input1[1].style.backgroundColor = null
        conf[2] = false
        input1[2].style.backgroundColor = null
        conf[3] = false
        input1[3].style.backgroundColor = null
        input1[0].style.backgroundColor = "rgba(196, 196, 196, 0.51)"
    }
    else{
        conf[0] = false
        input1[0].style.backgroundColor = null
    }
}

function cambioDeColor1(){
    var input1 = document.getElementsByClassName("quesos")
    if(conf[1] == false){
        conf[1] = true
        conf[0] = false
        input1[0].style.backgroundColor = null
        conf[2] = false
        input1[2].style.backgroundColor = null
        conf[3] = false
        input1[3].style.backgroundColor = null
        input1[1].style.backgroundColor = "rgba(196, 196, 196, 0.51)"
    }
    else{
        conf[1] = false
        input1[1].style.backgroundColor = null
    }
}

function cambioDeColor2(){
    var input1 = document.getElementsByClassName("quesos")
    if(conf[2] == false){
        conf[2] = true
        conf[1] = false
        conf[1] = false
        input1[1].style.backgroundColor = null
        conf[0] = false
        input1[0].style.backgroundColor = null
        conf[3] = false
        input1[3].style.backgroundColor = null
        input1[1].style.backgroundColor = null
        input1[2].style.backgroundColor = "rgba(196, 196, 196, 0.51)"
    }
    else{
        conf[2] = false
        input1[2].style.backgroundColor = null
    }
}

function cambioDeColor3(){
    var input1 = document.getElementsByClassName("quesos")
    if(conf[3] == false){
        conf[3] = true
        conf[1] = false
        conf[1] = false
        input1[1].style.backgroundColor = null
        conf[2] = false
        input1[2].style.backgroundColor = null
        conf[0] = false
        input1[0].style.backgroundColor = null
        input1[1].style.backgroundColor = null
        input1[3].style.backgroundColor = "rgba(196, 196, 196, 0.51)"
    }
    else{
        conf[3] = false
        input1[3].style.backgroundColor = null
    }
}

function postear(){
    var interes = ""
    if(conf[0] == true){
        interes = "padre"
    }
    else if(conf[1] == true){
        interes = "doctor"
    }
    else if(conf[2] == true){
        interes = "profesor"
    }
    else if(conf[3] == true){
        interes = "otro"
    }
    axios({
        method: 'post',
        url: 'http://localhost:3000/user/subirPost',
        mode: 'cors',
         headers: {
            Authorization: 'Bearer ' + window.localStorage.getItem('token')
         },
        data:{
          body: document.getElementsByClassName("descPub")[0].value ,
          arch_adjunto: "archivo", 
          date: "a"
        }
    }).then((resp) => {
      console.log("RESPONSE RECEIVED: ", resp);
    }).catch((err) =>  console.log("AXIOS ERROR: ", err));
}

function noTeVayas(e){
        if(conf[0] || conf[1] || conf[2] || conf[3] == true){

        } else{
            e.preventDefault()
        }
    
}

class Reg extends Component {
    
    render(){
        return (
            <div className="Reg">
                <MyNavBar2/><br></br><br></br><br></br>
                <div align="center">
                    <h1 className="bienv"><b>¡Bienvenido!</b></h1>  
                    <p className="complete mt-4 mb-5">Complete más información personal para mejorar su <br></br>experiencia.</p>
                    <h2 className="mt-3">Seleccione su rol</h2>
                    <br></br><br></br><br></br><br></br>
                    <form method="get" action="/">
                        <button className="atras pt-2 pb-2 pl-3 pr-3"><img className="pb-1" src={require('./components/flechaAt.svg')}></img>&nbsp;&nbsp;Atrás</button>
                    </form>
                    <form method="get" onSubmit={postear} action="/registrarse1">
                        <button onClick={noTeVayas} className="continuar pt-2 pb-2 pl-3 pr-3">Siguiente&nbsp;&nbsp;<img className="pb-1" src={require('./components/continuar.svg')}></img></button>
                    </form>
                    <div className="row justify-content-center">
                        <div className="quesos">
                            <input id="quesos1" type="image" onClick={cambioDeColor} src={require("./components/queSos1.svg")} width="200" height="200" alt=""></input><br></br><br></br>
                        </div>
                        <div className="quesos">
                            <input id="quesos2" type="image" onClick={cambioDeColor1} src={require("./components/queSos2.svg")} width="200" height="200" alt=""></input><br></br><br></br>
                        </div>
                        <div className="quesos">
                            <input id="quesos3" type="image" onClick={cambioDeColor2} src={require("./components/queSos3.svg")} width="200" height="200" alt=""></input><br></br><br></br>
                        </div>    
                        <div className="quesos">
                            <input id="quesos4" type="image" onClick={cambioDeColor3} src={require("./components/queSos4.svg")} width="200" height="200" alt=""></input><br></br><br></br>
                        </div>    
                    </div>
                    <div className="row justify-content-center">
                        <div className="padre">
                            <h3>Padre / Madre/ Tutor</h3>
                        </div>
                        <div className="doctor">
                            <h3>Doctor / Especialista</h3>
                        </div> 
                        <div className="profe">
                            <h3>Profesor/Maestro</h3>
                        </div> 
                        <div className="otro">
                            <h3>Otro</h3>
                        </div>     
                    </div>
                    <br></br><br></br><br></br><br></br> 
                </div>
                <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
                <MyFooter />
            </div>
        )
    }
}

export default Reg;