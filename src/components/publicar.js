import React from "react";
import{FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
    faUser
} from '@fortawesome/free-solid-svg-icons';

function publicar(){
  var f = new Date();
  console.log(f.getHours() + "/" + (f.getMonth() +1) + "/" + f.getFullYear());
}

const Modal = ({ handleClose, show, children }) => {
  const showHideClassName = show ? "modal d-block" : "modal d-none";
console.log(document.getElementsByClassName("descPub"))
  return (
    <div className={showHideClassName}>
      <div className="modal-container">
        <div className="row">
          <h1 className="queDes ml-3">&nbsp;&nbsp;Crear publicación</h1>
          <button href="javascript:;" className="modal-close" onClick={handleClose}>
            <img src={require('./cruz.svg')}></img>
          </button>
        </div>
        <hr className="lineaModal"></hr>
        <form onSubmit={publicar}>
          <div className="container-fluid des">
            <textarea className="descPub" type="textarea" rows="10" maxLength="100"></textarea>
          </div>
          <br></br>
          <label>Añadir a tu publicación</label><br></br>
          <div form="inline">
            <button className="btnAña"><img src={require("./imagen.svg")}width="20" height="20" alt=""></img>&nbsp;&nbsp;Imagen</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <button className="btnAña"><img src={require("./clip.svg")}width="20" height="20" alt=""></img>&nbsp;&nbsp;Archivo</button>
          </div>
          <br></br>
          <button className="btnPub">Publicar</button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
