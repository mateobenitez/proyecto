import React, {Component} from 'react';

class cat extends Component{
    render(){
        global.categorias = document.getElementsByClassName("btn")
        
        return(
            <div className="container-fluid misGa">
                <form>
                    <button id="btnInfo" onClick={cambioInfo} name="btnInfo" className="btn mt-2" ><FontAwesomeIcon icon={faInfoCircle}/> &nbsp;&nbsp;Información general</button>
                    <hr className="mt-1 mb-1"></hr>
                    <button id="btnAli" onClick={cambioAli} className="btn"><FontAwesomeIcon icon={faPalette} /> &nbsp;&nbsp;Alimentación</button><br></br>
                    <button id="btnArt" onClick={cambioArt} className="btn"><FontAwesomeIcon icon={faPalette}/> &nbsp;&nbsp;Arte</button><br></br>
                    <button id="btnDep" onClick={cambioDep} className="btn"><FontAwesomeIcon icon={faDumbbell}/> &nbsp;&nbsp;Deportes</button>
                    <button id="btnDoc" onClick={cambioDocs} className="btn"><FontAwesomeIcon icon={faGavel}/> &nbsp;&nbsp;Documentos legales</button>
                    <button id="btnEdu" onClick={cambioEdu} name="btnEdu" className="btn" ><FontAwesomeIcon icon={faGraduationCap}/> &nbsp;&nbsp;Educación</button>
                    <button id="btnRel" onClick={cambioRel} className="btn"><FontAwesomeIcon icon={faSmile}/> &nbsp;&nbsp;Relaciones sociales</button>
                    <button id="btnSal" onClick={cambioSal} className="btn"><FontAwesomeIcon icon={faHeart}/> &nbsp;&nbsp;Salud</button><br></br>
                    <button id="btnTec" onClick={cambioTec} className="btn"><FontAwesomeIcon icon={faLaptop}/> &nbsp;&nbsp;Tecnología</button><br></br>
                </form>
            </div>
        )
    }
}

